import {
  Box,
  chakra,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import { Marko_One } from "@next/font/google";
import dynamic from "next/dynamic";
import Image from "next/image";
import { useRef } from "react";
import img1 from "../public/images/img-1.webp";
import img2 from "../public/images/img-2.webp";
import img3 from "../public/images/img-3.webp";
import img4 from "../public/images/img-4.webp";
import img5 from "../public/images/img-5.webp";

const markoOne = Marko_One({ subsets: ["latin"], weight: ["400"] });
const images = [img1, img2, img3, img4, img5];

import type { LightGallery } from "lightgallery/lightgallery";
// import LightGalleryComponent from 'lightgallery/react'
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

const Gallery = () => {
  const MyImage = chakra(Image, {
    shouldForwardProp: (prop) => ["src", "alt", "loading"].includes(prop),
  });

  const lightboxRef = useRef<LightGallery | null>(null);

  return (
    <Box py='12' maxW='6xl' mx='auto'>
      <Tabs isLazy>
        <div className={markoOne.className}>
          <TabList display='flex' justifyContent='center'>
            <Tab fontSize='xl' fontWeight='medium'>
              ALL
            </Tab>
            <Tab fontSize='xl' fontWeight='medium'>
              MEN
            </Tab>
            <Tab fontSize='xl' fontWeight='medium'>
              WOMEN
            </Tab>
            <Tab fontSize='xl' fontWeight='medium'>
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
              {images.map((image, idx) => (
                <Box
                  key={image.src}
                  onClick={() => {
                    lightboxRef.current?.openGallery(idx);
                  }}
                  mb='2'>
                  <MyImage
                    src={image}
                    alt='images'
                    w='100%'
                    loading='eager'
                    placeholder='blur'
                    rounded='md'
                    display='inline-block'
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
                plugins={[lgThumbnail, lgZoom]}
                appendSubHtmlTo='.lg-item'
                dynamic
                dynamicEl={[
                  {
                    src: "/images/img-1.webp",
                    thumb: "/images/img-1-thumb.webp",
                    subHtml: "<a>Muri Banju</a><p>Location - Calabar</p>",
                  },
                  {
                    src: "/images/img-2.webp",
                    thumb: "/images/img-2-thumb.webp",
                    subHtml: "<a>Flying Michael</a><p>Location - Ekiti</p>",
                  },
                  {
                    src: "/images/img-3.webp",
                    thumb: "/images/img-3-thumb.webp",
                    subHtml: "<a>Four Friends</a><p>Location - Enugu</p>",
                  },
                  {
                    src: "/images/img-4.webp",
                    thumb: "/images/img-4-thumb.webp",
                    subHtml: "<a>Majuk Can</a><p> Location - Abia</p>",
                  },
                  {
                    src: "/images/img-5.webp",
                    thumb: "/images/img-5-thumb.webp",
                    subHtml: "<a>Obiora Okaka</a><p>Location - Anambra</p>",
                  },
                ]}
              />
            </Box>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <Box
              w='100%'
              maxW='4xl'
              mx='auto'
              sx={{ columnCount: [2, 2, 3], columnGap: "8px" }}>
              <p>two!</p>
            </Box>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>three!</p>
          </TabPanel>
          {/* initially not mounted */}
          <TabPanel>
            <p>four!</p>
          </TabPanel>
        </TabPanels>
      </Tabs>
    </Box>
  );
};

export default Gallery;
