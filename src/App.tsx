import RouteProvider from './providers/RouteProvider';

function Wrapper() {
  return <RouteProvider></RouteProvider>;
}

function App() {
  return <Wrapper />;
}

export default App;
