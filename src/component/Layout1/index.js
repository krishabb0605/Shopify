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
import '../../App.css';

const Layout1 = () => {
  const { handleStepCount, currentStep } = useContext(GlobalContext);

  return (
    <Box>
      <Flex justifyContent='center'>
        <Card
          variant='outline'
          w='900px'
          borderRadius='8px'
        >
          <Box className='animationText' visibility='hidden'>
            <CardHeader
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
                  <Flex
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    1
                  </Flex>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    2
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    3
                  </Box>
                </Flex>
                <Flex flexDir='column' flex='1' gap='8px'>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    4
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    5
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    6
                  </Box>
                </Flex>
              </Flex>
            </CardBody>

            <CardFooter alignItems='center' justifyContent='end'>
              <Button onClick={() => handleStepCount(true, currentStep)}>
                {'Next >'}
              </Button>
            </CardFooter>
          </Box>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout1;
