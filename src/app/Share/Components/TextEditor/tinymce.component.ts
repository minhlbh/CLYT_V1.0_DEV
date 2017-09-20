import { Component, OnInit, Output, EventEmitter, AfterViewInit, OnDestroy, Input } from '@angular/core';
import { element } from 'protractor';
import { Http } from '@angular/http';
import { Location } from '@angular/common';
declare var tinymce: any;

@Component({
    selector: 'app-tinymce',
    templateUrl: './tinymce.component.html',
    styleUrls: ['./tinymce.component.css']
})
export class TinymceComponent implements AfterViewInit, OnDestroy {
    @Input() initValue: string;
    @Input() elementId: String;
    @Output() onEditorKeyup = new EventEmitter<any>();
    public editor: any;
    constructor(
        public http: Http
    ) { }



    ngAfterViewInit() {
        localStorage.setItem('textEditor.imgData', '');
        tinymce.init({
            selector: '#' + this.elementId,
            plugins: [
                'advlist autolink lists link image charmap print preview hr anchor pagebreak',
                'searchreplace wordcount visualblocks visualchars code fullscreen',
                'insertdatetime media nonbreaking save table contextmenu directionality',
                'emoticons template paste textcolor colorpicker textpattern'
            ],
            height : '300',
            menubar: 'false',
            // tslint:disable-next-line:max-line-length
            toolbar1: 'undo redo | styleselect | bold italic | alignleft aligncenter alignright alignjustify | bullist numlist outdent indent | link image',
            toolbar2: 'print preview media | forecolor backcolor emoticons',
            // enable title field in the Image dialog
            image_title: true,
            // enable automatic uploads of images represented by blob or data URIs
            automatic_uploads: true,

            // here we add custom filepicker only to Image dialog
            file_picker_types: 'image',
            // and here's our custom image picker
            file_picker_callback: function (cb, value, meta) {
                const input = document.createElement('input');
                input.setAttribute('type', 'file');
                input.setAttribute('accept', 'image/*');

                // Note: In modern browsers input[type="file"] is functional without
                // even adding it to the DOM, but that might not be the case in some older
                // or quirky browsers like IE, so you might want to add it to the DOM
                // just in case, and visually hide it. And do not forget do remove it
                // once you do not need it anymore.

                input.onchange = function () {
                    const ie = <HTMLInputElement>this;
                    const file = ie.files[0];
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = function () {
                        // Note: Now we need to register the blob in TinyMCEs image blob
                        // registry. In the next release this part hopefully won't be
                        // necessary, as we are looking to handle it internally.
                        const id = 'blobid' + (new Date()).getTime();
                        const blobCache = tinymce.activeEditor.editorUpload.blobCache;
                        const base64 = reader.result.split(',')[1];
                        const blobInfo = blobCache.create(id, file, base64);
                        blobCache.add(blobInfo);

                        // call the callback and populate the Title field with the file name
                        cb(blobInfo.blobUri(), { title: file.name });
                    };
                };

                input.click();
            },
            images_upload_handler: function (blobInfo, success, failure) {
                let xhr, formData;

                xhr = new XMLHttpRequest();
                xhr.withCredentials = false;
                xhr.open('POST', 'http://api.truongkhoa.com/api/DD/UploadImg');

                xhr.onload = function () {
                    let json;

                    if (xhr.status !== 200) {
                        failure('HTTP Error: ' + xhr.status);
                        return;
                    }

                    json = JSON.parse(xhr.responseText);

                    if (!json || typeof json.location !== 'string') {
                        failure('Invalid JSON: ' + xhr.responseText);
                        return;
                    }
                    if (xhr.status === 200) {
                        success(json.location);
                        const _images = localStorage.getItem('textEditor.imgData');
                        try {
                            let images = JSON.parse(_images);
                            images = [...images, json.location];
                            localStorage.setItem('textEditor.imgData', JSON.stringify(images));
                        } catch (e) {
                            let images = [];
                            images = [...images, json.location];
                            localStorage.setItem('textEditor.imgData', JSON.stringify(images));
                        }
                    }

                };

                formData = new FormData();
                formData.append('file', blobInfo.blob(), blobInfo.filename());

                xhr.send(formData);
            },

            setup: editor => {
                this.editor = editor;
                editor.on('init', () => {
                    if (this.initValue){
                        editor.setContent(this.initValue);
                    }
                  });
                editor.on('keyup', () => {
                    const content = editor.getContent();
                    this.onEditorKeyup.emit(content);
                });
            }
        });

    }

    ngOnDestroy() {
        tinymce.remove(this.editor);
    }
}
