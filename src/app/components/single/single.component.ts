import { Component, OnInit } from '@angular/core';
import { Meta, Title } from '@angular/platform-browser';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Media } from 'src/app/models/media.model';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';
import { environment } from 'src/environments/environment';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss'],
})
export class SingleComponent implements OnInit {
    public post: Post | undefined;
    public postAuthor: string | undefined;
    public featuredMedia: Media | undefined;

    public get postDate() {
        return moment(this.post?.date).format('DD/MM/YYYY');
    }

    constructor(
        private route: ActivatedRoute,
        private wpService: WpService,
        private title: Title,
        private meta: Meta) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const slug = params.slug;
            if (!slug) throw Error('Post não encontrado');

            this.post = this.wpService.getPostBySlug(slug);
            this.postAuthor = this.wpService.getAuthorName(this.post?.author) || '';
            this.featuredMedia = this.wpService.getMediaById(
                this.post?.featured_media
            );

            const postTitle = this.post?.title.rendered?.replace(/<[^>]*>?/gm, '') || '';
            const postExcerptFull = this.post?.excerpt.rendered?.replace(/<[^>]*>?/gm, '') || '';
            const postExcerpt = postExcerptFull.substring(0, postExcerptFull.length > 200 ? 200 : postExcerptFull.length) + '...';

            this.title.setTitle(`${environment.siteTitle} - ${postTitle}`);

            if (this.post) {
                this.meta.addTags([
                    {name: 'title', content: postTitle},
                    {name: 'description', content: postExcerpt},
                    {name: 'author', content: this.postAuthor},
                    {name: 'og:type', content: 'website'},
                    {name: 'og:url', content: `${environment.siteUrl}/post/${slug}`},
                    {name: 'og:title', content: postTitle},
                    {name: 'og:description', content: postExcerpt},
                    {name: 'og:site_name', content: environment.siteTitle},
                    {name: 'og:image', content: environment.siteImage},
                    {name: 'twitter:card', content: 'summary_large_image'},
                    {name: 'twitter:url', content: `${environment.siteUrl}/post/${slug}`},
                    {name: 'twitter:title', content: postTitle},
                    {name: 'twitter:description', content: postExcerpt},
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
