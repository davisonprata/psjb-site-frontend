import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public posts: Array<Post> = [];

    constructor(private wpService: WpService) {}

    ngOnInit(): void {
        this.posts = this.wpService.getAllPosts();
    }
}
