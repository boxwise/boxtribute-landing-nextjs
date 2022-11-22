import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Avatar from "../../components/Avatar";
import PostTitle from "../../components/PostTitle";
import Image from "next/image";
// import DateFormatter from "../../components/DateFormatter";

import PostBody from "../../components/PostBody";

import { getNewsBySlug, getAllNews } from "../../lib/api";
import Head from "next/head";
import type { INewsData } from "../../interfaces/global";
// import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  newsData: INewsData;
};

export default function Post({ newsData }: Props) {
  const router = useRouter();

  if (!router.isFallback && !newsData?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div className="container mx-auto px-4">
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <article className="mb-32">
            <Head>
              <title>{newsData.title}</title>
              {/* <meta property="og:image" content={post.ogImage.url} /> */}
            </Head>
            <PostTitle title={newsData.title} headline={newsData.headline} />

            <div className="hidden md:block md:mb-12">
              <Avatar name={newsData.author.name} picture={newsData.author.picture} />
            </div>
            <div className="mb-8 md:mb-16 sm:mx-0 max-h-[630px] w-full">
              <Image
                src={newsData.banner}
                alt={`Cover Image for ${newsData.title}`}
                width={1300}
                height={630}
                objectFit="cover"
              />
            </div>
            <div className="max-w-2xl mx-auto">
              <div className="block md:hidden mb-6">
                <Avatar name={newsData.author.name} picture={newsData.author.picture} />
              </div>
              {/* <div className="mb-6 text-lg">
                <DateFormatter dateString={newsData.created_date} />
              </div> */}
            </div>

            <PostBody content={newsData.blog_text} />
          </article>
        </>
      )}
    </div>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const newsData = getNewsBySlug(params.slug, [
    "title",
    "headline",
    "short_text",
    "blog_text",
    "slug",
    "banner",
    "image_mobile",
    "image_description",
    "author",
    // "created_date", Date conversion from string does not work
    "position_in_preview",
  ]);

  // We do not need to converse markdown to html since forestry can save text as html
  // const blogText = await markdownToHtml(newsData.blog_text || "");

  return {
    props: {
      newsData: {
        ...newsData,
        // blogText,
      },
    },
  };
}

export async function getStaticPaths() {
  const news = getAllNews(["slug"]);

  return {
    paths: news.map((post) => {
      return {
        params: {
          slug: post.slug,
        },
      };
    }),
    fallback: false,
  };
}
