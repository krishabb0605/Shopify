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

const Layout2 = () => {
  const { displayCard, handleStepCount } = useContext(GlobalContext);

  return (
    <Box >
      <Flex justifyContent='center'>
        <Card
          variant='outline'
          w='880px'
          pos='relative'
          borderRadius='8px'
        >
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
            zIndex='4'
            backgroundColor='inherit'
            textAlign='start'
            borderRadius='8px'
          >
            <Heading size='md'>Which of these best descibes you ?</Heading>
            <Text opacity='0.7'>
              We'll help you get set up based on your business needs.
            </Text>
          </CardHeader>
          <CardBody>
            <Flex alignItems='center' gap='16px'>
              <Flex flexDir='column' flex='1' gap='8px'>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  I'm just starting
                </Box>
              </Flex>
              <Flex flexDir='column' flex='1' gap='8px'>
                <Box backgroundColor='shopify.text.gray' p='16px'>
                  I'm already selling online or in person.
                </Box>
              </Flex>
            </Flex>
          </CardBody>
          <CardFooter alignItems='center' justifyContent='space-between'>
            <Button onClick={() => handleStepCount(false)}>{'< Back'}</Button>
            <Button onClick={() => handleStepCount(true)}>{'Next >'}</Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout2;
