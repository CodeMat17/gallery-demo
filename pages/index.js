import { Box } from "@chakra-ui/react";
import Head from "next/head";
import Footer from "../components/Footer";
import Gallery from "../components/Gallery";
import NavHeader from "../components/NavHeader";
import { loadImages } from "../lib/loadImages";

export const getStaticProps = async () => {
  const images = loadImages;

  return {
    props: {
      images,
    },
  };
};

export default function Home({ images }) {
  return (
    <>
      <Head>
        <title>Ken Snap Studio</title>
        <meta
          name='description'
          content='This is a demo studio website for showcasing photo gallery. It can also be used to showcase other products. '
        />
        <meta name='viewport' content='width=device-width, initial-scale=1' />
        <link rel='icon' href='/favicon.ico' />
      </Head>

      <main>
        <Box
          minH='100vh'
          w='full'
          bgImage={`url(/bgImg.webp)`}
          bgPos='top'
          bgSize='cover'
          color='white'>
          <NavHeader />
          <Gallery images={images} />
          <Footer />
        </Box>
      </main>
    </>
  );
}
