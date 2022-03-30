import { extendTheme, type ThemeConfig } from '@chakra-ui/react';
import { mode, StyleFunctionProps } from '@chakra-ui/theme-tools';

const config: ThemeConfig = {
  initialColorMode: 'light',
  useSystemColorMode: true
};

const baseTheme = {
  colors: {
    gray: {
      '900': '#0B0A07',
      '850': '#1A202C',
      '800': '#181B23',
      '700': '#47585B'
    },
    red: {
      '600': '#FE4A49'
    },
    yellow: {
      '500': '#FFC759'
    },
    blue: {
      '400': '#1C7ED9'
    },
    purple: {
      '300': '#6D597A'
    }
  },
  fonts: {
    heading: "'Poppins', sans-serif",
    body: "'Poppins', sans-serif"
  },
  styles: {
    global: (props: StyleFunctionProps) => ({
      body: {
        bg: mode('gray.50', 'gray.850')(props),
        color: mode('gray.900', 'white')(props)
      }
    })
  }
};

export const theme = extendTheme(baseTheme, config);
