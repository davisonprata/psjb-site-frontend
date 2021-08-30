import { Component, OnInit } from '@angular/core';
import { Meta } from '@angular/platform-browser';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-home',
    templateUrl: './home.component.html',
    styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {

    public posts: Array<Post> = [];

    constructor(private meta: Meta, private wpService: WpService) {
        this.meta.addTags([
            {name: 'title', content: environment.siteTitle},
            {name: 'description', content: environment.siteDescription},
            {name: 'author', content: 'Vinícius Cardoso'},
            {name: 'og:type', content: 'website'},
            {name: 'og:url', content: environment.siteUrl},
            {name: 'og:title', content: environment.siteTitle},
            {name: 'og:description', content: environment.siteDescription},
            {name: 'og:site_name', content: environment.siteTitle},
            {name: 'og:image', content: environment.siteImage},
            {name: 'twitter:card', content: 'summary_large_image'},
            {name: 'twitter:url', content: environment.siteUrl},
            {name: 'twitter:title', content: environment.siteTitle},
            {name: 'twitter:description', content: environment.siteDescription},
            {name: 'twitter:image', content: environment.siteImage},
        ]);
    }

    ngOnInit(): void {
        this.posts = this.wpService.getAllPosts();
    }
}
