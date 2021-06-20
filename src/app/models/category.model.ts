import { Links } from "./common.model";

export interface Category {
    id: number
    count: number
    description: string
    link: string
    name: string
    slug: string
    taxonomy: string
    parent: number
    meta: any[]
    _links: Links
  }
