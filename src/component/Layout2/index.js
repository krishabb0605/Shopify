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

const Layout2 = () => {
  const { handleStepCount, animationClass,currentStep } = useContext(GlobalContext);

  return (
    <Box>
      <Flex justifyContent='center'>
        <Card
          variant='outline'
          w='860px'
          transform={currentStep === 1 ? 'scaleX(1.05)' : 'scaleX(1)'}
          borderRadius='8px'
          className={currentStep + 1 === 1 ? animationClass : ''}
          bg='#b9b9b9'
        >
          <Box visibility='hidden' className={currentStep === 1 ? 'animationText' : ''}>
            <CardHeader
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
              <Button onClick={() => handleStepCount(false, currentStep)}>
                {'< Back'}
              </Button>
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

export default Layout2;
