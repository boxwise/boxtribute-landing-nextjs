import { useRouter } from "next/router";
import ErrorPage from "next/error";
import NewsBody from "../../components/NewsBody";
import NewsHeader from "../../components/NewsHeader";
import { getNewsBySlug, getAllNews } from "../../lib/api";
import Head from "next/head";
import type { INewsData } from "../../interfaces/global";
import markdownToHtml from "../../lib/markdownToHtml";

type Props = {
  newsData: INewsData;
};

export default function Post({newsData}: Props) {
  const router = useRouter();

  if (!router.isFallback && !newsData?.slug) {
    return <ErrorPage statusCode={404} />;
  }
  return (
    <div>
      {router.isFallback ? (
        <h1>Loading…</h1>
      ) : (
        <>
          <Head>
            <title>{newsData.title}</title>
          </Head>
          <article className="mb-32">
            <NewsHeader newsHeaderData={newsData} />
            <NewsBody><div dangerouslySetInnerHTML={{ __html: newsData.blogText }}></div></NewsBody>
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
    "slug",
    "headline",
    "text",
    "image",
    "image_description",
    "blog_text"
  ]);

  const blogText = await markdownToHtml(newsData.blog_text || '')


  return {
    props: {
      newsData: {
        ...newsData,
        blogText
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
