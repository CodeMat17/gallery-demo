import type { AppProps } from "next/app";
import {ChakraProvider} from '@chakra-ui/react'
import { Inter } from "@next/font/google";

const inter = Inter({ subsets: ["latin"]});


export default function App({ Component, pageProps }: AppProps) {
  return (
    <ChakraProvider>
      <main className={inter.className}>
         <Component {...pageProps} />
      </main>     
     </ChakraProvider>
  );
}
