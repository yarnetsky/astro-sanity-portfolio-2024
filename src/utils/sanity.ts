import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";

export async function getPages(): Promise<Page[]> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && defined(slug.current)] | order(date desc)`
  );
}

export async function getPage(slug: string): Promise<Page> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]`,
    {
      slug,
  }
  );
}

export interface Page {
  _type: 'page';
  _createdAt: string;
  title?: string;
  tags: string[];
  slug: Slug;
  excerpt?: PortableTextBlock[];
  mainImage?: ImageAsset;
  content: PortableTextBlock[];
  body: PortableTextBlock[];
}
