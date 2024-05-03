import { useContext } from 'react';
import './App.css';
import { Layout1, Layout2, Layout3 } from './component';
import { GlobalContext } from './context/global.context';
import { Box, Flex } from '@chakra-ui/react';

function App() {
  const { currentStep,  animationClass } = useContext(GlobalContext);

  return (
    <Box
      h='100vh'
      width='100vw'
      bg='shopify.radial.bg'
      pt='120px'
      pos='relative'
    >
      <Flex pos='relative' justifyContent='center'>
        <Flex
          pos='absolute'
          top='-40px'
          justifyContent='center'
          className={
            currentStep === 2 &&
            (animationClass === 'animationCard'
              ? 'animateTopToBottom'
              : animationClass === 'animationCardReturn'
              ? 'animateBottomToTop'
              : '')
          }
        >
          <Layout3 />
        </Flex>

        {currentStep !== 2 && (
          <Flex
            pos='absolute'
            top='-20px'
            justifyContent='center'
            zIndex='2'
            className={
              currentStep === 1 &&
              (animationClass === 'animationCard'
                ? 'animateTopToBottom'
                : animationClass === 'animationCardReturn'
                ? 'animateBottomToTop'
                : '')
            }
          >
            <Layout2 />
          </Flex>
        )}

        {currentStep === 0 && (
          <Flex
            pos='absolute'
            top='0px'
            justifyContent='center'
            zIndex='3'
            className={
              animationClass === 'animationCard'
                ? 'animateTopToBottom'
                : animationClass === 'animationCardReturn'
                ? 'animateBottomToTop'
                : ''
            }
          >
            <Layout1 />
          </Flex>
        )}
      </Flex>
    </Box>
  );
}

export default App;
