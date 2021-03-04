import { NextSeo } from "next-seo";
import { getposts } from "lib/getposts";
import { SimpleGrid } from "@chakra-ui/react";
import Author from "components/Author";
import SectionLayout from "components/SectionLayout";
import ProjectCard from "components/ProjectCard";
import BlogCard from "components/BlogCard";

const Home = ({ posts }) => {
  const filteredposts = posts.sort((a, b) => Number(new Date(b.date)) - Number(new Date(a.date))).slice(0, 2);
  return (
    <>
      <NextSeo
        title="Redha Azmei"
        description="A Data Scientist with deep interest in ML, AI and modern Web Technologies. Currently working in the aviation industry based in Malaysia 🇲🇾. Welcome to my personal space where I share all my thoughts on techs."
        openGraph={{
          url: "https://redha.dev",
          title: "redha.dev | Redha Azmei",
          description: "A Data Scientist with deep interest in ML, AI and modern Web Technologies. Currently working in the aviation industry based in Malaysia 🇲🇾. Welcome to my personal space where I share all my thoughts on techs.",
          images: [
            {
              url: "https://redha.dev/images/redha.dev-banner.png",
              width: 1200,
              height: 630,
              alt: "redha.dev banner",
            },
          ],
          site_name: "redha.dev | Redha Azmei",
        }}
        twitter={{
          handle: "@redhaazmei",
          cardType: "summary_large_image",
        }}
      />
      <Author />
      <SectionLayout heading="Featured Projects" text="Highlights of my recent involvements">
        <ProjectCard />
      </SectionLayout>
      <SectionLayout heading="Latest Posts" text="I write about stuffs that I find interesting.">
        <SimpleGrid columns={[1, 2]} spacing="8" mb="6">
          {filteredposts.map((post) => {
            return <BlogCard key={post.title} title={post.title} date={post.date} description={post.description} category={post.category} image={post.image} slug={post.slug} readtime={post.readtime} />;
          })}
        </SimpleGrid>
      </SectionLayout>
    </>
  );
};

export const getStaticProps = async () => {
  const posts = getposts();
  return {
    props: {
      posts,
    },
  };
};

export default Home;
