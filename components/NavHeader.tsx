import { Box, Button, Image } from "@chakra-ui/react";

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
          <Image alt='logo' src='/camera-logo.svg' w='90px' h='90px' />
        </Box>
        <Button
          variant='outline'
          rounded='full'
          _hover={{
            bg: "transparent",
            color: "gray.400",
            borderColor: "gray.400",
            shadow: "dark-lg",
          }}
          bg='white'
          color='gray.800'
          borderColor='white'>
          Get in touch
        </Button>
      </Box>
    </Box>
  );
};

export default NavHeader;
