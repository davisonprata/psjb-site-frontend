import { AfterViewInit, ChangeDetectorRef, Component, OnInit, ViewChild } from "@angular/core";
import { Router } from "@angular/router";
import * as moment from "moment";
import { WpService } from "src/app/services/wp.service";

export interface BannerContext {
    path: string;
    href: string;
}

@Component({
    selector: 'app-banners',
    templateUrl: './banners.component.html',
    styleUrls: ['./banners.component.scss']
})
export class BannersComponent implements OnInit, AfterViewInit {

    @ViewChild('slider') public slider: any;

    public images: Array<any> = [
        // { path: 'https://picsum.photos/id/1000/1920/1080', href: '/um' },
        // { path: 'https://picsum.photos/id/1002/1920/1080', href: '/dois' },
        // { path: 'https://picsum.photos/id/1021/1920/1080', href: '/tres' }
    ];

    constructor(private router: Router, private wpService: WpService) {}

    ngOnInit() {
        this.images = this.wpService.getPostsByCategory("banners")
            .map(post => {
                const featMedia = this.wpService.getMediaById(post.featured_media);
                return {
                    path: `${featMedia?.source_url}`,
                    href: `/post/${post.slug}`
                }
            });
    }

    ngAfterViewInit() {
        for (const cell of this.slider.cells.cells) {
            const href = this.images?.find(x => x.path === cell.firstChild.src)?.href;
            if (href) cell.onclick = () => this.router.navigateByUrl(href);
        }
    }
}
