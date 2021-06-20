import { Content, Excerpt, Guid, Links, Title } from "./common.model";

export interface Post {
    id: number
    date: string
    date_gmt: string
    guid: Guid
    modified: string
    modified_gmt: string
    slug: string
    status: string
    type: string
    link: string
    title: Title
    content: Content
    excerpt: Excerpt
    author: number
    featured_media: number
    comment_status: string
    ping_status: string
    sticky: boolean
    template: string
    format: string
    meta: any[]
    categories: number[]
    tags: any[]
    _links: Links
  }


