import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Text,
} from '@chakra-ui/react';
import React from 'react';

const Layout = () => {
  return (
    <Box h='100vh' width='100vw' bg='shopify.radial.bg'>
      <Flex alignItems='center' justifyContent='center' h='100%'>
        <Card variant='outline'>
          <CardHeader>
            <Heading size='md' textAlign='start'>
              {' '}
              Where would you like to sell?
            </Heading>
            <Text opacity='0.7'>
              Pick as many as you like - you can alwaays change these later.
              we'll make sure you've set up to sell in these places.
            </Text>
          </CardHeader>
          <CardBody>
            <Flex alignItems='center' gap='16px'>
              <Flex flexDir='column' flex='1' gap='8px'>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  1
                </Box>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  2
                </Box>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  3
                </Box>
              </Flex>
              <Flex flexDir='column' flex='1' gap='8px'>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  4
                </Box>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  5
                </Box>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  6
                </Box>
              </Flex>
            </Flex>
          </CardBody>
          <CardFooter alignItems='center' justifyContent='end'>
            <Button>{'next >'}</Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout;
