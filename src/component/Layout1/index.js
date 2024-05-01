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
import React, { useContext } from 'react';
import { GlobalContext } from '../../context/global.context';

const Layout1 = () => {
  const { displayCard, handleStepCount } = useContext(GlobalContext);

  console.log(displayCard);
  return (
    <Box>
      <Flex justifyContent='center'>
        <Card variant='outline' pos='relative' w='900px' borderRadius='8px'>
          {/* {displayCard.map((cardValue, index) => (
            <Card
              height='30px'
              width={`calc(100% - ${cardValue}px)`}
              pos='absolute'
              alignSelf='center'
              bg='#e6e6e6'
              top={`${(index + 1) * 5 - cardValue}px`}
              borderRadius='8px'
              zIndex={`calc(3 - ${index + 1})`}
            />
          ))} */}
          <CardHeader
            zIndex='3'
            backgroundColor='inherit'
            borderRadius='8px'
            textAlign='start'
          >
            <Heading size='md'>Where would you like to sell?</Heading>
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
            <Button onClick={() => handleStepCount(true)}>{'Next >'}</Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout1;
