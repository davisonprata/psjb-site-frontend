import { Injectable } from '@angular/core';
import * as moment from 'moment';
import { Author } from '../models/author.model';
import { Category } from '../models/category.model';
import { Media } from '../models/media.model';
import { Post } from '../models/post.model';
import { WordpressApi } from './api.service';

@Injectable({
    providedIn: 'root',
})
export class WpService {
    private categories: Array<Category> = [];
    private posts: Array<Post> = [];
    private medias: Array<Media> = [];
    private authors: Array<Author> = [];

    constructor(private api: WordpressApi) {}

    public initialize = async () => {
        this.categories = await this.api.getCategories().toPromise();
        this.posts = await this.api.getPosts().toPromise();
        this.medias = await this.api.getMedias().toPromise();
        this.authors = await this.api.getAuthors().toPromise();
    };

    public getAllPosts = (): Array<Post> => this.posts;

    public getLastestPosts = (quantity: number, categorySlug: string): Array<Post> => {
        const categoryId = this.categories.find(x => x.slug === categorySlug)?.id;

        return this.posts
            .filter(x => !categoryId || x.categories.includes(categoryId))
            .sort((a, b) => moment(b.date).diff(moment(a.date)))
            .slice(0, quantity);
    }

    public getPostBySlug = (slug: string): Post | undefined =>
        this.posts.find(p => p.slug === slug);

    public getPostsByCategory = (slug: string): Array<Post> => {
        const categoryId = this.categories.find((c) => c.slug === slug)?.id;

        if (!categoryId) {
            throw Error('Categoria não encontrada');
        }

        return this.posts.filter(p => p.categories.includes(categoryId));
    };

    public getMediasByPostId = (postId: number): Array<Media> =>
        this.medias.filter((x) => x.post === postId);

    public getMediaById = (mediaId: number | undefined): Media | undefined => this.medias.find((x) => x.id === mediaId);

    public assureMediaIsLoaded = (mediaId: number | undefined): void => {
        const isLoaded = this.getMediaById(mediaId);
        if (!isLoaded) {
            this.api.getMediaById(mediaId).subscribe(media => this.medias.push(media))
        }
    }

    public getCategoryName = (categoryId: number): string | undefined =>
        this.categories.find((x) => x.id === categoryId)?.name;

    public getAuthorName = (authorId: number | undefined): string | undefined =>
        this.authors.find((x) => x.id === authorId)?.name;
}
