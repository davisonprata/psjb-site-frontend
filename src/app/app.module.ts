import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CategoryComponent } from './components/category/category.component';
import { SingleComponent } from './components/single/single.component';
import { BannersComponent } from './components/home/banners/banners.component';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { HomeComponent } from './components/home/home.component';
import { LastPostsComponent } from './components/home/last-posts/last-posts.component';
import { ChannelsComponent } from './components/channels/channels.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,

        HomeComponent,
        BannersComponent,
        LastPostsComponent,
        ChannelsComponent,

        CategoryComponent,
        SingleComponent,
    ],
    imports: [
        BrowserModule,
        AppRoutingModule,
        IvyCarouselModule
    ],
    providers: [],
    bootstrap: [AppComponent],
})
export class AppModule {}
