import {groq} from 'next-sanity'
import type {PortableTextBlock} from '@portabletext/types'

import {client} from '@/sanity/lib/client'

const reviewFields = groq`
  _id,
  title,
  "slug": coalesce(slug.current, _id),
  body,
  "name": coalesce(reviewerName, "Anonymous"),
  reviewerAvatar,
  meta,
  verified,
  rating,
  "createdAt": coalesce(publishedAt, _createdAt),
  "helpfulCount": coalesce(helpfulCount, 0),
  "tags": coalesce(tags, []),
  response
`

export type ReviewDocument = {
  _id: string
  slug: string
  title: string
  body: PortableTextBlock[]
  name: string
  reviewerAvatar?: any
  meta?: string
  verified?: boolean
  rating: number
  createdAt: string
  helpfulCount: number
  tags: string[]
  response?: {
    author?: string
    createdAt?: string
    body?: string
  } | null
}

export async function getReviews(): Promise<ReviewDocument[]> {
  return client.fetch(
    groq`*[_type == "review" && defined(slug.current)] | order(publishedAt desc, _createdAt desc) {${reviewFields}}`,
  )
}

export async function getReviewBySlug(slug: string): Promise<ReviewDocument | null> {
  return client.fetch(
    groq`*[_type == "review" && slug.current == $slug][0]{${reviewFields}}`,
    {slug},
  )
}

export async function getRelatedReviews(slug: string, limit = 2): Promise<ReviewDocument[]> {
  return client.fetch(
    groq`*[_type == "review" && slug.current != $slug] | order(publishedAt desc, _createdAt desc)[0...$limit]{${reviewFields}}`,
    {slug, limit},
  )
}

export async function getReviewSlugs(): Promise<string[]> {
  return client.fetch(groq`*[_type == "review" && defined(slug.current)].slug.current`)
}
