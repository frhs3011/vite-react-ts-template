import ChakraProvider from './providers/ChakraProvider';
import RouteProvider from './providers/RouteProvider';

function App() {
  return (
    <ChakraProvider>
      <RouteProvider></RouteProvider>
    </ChakraProvider>
  );
}

export default App;
