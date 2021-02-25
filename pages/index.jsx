import Head from "next/head";
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
      <Head>
        <title>Redha Azmei</title>
      </Head>
      <Author />
      <SectionLayout heading="Featured Projects" text="Highlights of my recent involvements">
        <ProjectCard />
      </SectionLayout>
      <SectionLayout heading="Latest Posts" text="I write about stuffs that I find interesting.">
        <SimpleGrid columns={[1, 2]} spacing="8" mb="6">
          {filteredposts.map((post) => {
            return <BlogCard id={post.title} title={post.title} date={post.date} description={post.description} category={post.category} image={post.image} slug={post.slug} readtime={post.readtime} />;
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
