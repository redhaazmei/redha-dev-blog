import Layout from "components/Layout";
import Author from "components/Author";
import Project from "components/Project";
import CustomHead from "components/CustomHead";
import Blog from "components/Blog";

const Home = () => {
  return (
    <>
      <CustomHead title="Redha Azmei" />
      <Layout>
        <Author />
        <Project />
        <Blog />
      </Layout>
    </>
  );
};

export default Home;
