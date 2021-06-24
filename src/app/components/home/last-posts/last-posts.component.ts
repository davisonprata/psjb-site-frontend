import { Component, OnInit } from '@angular/core';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';

@Component({
    selector: 'app-last-posts',
    templateUrl: './last-posts.component.html',
    styleUrls: ['./last-posts.component.scss'],
})
export class LastPostsComponent implements OnInit {
    private lastPosts: Array<Post> = [];

    public get lastestPost() {
        return this.lastPosts[0];
    }
    public get nextLastestPosts() {
        return this.lastPosts.slice(1);
    }

    constructor(private wpService: WpService) {}

    ngOnInit() {
        this.lastPosts = this.wpService.getLastestPosts(3, "artigos");
    }

    public getCategoryName = (categoryId: number) =>
        this.wpService.getCategoryName(categoryId);

    public getFeaturedMedia = (mediaId: number): string => {
        const media = this.wpService.getMediaById(mediaId);
        if (!media) return 'https://picsum.photos/seed/main/680/410'; //teste

        return media.source_url;
    };
}
