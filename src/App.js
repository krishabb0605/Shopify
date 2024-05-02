import { useContext } from 'react';
import './App.css';
import { Layout1, Layout2, Layout3 } from './component';
import { GlobalContext } from './context/global.context';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  const { currentStep, className } = useContext(GlobalContext);

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
            pos='absolute'
            top='0px'
            alignItems='center'
            justifyContent='center'
            zIndex='3'
            className={
              className === 'animationTop1'
                ? 'animateTopToBottom'
                : className === 'animationReturn1'
                ? 'animateBottomToTop'
                : ''
            }
          >
            <Layout1 />
          </Flex>
          <Flex
            pos='absolute'
            top='-20px'
            alignItems='center'
            justifyContent='center'
            zIndex='2'
          >
            <Layout2 />
          </Flex>
          <Flex
            pos='absolute'
            top='-40px'
            alignItems='center'
            justifyContent='center'
            zIndex='1'
          >
            <Layout3 />
          </Flex>
        </Flex>
      ) : currentStep === 1 ? (
        <Flex pos='relative' alignItems='center' justifyContent='center'>
          <Flex
            pos='relative'
            top='-20px'
            alignItems='center'
            justifyContent='center'
            zIndex='2'
            className={
              className === 'animationTop2'
                ? 'animateTopToBottom'
                : className === 'animationReturn2'
                ? 'animateBottomToTop'
                : ''
            }
          >
            <Layout2 />
          </Flex>
          <Flex
            pos='absolute'
            top='-40px'
            alignItems='center'
            justifyContent='center'
            zIndex='1'
          >
            <Layout3 />
          </Flex>
        </Flex>
      ) : (
        <Flex pos='relative' alignItems='center' justifyContent='center'>
          <Flex
            pos='relative'
            top='-40px'
            alignItems='center'
            justifyContent='center'
            className={
              className === 'animationTop3'
                ? 'animateTopToBottom'
                : className == 'animationReturn1'
                ? 'animateBottomToTop'
                : ''
            }
          >
            <Layout3 />
          </Flex>
        </Flex>
      )}
    </Box>
  );
}

export default App;
