import { CopyBlock, dracula } from "react-code-blocks";
import "./App.css";
import Hero from "./components/Hero";
import Layout from "./template/Layout";

function App() {
  return (
    <Layout>
      <Hero />
      <CopyBlock
        language="jsx"
        theme={dracula}
        showLineNumbers={true}
        codeBlock
        text={`
              <DatePicker
                calendar={persian}
                locale={persian_en}
                value={value}
                inputClass="text-center p-2 rounded-md font-semibold text-primary"
                className="bg-dark "
                calendarPosition="bottom-right"
                onChange={(selectedDate: DateObject) => {
                  setValue(selectedDate.toString());
                }}
                format="YYYY/MM/DD"
              />
              
              ConvertDateToLetters(value)`}
      />
    </Layout>
  );
}

export default App;
