import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Category } from '../models/category.model';
import { Media } from '../models/media.model';
import { Post } from '../models/post.model';
import { WordpressApi } from './api.service';

@Injectable({
    providedIn: 'root'
})
export class WpService {

    private categories: Array<Category> = [];
    private posts: Array<Post> = [];
    private medias: Array<Media> = [];

    constructor(private api: WordpressApi) {}

    public initialize = async () =>  {
        this.categories = await this.api.getCategories().toPromise();
        this.posts = await this.api.getPosts().toPromise();
        this.medias = await this.api.getMedias().toPromise();
    }

    public getAllPosts = (): Array<Post> => this.posts;

    public getLastestPosts = (quantity: number): Array<Post> => this.posts.sort((a, b) => moment(b.date).diff(moment(a.date))).slice(0, quantity);

    public getPostBySlug = (slug: string): Post | undefined => this.posts.find(p => p.slug === slug);

    public getPostsByCategory = (slug: string): Array<Post> => {
        const categoryId = this.categories.find(c => c.slug === slug)?.id;

        if (!categoryId) {
            throw Error('Categoria não encontrada');
        }

        return this.posts.filter(p => p.categories.includes(categoryId));
    }

    public getMediasByPostId = (postId: number): Array<Media> => this.medias.filter(x => x.post === postId);

    public getMediaById = (mediaId: number): Media | undefined => this.medias.find(x => x.id === mediaId);

    public getCategoryName = (categoryId: number): string | undefined => this.categories.find(x => x.id === categoryId)?.name;
}
