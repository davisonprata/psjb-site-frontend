import { APP_INITIALIZER, NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
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
import { appInitializer } from './services/initializer.service';
import { WpService } from './services/wp.service';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { CarouselComponent } from './components/home/carousel/carousel.component';



@NgModule({
    declarations: [
        AppComponent,
        HeaderComponent,
        FooterComponent,

        HomeComponent,
        BannersComponent,
        LastPostsComponent,
        ChannelsComponent,
        CarouselComponent,

        CategoryComponent,
        SingleComponent,
    ],
    imports: [
        BrowserModule.withServerTransition({ appId: 'serverApp' }),
        BrowserAnimationsModule,
        HttpClientModule,
        AppRoutingModule
    ],
    providers: [
        { provide: APP_INITIALIZER, useFactory: appInitializer, multi: true, deps: [WpService] }
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
