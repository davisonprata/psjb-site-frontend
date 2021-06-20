import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Post } from 'src/app/models/post.model';
import { WpService } from 'src/app/services/wp.service';

@Component({
    selector: 'app-single',
    templateUrl: './single.component.html',
    styleUrls: ['./single.component.scss']
})
export class SingleComponent implements OnInit {

    public post: Post | undefined;

    constructor(
        private route: ActivatedRoute,
        private wpService: WpService) {}

    ngOnInit(): void {
        this.route.params.subscribe(params => {
            const slug = params.slug;
            if (!slug) throw Error('Post não encontrado');

            this.post = this.wpService.getPostBySlug(slug);
        });
    }

}
