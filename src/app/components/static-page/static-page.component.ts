import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Media } from 'src/app/models/media.model';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-static-page',
    templateUrl: './static-page.component.html',
    styleUrls: ['./static-page.component.scss'],
})
export class StaticPageComponent implements OnInit {
    public post: Post | undefined;
    public postAuthor: string | undefined;
    public featuredMedia: Media | undefined;

    public get postDate() {
        return moment(this.post?.date).format('DD/MM/YYYY');
    }

    constructor(
        private route: ActivatedRoute,
        private wpService: WpService,
        private meta: Meta,
        private title: Title) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const slug = params.slug;
            if (!slug) throw Error('Post não encontrado');

            this.post = this.wpService.getPostBySlug(slug);
            this.postAuthor = this.wpService.getAuthorName(this.post?.author);
            this.featuredMedia = this.wpService.getMediaById(
                this.post?.featured_media
            );

            this.title.setTitle(`${environment.siteTitle} - ${this.post?.title}`);

            if (this.post) {
                this.meta.addTags([
                    {name: 'title', content: this.post?.title.rendered || ''},
                    {name: 'description', content: this.post?.excerpt.rendered || ''},
                    {name: 'author', content: this.postAuthor || ''},
                    {name: 'og:type', content: 'website'},
                    {name: 'og:url', content: `${environment.siteUrl}/post/${slug}`},
                    {name: 'og:title', content: this.post?.title.rendered || ''},
                    {name: 'og:description', content: this.post?.excerpt.rendered || ''},
                    {name: 'og:site_name', content: environment.siteTitle},
                    {name: 'og:image', content: environment.siteImage},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:url', content: `${environment.siteUrl}/post/${slug}`},
                    {name: 'twitter:title', content: this.post?.title.rendered || ''},
                    {name: 'twitter:description', content: this.post?.excerpt.rendered || ''},
                    {name: 'twitter:image', content: environment.siteImage},
                ]);
            }
        });
    }

    public getFeaturedMedia = (mediaId: number): string => {
        const media = this.wpService.getMediaById(mediaId);
        if (!media) return 'https://picsum.photos/seed/main/680/410'; //teste

        return media.source_url;
    };
}
