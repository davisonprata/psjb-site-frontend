import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { map } from 'rxjs/operators';
import { Post } from '../models/post.model';
import { Category } from '../models/category.model';
import { Media } from '../models/media.model';
import { Author } from '../models/author.model';

@Injectable({
    providedIn: 'root',
})
export class WordpressApi {
    constructor(private http: HttpClient) {}

    public getPosts = (): Observable<Array<Post>> =>
        this.http
            .get(`${environment.wpApiUrl}/posts`)
            .pipe(map((result) => result as Array<Post>));

    public getCategories = (): Observable<Array<Category>> =>
        this.http
            .get(`${environment.wpApiUrl}/categories`)
            .pipe(map((result) => result as Array<Category>));

    public getMedias = (): Observable<Array<Media>> =>
        this.http
            .get(`${environment.wpApiUrl}/media`)
            .pipe(map((result) => result as Array<Media>));

    public getMediaById = (mediaId: number | undefined): Observable<Media> =>
        this.http
            .get(`${environment.wpApiUrl}/media/${mediaId}`)
            .pipe(map((result) => result as Media));

    public getAuthors = (): Observable<Array<Author>> =>
        this.http
            .get(`${environment.wpApiUrl}/users`)
            .pipe(map((result) => result as Array<Author>));
}
