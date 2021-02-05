import { Heading, Text } from "@chakra-ui/react";
import Layout from "components/Layout";
import Head from "next/head";

const Home = () => {
  return (
    <>
      <Head>
        <title>redha.dev</title>
        <link rel="apple-touch-icon" sizes="180x180" href="favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="favicon/favicon-16x16.png" />
        <link rel="manifest" href="favicon/site.webmanifest" />
      </Head>
      <Layout>
        <Heading size="2xl">Hey 👋, I'm Redha Azmei </Heading>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod laudantium nobis deserunt rem ipsum vero architecto eos non. Doloribus laborum, assumenda qui vel aut maiores atque et quae ipsa laboriosam nisi pariatur consectetur quas aliquam quia sit possimus porro explicabo aspernatur doloremque, corporis maxime. Sed praesentium repudiandae officia mollitia expedita, placeat dolores necessitatibus quia quam iure incidunt nulla quos, animi earum officiis explicabo! Sapiente animi repellendus, iusto possimus cumque facilis. Ipsum perspiciatis voluptatum obcaecati in fugiat dignissimos nulla perferendis at quia ratione voluptatibus autem, architecto officiis molestias voluptatem saepe, labore commodi! Eius, veritatis commodi ad, ea officiis, mollitia minus blanditiis beatae hic culpa deserunt atque corporis voluptate fugit repudiandae placeat molestias? Veniam nostrum ullam a quos corrupti laboriosam, voluptatum impedit iusto, maiores reiciendis molestias dicta hic fuga doloremque expedita voluptatem porro eligendi amet dolorum, enim distinctio ipsam sit aliquam. Sed ducimus quod vitae, impedit neque delectus amet architecto libero officia vero iusto eveniet quidem odit repellendus et mollitia magni cum, facilis labore animi id ipsum nihil? Harum, odit, corporis vero iste placeat doloremque quae eaque natus quibusdam tempora mollitia beatae obcaecati facere temporibus, rem ea expedita aut cum! Sequi porro minus ipsum provident fugit qui aliquid reprehenderit exercitationem hic deleniti.</Text>
        <Text>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic eligendi eos rem aliquid quae voluptatum quas quam, minima, distinctio deleniti, ducimus consequuntur. Magni saepe iste harum voluptates, hic facilis ducimus itaque est rerum dolore fugit temporibus impedit similique maiores quae. Alias, impedit laborum vero voluptas repellendus amet ea asperiores ullam similique aspernatur neque dolorum ex ratione quidem laboriosam maxime exercitationem necessitatibus veritatis officiis labore aperiam. Tempora, voluptate ea delectus neque dolore eaque. Necessitatibus, perferendis pariatur? Odio similique expedita, laudantium laborum pariatur modi unde praesentium, deleniti, vero porro tenetur odit recusandae est quae rerum. Laborum soluta incidunt in libero nostrum dolorum?</Text>
      </Layout>
    </>
  );
};

export default Home;
