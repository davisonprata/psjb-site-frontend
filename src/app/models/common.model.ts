export interface Links {
    self: Self[]
    collection: Collection[]
    about: About[]
    author: Author[]
    replies: Reply[]
    "version-history": VersionHistory[]
    "predecessor-version"?: PredecessorVersion[]
    "wp:attachment": WpAttachment[]
    "wp:term": WpTerm[],
    "wp:post_type"?: WpPostType[],
    curies: Cury[]
}

export interface Guid {
    rendered: string
}

export interface Title {
    rendered: string
}

export interface Content {
    rendered: string
    protected: boolean
}

export interface Excerpt {
    rendered: string
    protected: boolean
}

export interface Self {
    href: string
}

export interface Collection {
    href: string
}

export interface About {
    href: string
}

export interface Author {
    embeddable: boolean
    href: string
}

export interface Reply {
    embeddable: boolean
    href: string
}

export interface VersionHistory {
    count: number
    href: string
}

export interface PredecessorVersion {
    id: number
    href: string
}

export interface WpAttachment {
    href: string
}

export interface WpTerm {
    taxonomy: string
    embeddable: boolean
    href: string
}

export interface WpPostType {
    href: string
}

export interface Cury {
    name: string
    href: string
    templated: boolean
}

export interface Description {
    rendered: string
}

export interface Caption {
    rendered: string
}

export interface MediaDetails {
    width: number
    height: number
    file: string
    sizes: Sizes
    image_meta: ImageMeta
}

export interface Sizes {
    medium: Medium
    thumbnail: Thumbnail
    full: Full
}

export interface Medium {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
}

export interface Thumbnail {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
}

export interface Full {
    file: string
    width: number
    height: number
    mime_type: string
    source_url: string
}

export interface ImageMeta {
    aperture: string
    credit: string
    camera: string
    caption: string
    created_timestamp: string
    copyright: string
    focal_length: string
    iso: string
    shutter_speed: string
    title: string
    orientation: string
    keywords: any[]
}
