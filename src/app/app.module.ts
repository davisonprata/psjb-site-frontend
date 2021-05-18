import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { IvyCarouselModule } from 'angular-responsive-carousel';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BannersComponent } from './components/banners/banners.component';
import { ChannelsComponent } from './components/channels/channels.component';
import { FooterComponent } from './components/footer/footer.component';
import { HeaderComponent } from './components/header/header.component';
import { LastPostsComponent } from './components/last-posts/last-posts.component';

@NgModule({
    declarations: [
        HeaderComponent,
        BannersComponent,
        LastPostsComponent,
        ChannelsComponent,
        FooterComponent,

        AppComponent
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
