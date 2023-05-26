import {createStandaloneToast, extendTheme} from '@chakra-ui/react'

const theme = extendTheme({
  config: {
    initialColorMode: 'dark',
    useSystemColorMode: true,
  },
  styles: {
    global: {
      body: {
        bg: 'gray.900',
        color: 'white',
      },
      '::-webkit-scrollbar': {
        cursor: 'auto',
        width: '0.5rem',
      },
      '::-webkit-scrollbar-thumb': {
        cursor: 'pointer !important',
        '&:hover': {
          bg: 'blue.700',
        },
        bg: 'gray.600',
        borderRadius: 'full',
      },
      '::-webkit-scrollbar-track': {
        bg: 'blackAlpha.600',
      },
    },
  },
  shadows: {
    glowWhite: '0px 0px 18px 0px rgba(125, 181, 228, 1)',
    glowBlue: '0px 0px 18px 0px rgba(58, 197, 253, 0.82)',
  },
  fonts: {
    heading: `'Roboto', sans-serif`,
    body: `'Open-sans', sans-serif`,
  },
})

export const {ToastContainer, toast} = createStandaloneToast({theme, defaultOptions: {isClosable: true}})

export default theme
