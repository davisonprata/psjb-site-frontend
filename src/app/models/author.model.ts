import { AvatarUrls, Links } from './common.model';

export interface Author {
    id: number;
    name: string;
    url: string;
    description: string;
    link: string;
    slug: string;
    avatar_urls: AvatarUrls;
    meta: any[];
    _links: Links;
}
