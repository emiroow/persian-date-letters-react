import "./App.css";
import Document from "./components/Document";
import Hero from "./components/Hero";
import Layout from "./template/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <Document />
    </Layout>
  );
}

export default App;
