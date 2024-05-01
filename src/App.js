import { useContext } from 'react';
import './App.css';
import { Layout1, Layout2, Layout3 } from './component';
import { GlobalContext } from './context/global.context';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  const { currentStep } = useContext(GlobalContext);

  return (
    <Box
      h='100vh'
      width='100vw'
      bg='shopify.radial.bg'
      pt='120px'
      pos='relative'
    >
      {currentStep === 0 ? (
        <Flex pos='relative' alignItems='center' justifyContent='center'>
          <Flex
            pos='relative'
            zIndex='500'
            alignItems='center'
            justifyContent='center'
          >
            <Layout1 />
          </Flex>
          <Flex
            pos='absolute'
            zIndex='2'
            top='-20px'
            alignItems='center'
            justifyContent='center'
          >
            <Layout2 />
          </Flex>
          <Flex
            pos='absolute'
            zIndex='1'
            top='-40px'
            alignItems='center'
            justifyContent='center'
          >
            <Layout3 />
          </Flex>
        </Flex>
      ) : currentStep === 1 ? (
        <Flex pos='relative' alignItems='center' justifyContent='center'>
          <Flex
            pos='relative'
            zIndex='2'
            top='-20px'
            alignItems='center'
            justifyContent='center'
          >
            <Layout2 />
          </Flex>
          <Flex
            pos='absolute'
            zIndex='1'
            top='-40px'
            alignItems='center'
            justifyContent='center'
          >
            <Layout3 />
          </Flex>
        </Flex>
      ) : (
        <Layout3 />
      )}
    </Box>
  );
}

export default App;
