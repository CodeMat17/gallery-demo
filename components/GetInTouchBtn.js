import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import Link from "next/link";
import { BiMailSend } from "react-icons/bi";
import { BsWhatsapp } from "react-icons/bs";

const GetInTouchBtn = () => {
  return (
    <>
      <Menu>
        <MenuButton
          as={Button}
          variant='outline'
          rounded='full'
          _hover={{
            bg: "transparent",
            color: "gray.100",
            borderColor: "blue.800",
            shadow: "dark-lg",
          }}
          // bg='white'
          color='gray.400'
          borderColor='gray.400'>
          Get in touch
        </MenuButton>
        <MenuList bg='gray.900' px='2' borderColor='gray'>
          <Link href='mailto:codemat.biz@gmail.com'>
            <MenuItem
              rounded='md'
              bg='gray'
              mb='2'
              icon={<BiMailSend size={23} />}>
              Send Email
            </MenuItem>
          </Link>
          <Link href='https://wa.me/2348063856120' target='_blank'>
            <MenuItem rounded='md' bg='gray' icon={<BsWhatsapp size={23} />}>
              Chat on WhatsApp
            </MenuItem>
          </Link>
        </MenuList>
      </Menu>
    </>
  );
};

export default GetInTouchBtn;
