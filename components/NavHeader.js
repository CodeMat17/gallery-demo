import { Box, Button, Image } from "@chakra-ui/react";
import GetInTouchBtn from "./GetInTouchBtn";

const NavHeader = () => {
  return (
    <Box as='nav' pos='sticky' top='0' zIndex='60' bg='#00020a' px='4' pt='1'>
      <Box
        maxW='6xl'
        mx='auto'
        display='flex'
        alignItems='center'
        justifyContent='space-between'>
        <Box>
          <Image alt='logo' src='/camera-logo.svg' w='70px' h='70px' />
        </Box>
        <GetInTouchBtn />
      </Box>
    </Box>
  );
};

export default NavHeader;
