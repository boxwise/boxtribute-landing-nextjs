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

export interface IImageText5050Data {
  image_mobile: string;
  banner: string;
  image_description: string;
  picture_left?: boolean;
  text: string;
  color?: string;
  bg_color?: string;
  align?: "center" | "left" | "right" | "justify";
}

export interface ILatLng {
  lat: number;
  long: number;
}

export interface IBaseMarker {
  base_name: string;
  organisation: string;
  url: string;
  logo: string;
  description: string;
  position: ILatLng;
}
