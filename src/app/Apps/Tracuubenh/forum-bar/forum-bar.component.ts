import { Component, OnInit } from '@angular/core';

// services
import { ForumService } from '../../../Share/Services/forum.service';

// interface
import { BaiViet } from '../../../Share/Services/forum.service';


@Component({
    selector: 'app-forum-bar',
    templateUrl: './forum-bar.component.html',
    styleUrls: ['./forum-bar.component.css']
})
export class ForumBarComponent implements OnInit {
    forumBarContent: BaiViet[];

    constructor(private forumService: ForumService) { }

    ngOnInit() {
        this.forumService.getForumBar().subscribe((data) => {
            this.forumBarContent = data;
        });
    }

}
