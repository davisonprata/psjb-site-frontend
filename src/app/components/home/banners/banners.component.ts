import { Component, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { WpService } from "src/app/services/wp.service";
import { CarouselImage } from "../carousel/carousel.component";

export interface BannerContext {
    path: string;
    href: string;
}

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit {

    public images: Array<CarouselImage> = [];

    constructor(private wpService: WpService) {}

    ngOnInit() {
        this.images = this.wpService.getPostsByCategory("banners")
            .map(post => {
                const featMedia = this.wpService.getMediaById(post.featured_media);
                return {
                    src: `${featMedia?.source_url}`,
                    link: `/post/${post.slug}`
                }
            });
    }
}
