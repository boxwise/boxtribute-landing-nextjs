import { useRouter } from "next/router";
import ErrorPage from "next/error";
import Avatar from "../../components/Avatar";
import PostTitle from "../../components/PostTitle";
import Image from "next/image";
import Footer, { IFooterData } from "../../components/Footer";
import SectionTitle from "../../components/SectionTitle";
import NewsPreview from "../../components/NewsPreview";
// import DateFormatter from "../../components/DateFormatter";

import PostBody from "../../components/PostBody";

import { getNewsBySlug, getAllNews, getDataBySlug } from "../../lib/api";
import Head from "next/head";
import type { INewsData } from "../../interfaces/global";
// import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  newsData: INewsData;
  allNews: INewsData[];
  footerData: IFooterData;
};

export default function Post({ newsData, allNews, footerData }: Props) {
  const router = useRouter();

  if (!router.isFallback && !newsData?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <>
      <div className="container mx-auto px-4">
        {router.isFallback ? (
          <h1>Loading…</h1>
        ) : (
          <>
            <article className="mt-12 mb-16">
              <Head>
                <title>{newsData.title}</title>
                {/* <meta property="og:image" content={post.ogImage.url} /> */}
              </Head>
              <PostTitle title={newsData.title} headline={newsData.headline} />

              <div className="hidden md:block md:mb-12">
                <Avatar name={newsData.author.name} picture={newsData.author.picture} />
              </div>
              {newsData.banner && (
                <div className="mb-8 md:mb-16 sm:mx-0 h-[640px] w-full relative mx-auto">
                  <Image
                    src={newsData.banner}
                    alt={`Cover Image for ${newsData.title}`}
                    layout="fill"
                    objectFit="cover"
                  />
                </div>
              )}
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
      <SectionTitle title="Other News" color="lightblue" />
      {allNews.map((e, i) => (
        <NewsPreview key={i} newsData={e} order={i % 2} />
      ))}
      <Footer footerData={footerData} />
    </>
  );
}

type Params = {
  params: {
    slug: string;
  };
};

export async function getStaticProps({ params }: Params) {
  const newsKeys = [
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
  ];

  const newsData = getNewsBySlug(params.slug, newsKeys);

  // We do not need to converse markdown to html since forestry can save text as html
  // const blogText = await markdownToHtml(newsData.blog_text || "");

  const allNews = getAllNews(newsKeys);
  const footerData = getDataBySlug("footer/footer");

  return {
    props: {
      newsData: {
        ...newsData,
        // blogText,
      },
      footerData,
      allNews,
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
