import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import * as moment from 'moment';
import { Media } from 'src/app/models/media.model';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';

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

    constructor(private route: ActivatedRoute, private wpService: WpService) {}

    ngOnInit(): void {
        this.route.params.subscribe((params) => {
            const slug = params.slug;
            if (!slug) throw Error('Post não encontrado');

            this.post = this.wpService.getPostBySlug(slug);
            this.postAuthor = this.wpService.getAuthorName(this.post?.author);
            this.featuredMedia = this.wpService.getMediaById(
                this.post?.featured_media
            );
        });
    }

    public getFeaturedMedia = (mediaId: number): string => {
        const media = this.wpService.getMediaById(mediaId);
        if (!media) return 'https://picsum.photos/seed/main/680/410'; //teste

        return media.source_url;
    };
}
