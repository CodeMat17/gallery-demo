import {
  Box,
  chakra,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
} from "@chakra-ui/react";
import { Marko_One } from "@next/font/google";
import type { LightGallery } from "lightgallery/lightgallery";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef, useState } from "react";

const markoOne = Marko_One({ subsets: ["latin"], weight: ["400"] });
const LightGalleryComponent = dynamic(() => import("lightgallery/react"), {
  ssr: false,
});

// import styles
import "lightgallery/css/lg-thumbnail.css";
import "lightgallery/css/lg-zoom.css";
import "lightgallery/css/lightgallery.css";

// import plugins if you need
import lgThumbnail from "lightgallery/plugins/thumbnail";
import lgZoom from "lightgallery/plugins/zoom";

type GalleryProps = {
  images: {
    id: number;
    src: string;
    thumb: string;
    text: string;
    gallerySrc: string;
    type: string;
  }[];
};

const Gallery = ({ images }: GalleryProps) => {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) =>
      ["src", "alt", "loading", "placeholder"].includes(prop),
  });

  const lightboxRef = useRef<LightGallery | null>(null);

  const [gallery, setGallery] = useState(images);

  const filter = (type) => {
    setGallery(null);
    setGallery(images.filter((img) => img.type === type));
  };
  return (
    <Box pt='6' pb='12' maxW='6xl' mx='auto'>
      <Box
        display='flex'
        flexDir={{ base: "column", md: 'row' }}
        alignItems='center'
        justifyContent='center'
        mb='8'>
        <Image alt='' width={150} height={150} src='/camera-logo.svg' />
      <Box textAlign='center'>
        <Text
          className={markoOne.className}
          bgGradient='linear(to-l, #7928CA, #FF0080)'
          bgClip='text'
          fontSize={["3xl", "4xl"]}
          fontWeight='semibold'>
          Ken-Snap Studio
        </Text>
        <Text
          color='blue.700'
          letterSpacing='1px'
          fontWeight='light'>
          welcome to our photo gallery
        </Text>
      </Box>
      </Box>
     
      <Tabs isLazy>
        <div className={markoOne.className}>
          <TabList display='flex' justifyContent='center'>
            <Tab
              onClick={() => setGallery(images)}
              fontSize='lg'
              fontWeight='medium'>
              ALL
            </Tab>
            <Tab
              onClick={() => filter("men")}
              fontSize='lg'
              fontWeight='medium'>
              MEN
            </Tab>
            <Tab
              onClick={() => filter("women")}
              fontSize='lg'
              fontWeight='medium'>
              WOMEN
            </Tab>
            <Tab
              onClick={() => filter("teen")}
              fontSize='lg'
              fontWeight='medium'>
              TEENS
            </Tab>
          </TabList>
        </div>
        <TabPanels py='6' display='flex' justifyContent='center'>
          {/* initially mounted */}
          <TabPanel overflow='auto'>
            <Box
              w='100%'
              maxW='3xl'
              mx='auto'
              sx={{ columnCount: [2, 2, 3], columnGap: "12px" }}>
              {gallery.map((image, idx) => (
                <Box
                  key={image.id}
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                  mb='2'>
                  <MyImage
                    src={image.src}
                    alt='images'
                    w='100%'
                    loading='eager'
                    placeholder='blur'
                    rounded='md'
                    display='inline-block'
                    cursor='pointer'
                  />
                </Box>
              ))}

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                mode='lg-fade'
                speed={500}
                startAnimationDuration={400}
                plugins={[lgThumbnail, lgZoom]}
                appendSubHtmlTo='.lg-item'
                download={true}
                closable
                showCloseIcon
                swipeToClose={true}
                easing='ease'
                dynamic
                dynamicEl={gallery.map((item) => ({
                  src: item.gallerySrc,
                  thumb: item.thumb,
                  subHtml: item.text,
                }))}
              />
            </Box>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Box
              w='100%'
              maxW='3xl'
              mx='auto'
              sx={{ columnCount: [2, 2, 3], columnGap: "12px" }}>
              {gallery.map((image, idx) => (
                <Box
                  key={image.id}
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                  mb='2'>
                  <MyImage
                    src={image.src}
                    alt='images'
                    w='100%'
                    loading='eager'
                    placeholder='blur'
                    rounded='md'
                    display='inline-block'
                    cursor='pointer'
                  />
                </Box>
              ))}

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                mode='lg-fade'
                speed={500}
                startAnimationDuration={400}
                plugins={[lgThumbnail, lgZoom]}
                appendSubHtmlTo='.lg-item'
                download={true}
                closable
                showCloseIcon
                swipeToClose={true}
                easing='ease'
                dynamic
                dynamicEl={gallery.map((item) => ({
                  src: item.gallerySrc,
                  thumb: item.thumb,
                  subHtml: item.text,
                }))}
              />
            </Box>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Box
              w='100%'
              maxW='3xl'
              mx='auto'
              sx={{ columnCount: [2, 2, 3], columnGap: "12px" }}>
              {gallery.map((image, idx) => (
                <Box
                  key={image.id}
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                  mb='2'>
                  <MyImage
                    src={image.src}
                    alt='images'
                    w='100%'
                    loading='eager'
                    placeholder='blur'
                    rounded='md'
                    display='inline-block'
                    cursor='pointer'
                  />
                </Box>
              ))}

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                mode='lg-fade'
                speed={500}
                startAnimationDuration={400}
                plugins={[lgThumbnail, lgZoom]}
                appendSubHtmlTo='.lg-item'
                download={true}
                closable
                showCloseIcon
                swipeToClose={true}
                easing='ease'
                dynamic
                dynamicEl={gallery.map((item) => ({
                  src: item.gallerySrc,
                  thumb: item.thumb,
                  subHtml: item.text,
                }))}
              />
            </Box>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Box
              w='100%'
              maxW='3xl'
              mx='auto'
              sx={{ columnCount: [2, 2, 3], columnGap: "12px" }}>
              {gallery.map((image, idx) => (
                <Box
                  key={image.id}
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                  mb='2'>
                  <MyImage
                    src={image.src}
                    alt='images'
                    w='100%'
                    loading='eager'
                    placeholder='blur'
                    rounded='md'
                    display='inline-block'
                    cursor='pointer'
                  />
                </Box>
              ))}

              <LightGalleryComponent
                onInit={(ref) => {
                  if (ref) {
                    lightboxRef.current = ref.instance;
                  }
                }}
                mode='lg-fade'
                speed={500}
                startAnimationDuration={400}
                plugins={[lgThumbnail, lgZoom]}
                appendSubHtmlTo='.lg-item'
                download={true}
                closable
                showCloseIcon
                swipeToClose={true}
                easing='ease'
                dynamic
                dynamicEl={gallery.map((item) => ({
                  src: item.gallerySrc,
                  thumb: item.thumb,
                  subHtml: item.text,
                }))}
              />
            </Box>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Gallery;
