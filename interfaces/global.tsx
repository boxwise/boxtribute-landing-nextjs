export interface IAuthor {
  name: string;
  picture: string;
}

export interface INewsData {
  title: string;
  headline: string;
  short_text: string;
  blog_text: string;
  blogText?: string;
  image_mobile: string;
  banner: string;
  image_description: string;
  slug: string;
  author: IAuthor;
  created_date: object;
  position_in_preview: number;
}
