import Head from "next/head";
import Author from "components/Author";
import Project from "components/Project";
import SectionBlog from "components/SectionBlog";

const Home = () => {
  return (
    <>
      <Head>
        <title>Redha Azmei</title>
      </Head>
      <Author />
      <Project />
      <SectionBlog />
    </>
  );
};

export default Home;
