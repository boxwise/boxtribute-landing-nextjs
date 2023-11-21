import * as fs from "fs";
import { join } from "path";
import matter from "gray-matter";

const dataDirectory = join(process.cwd(), "data");

// TODO: How to read richtext
export function getDataBySlug(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(dataDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return data;
}

const newsDirectory = join(process.cwd(), "data/home/news");

export function getNewsSlugs() {
  return fs.readdirSync(newsDirectory);
}

export function getNewsBySlug(slug: string, fields: string[] = []) {
  const newsSlug = slug.replace(/\.md$/, "");
  const fullPath = join(newsDirectory, `${newsSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  type Items = {
    [key: string]: string;
  };

  const items: Items = {};

  // Ensure only the minimal needed data is exposed
  fields.forEach((field) => {
    if (field === "slug") {
      items[field] = newsSlug;
    }
    if (field === "content") {
      items[field] = content;
    }
    // ToDo: how to handle date objects
    // if (data[field] instanceof Date && !isNaN(data[field])) {
    //   items[field] = JSON.stringify(data[field]);
    // }
    if (typeof data[field] !== "undefined") {
      items[field] = data[field];
    }
  });

  return items;
}

export function getAllNews(fields: string[] = []) {
  const slugs = getNewsSlugs();
  const posts = slugs
    .map((slug) => getNewsBySlug(slug, fields))
    .filter((post) => post.position_in_preview!="0")
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.position_in_preview < post2.position_in_preview ? -1 : 1));
  return posts;
}
