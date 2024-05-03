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
      <Flex pos='relative' justifyContent='center'>
        <Flex
          pos='absolute'
          top='-40px'
          justifyContent='center'
          className={className === 'animationTop3' ? 'animateTopToBottom' : ''}
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
              className === 'animationTop2'
                ? 'animateTopToBottom'
                : className === 'animationReturn2'
                ? 'animateBottomToTop'
                : ''
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
              className === 'animationTop1'
                ? 'animateTopToBottom'
                : className === 'animationReturn1'
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
