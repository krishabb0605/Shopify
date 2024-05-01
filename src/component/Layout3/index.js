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
  const {  handleStepCount, className } = useContext(GlobalContext);
  const [isLoading, setIsLoading] = useState(false);
  return (
    <Box>
      <Flex justifyContent='center'>
        <Card
          variant='outline'
          w={className === 'animationTop1' ? '900px' : '860px'}
          h={className === 'animationTop1' ? '400px' : '290px'}
          overflow='hidden'
          className={className === 'animationTop1' ? 'animationCard3' : ''}
        >
          <Box className={className === 'animationTop1' ? 'animationText' : ''}>
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
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    111
                  </Box>
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    2111
                  </Box>
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    3111
                  </Box>
                </Flex>
                <Flex flexDir='column' flex='1' gap='8px'>
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    411
                  </Box>
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    5111
                  </Box>
                  <Box backgroundColor='shopify.text.gray' p='16px'>
                    6111
                  </Box>
                </Flex>
              </Flex>
            </CardBody>
            <CardFooter alignItems='center' justifyContent='space-between'>
              <Button onClick={() => handleStepCount(false)}>{'< Back'}</Button>
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
