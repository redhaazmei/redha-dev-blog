import fs from "fs";
import path from "path";
import matter from "gray-matter";
import readingTime from "reading-time";
import hydrate from "next-mdx-remote/hydrate";
import renderToString from "next-mdx-remote/render-to-string";
import { useRouter } from "next/router";
import { NextSeo } from "next-seo";
import MDXWrapper from "components/MDXWrapper";
import MDXComponents from "components/MDXComponents";
import BlogTitle from "components/BlogTitle";

const Blog = ({ source, frontmatter, mdxtext }) => {
  const router = useRouter();
  const content = hydrate(source, { components: MDXComponents });
  const stats = readingTime(mdxtext);
  return (
    <>
      <NextSeo
        title={`${frontmatter.title} | Redha Azmei`}
        description={frontmatter.title}
        openGraph={{
          url: `${router.pathname}`,
          title: `${frontmatter.title}`,
          description: `${frontmatter.title}`,
          images: [
            {
              url: `https://redha.dev${frontmatter.image}`,
              width: 1200,
              height: 630,
              alt: `${frontmatter.title}`,
            },
          ],
          site_name: "redha.dev | Redha Azmei",
        }}
        twitter={{
          handle: "@redhaazmei",
          cardType: "summary_large_image",
        }}
      />
      <BlogTitle title={frontmatter.title} date={frontmatter.date} readtime={stats.text} category={frontmatter.category} />
      <MDXWrapper>{content}</MDXWrapper>
    </>
  );
};

export const getStaticPaths = async () => {
  const filenames = fs.readdirSync("blogposts");
  const paths = filenames.map((filename) => ({
    params: {
      slug: filename.replace(".mdx", ""),
    },
  }));

  return {
    paths,
    fallback: false,
  };
};

export const getStaticProps = async ({ params: { slug } }) => {
  const getPosts = fs.readFileSync(path.join("blogposts", slug + ".mdx"), "utf8");
  const { content, data } = matter(getPosts);
  const mdxSource = await renderToString(content, { components: MDXComponents });
  return {
    props: {
      source: mdxSource,
      frontmatter: data,
      mdxtext: content,
    },
  };
};

export default Blog;
