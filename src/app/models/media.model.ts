import { Caption, Description, Guid, Links, MediaDetails, Title } from "./common.model";

export interface Media {
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
    author: number
    comment_status: string
    ping_status: string
    template: string
    meta: any[]
    description: Description
    caption: Caption
    alt_text: string
    media_type: string
    mime_type: string
    media_details: MediaDetails
    post: number
    source_url: string
    _links: Links
  }

