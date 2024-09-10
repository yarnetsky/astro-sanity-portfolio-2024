import { sanityClient } from "sanity:client";
import type { PortableTextBlock } from "@portabletext/types";
import type { ImageAsset, Slug } from "@sanity/types";
import groq from "groq";


export async function getPages() {
  const pages = await sanityClient.fetch(
    `*[_type == "page"]{ "slug": slug.current }`
  );
  return { pages };
}

export async function getProjects() {
  const projects = await sanityClient.fetch(
    `*[_type == "project"]{ "slug": slug.current }`
  );
  return { projects };
}

export async function getPosts() {
  const posts = await sanityClient.fetch(
    `*[_type == "post"]{ "slug": slug.current }`
  );
  return { posts };
}

export async function getPage(slug: string): Promise<Page> {
  return await sanityClient.fetch(
    groq`*[_type == "page" && slug.current == $slug][0]{
      _id,
      _type,
      date,
      title,
      tags,
      slug,
      excerpt,
      featuredProjects[]->{ title, slug, mainImage },
      mainImage,
    }`,
    {
      slug,
    }
  );
}

export async function getPost(slug: string): Promise<Post> {
  return await sanityClient.fetch(
    groq`*[_type == "post" && slug.current == $slug][0]{
      _id,
      _type,
      date,
      title,
      tags,
      slug,
      excerpt,
      content,
      mainImage,
    }`,
    {
      slug,
    }
  );
}

export async function getProject(slug: string): Promise<Project> {
  return await sanityClient.fetch(
    groq`*[_type == "project" && slug.current == $slug][0]{
      _id,
      _type,
      date,
      title,
      tags,
      slug,
      excerpt,
      mainImage,
      content,
    }`,
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
  mainImage?: ImageAsset;
  excerpt?: PortableTextBlock[];
  featuredProjects?: Project[];
}

export interface Post {
  _type: 'post';
  _createdAt: string;
  title?: string;
  tags: string[];
  slug: Slug;
  excerpt?: PortableTextBlock[];
  mainImage?: ImageAsset;
  content: PortableTextBlock[];
}

export interface Project {
  _type: 'project';
  _createdAt: string;
  title?: string;
  tags: string[];
  slug: Slug;
  excerpt?: PortableTextBlock[];
  mainImage?: ImageAsset;
  content: PortableTextBlock[];
}
