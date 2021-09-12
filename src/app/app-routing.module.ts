import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './components/home/home.component';
import { SingleComponent } from './components/single/single.component';
import { StaticPageComponent } from './components/static-page/static-page.component';

const routes: Routes = [
    { path: 'post/:slug', component: SingleComponent },

    { path: 'historia', component: StaticPageComponent },
    { path: 'estrutura/pastorais', component: StaticPageComponent },
    { path: 'estrutura/horarios-de-missas', component: StaticPageComponent },
    { path: 'estrutura/fazenda-esperanca', component: StaticPageComponent },
    { path: 'estrutura/recanto-dos-idosos', component: StaticPageComponent },
    { path: 'contato', component: StaticPageComponent },

    { path: '**', component: HomeComponent }
];

@NgModule({
    imports: [RouterModule.forRoot(routes, {
    initialNavigation: 'enabled'
})],
    exports: [RouterModule],
})
export class AppRoutingModule {}
