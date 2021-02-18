import Head from "next/head";
import Author from "components/Author";
import Project from "components/Project";
import Blog from "components/Blog";

const Home = () => {
  return (
    <>
      <Head>
        <title>Redha Azmei</title>
      </Head>
      <Author />
      <Project />
      <Blog />
    </>
  );
};

export default Home;
