import Layout from "./components/Layout/Layout";
import { LangProvider } from "./lib/i18n";
import { CarsProvider } from "./lib/cars";

function App() {
  return (
    <LangProvider>
      <CarsProvider>
        <Layout />
      </CarsProvider>
    </LangProvider>
  );
}

export default App;
