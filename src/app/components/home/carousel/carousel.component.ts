import { transition, trigger, useAnimation } from "@angular/animations";
import { Component, HostListener, Input, OnInit } from "@angular/core";
import { Router } from "@angular/router";
import { fadeIn, fadeOut } from "./carousel.animations";

export interface CarouselImage {
    src: string,
    link: string
}

@Component({
    selector: 'app-carousel',
    templateUrl: './carousel.component.html',
    styleUrls: ['./carousel.component.scss'],
    animations: [
        trigger("carouselAnimation", [
            transition("void => *", [useAnimation(fadeIn, { params: { time: '600ms' } } )]),
            transition("* => void", [useAnimation(fadeOut, { params: { time: '600ms' } })]),
        ])
    ]
})
export class CarouselComponent implements OnInit {

    @Input() public images: Array<CarouselImage> = [];
    @Input() public autoplay: boolean = true;
    @Input() public pauseOnHover: boolean = false;

    @HostListener('mouseenter') public pauseAutoplayOnHover = () => this.autoplay && this.pauseOnHover && this.stopAutoplayLoop();
    @HostListener('mouseleave') public restartAutoplay = () => this.autoplay && this.pauseOnHover && this.startAutoplayLoop();

    public currentSlide = 0;

    private autoplayInterval = 5000; //ms
    private autoPlayLoop: any;

    constructor(private router: Router){}

    ngOnInit() {
        this.preloadImages();
        if (this.autoplay) this.startAutoplayLoop();
    }

    public previous = () => {
        const previous = this.currentSlide - 1;
        this.currentSlide = previous < 0 ? this.images.length - 1 : previous;
    }

    public next = () => {
        const next = this.currentSlide + 1;
        this.currentSlide = next === this.images.length ? 0 : next;
    }

    public goToLink = (link: string) => this.router.navigateByUrl(link);

    public goToSlide = (index: number) => this.currentSlide = index;

    private preloadImages = () => {
        for (const image of this.images) {
            new Image().src = image.src;
        }
    }

    private startAutoplayLoop = () => {
        this.autoPlayLoop = setInterval(this.next, this.autoplayInterval);
    }

    private stopAutoplayLoop = () => clearInterval(this.autoPlayLoop);
}
