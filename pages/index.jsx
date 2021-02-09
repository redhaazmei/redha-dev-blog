import Layout from "components/Layout";
import Author from "components/Author";
import Project from "components/Project";
import CustomHead from "components/CustomHead";

const Home = () => {
  return (
    <>
      <CustomHead title="Redha Azmei" />
      <Layout>
        <Author />
        <Project />
        <Project />
      </Layout>
    </>
  );
};

export default Home;
