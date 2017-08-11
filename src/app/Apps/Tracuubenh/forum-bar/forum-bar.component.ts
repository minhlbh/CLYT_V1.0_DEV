import {ActivatedRoute} from '@angular/router';
import { Component, OnInit } from '@angular/core';

// services
import { ForumService } from '../../../Share/Services/forum.service';
import { FacebookService, InitParams } from 'ngx-facebook';

// interface
import { BaiViet } from '../../../Share/Services/forum.service';


@Component({
    selector: 'app-forum-bar',
    templateUrl: './forum-bar.component.html',
    styleUrls: ['./forum-bar.component.css']
})
export class ForumBarComponent implements OnInit {
    forumBarContent: BaiViet[];
    idBenh: any;
    constructor(
        private forumService: ForumService,
        private activedroute: ActivatedRoute,
        private fb: FacebookService
    ) {
        // tslint:disable-next-line:prefer-const
        let initParams: InitParams = {
            appId: '123454808277990',
            xfbml: true,
            version: 'v2.8'
        };

        fb.init(initParams);
        this.activedroute.params.subscribe(pars => {
            this.idBenh = pars['id'];
        });
    }

    ngOnInit() {
        this.forumService.getForumBar().subscribe((data) => {
            this.forumBarContent = data;
        });
    }

}
