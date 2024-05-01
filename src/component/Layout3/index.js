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
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/global.context';

const Layout3 = () => {
  const { displayCard, handleStepCount } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Flex justifyContent='center'>
        <Card variant='outline' w='860px'>
          {/* {displayCard.length > 0 &&
            displayCard.map((cardValue, index) => (
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
          <CardHeader textAlign='start'>
            <Heading size='md'>What do you plan to sell first ?</Heading>
            <Text opacity='0.7'>
              Pick what you want to start with. We'll help you stock your store
              .
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
          <CardFooter alignItems='center' justifyContent='space-between'>
            <Button onClick={() => handleStepCount(false)}>{'< Back'}</Button>
            <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
              {'Get started -->'}
            </Button>
          </CardFooter>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout3;
