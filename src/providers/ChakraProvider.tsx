import {
  ChakraBaseProvider,
  extendBaseTheme,
  theme as chakraTheme,
} from '@chakra-ui/react';

const { Button, Tag } = chakraTheme.components;

const theme = extendBaseTheme({
  components: {
    Button,
    Tag,
  },
});

function ChakraProvider({ children }: { children: JSX.Element }) {
  return <ChakraBaseProvider theme={theme}>{children}</ChakraBaseProvider>;
}
export default ChakraProvider;
