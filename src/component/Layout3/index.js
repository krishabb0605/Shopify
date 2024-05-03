import {
  Box,
  Button,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Flex,
  Heading,
  Icon,
  Text,
} from '@chakra-ui/react';
import React, { useContext, useState } from 'react';
import { GlobalContext } from '../../context/global.context';
import { GrFormNextLink } from 'react-icons/gr';
import '../../App.css';

const Layout3 = () => {
  const { handleStepCount, currentStep, animationClass } = useContext(
    GlobalContext
  );
  const [isLoading, setIsLoading] = useState(false);

  return (
    <Box>
      <Flex justifyContent='center'>
        <Card
          variant='outline'
          w='820px'
          transform={
            currentStep === 2
              ? 'scaleX(1.1)'
              : currentStep === 1
              ? 'scaleX(1.05)'
              : 'scaleX(1)'
          }
          style={{
            '--start': currentStep + 1 === 2 ? 1.05 : 1,
            '--end': currentStep + 1 === 2 ? 1.1 : 1.05,
            '--max-height': currentStep + 1 == 2 && '600px',
          }}
          h={currentStep === 2 ? 'auto' : '200px'}
          overflow='hidden'
          className={
            currentStep + 1 === 2
              ? animationClass
              : currentStep + 1 === 1
              ? animationClass
              : ''
          }
        >
          <Box
            visibility='hidden'
            className={currentStep === 2 ? 'animationText' : ''}
          >
            <CardHeader textAlign='start'>
              <Heading size='md'>What do you plan to sell first ?</Heading>
              <Text opacity='0.7'>
                Pick what you want to start with. We'll help you stock your
                store .
              </Text>
            </CardHeader>

            <CardBody>
              <Flex alignItems='center' gap='16px'>
                <Flex flexDir='column' flex='1' gap='8px'>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    111
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    2111
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    3111
                  </Box>
                </Flex>
                <Flex flexDir='column' flex='1' gap='8px'>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    411
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    5111
                  </Box>
                  <Box
                    backgroundColor='shopify.text.gray'
                    p='16px'
                    borderRadius='12px'
                  >
                    6111
                  </Box>
                </Flex>
              </Flex>
            </CardBody>

            <CardFooter alignItems='center' justifyContent='space-between'>
              <Button onClick={() => handleStepCount(false, currentStep)}>
                {'< Back'}
              </Button>
              <Button isLoading={isLoading} onClick={() => setIsLoading(true)}>
                <Flex alignItems='center'>
                  <Text>Get started </Text>
                  <Icon as={GrFormNextLink} />
                </Flex>
              </Button>
            </CardFooter>
          </Box>
        </Card>
      </Flex>
    </Box>
  );
};

export default Layout3;
