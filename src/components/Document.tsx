import { CopyBlock, dracula } from "react-code-blocks";

function Document() {
  return (
    <div className="w-full flex flex-col justify-center my-10 space-y-10 max-lg:px-5">
      <div className="max-w-screen-xl w-full m-auto space-y-12">
        <h1 className="text-center font-semibold text-3xl">Usage 👇</h1>
        <div>
          <h1 className="font-semibold text-3xl border-b pb-3 mb-5">
            Installation
          </h1>
          <CopyBlock
            language="bash"
            theme={dracula}
            showLineNumbers={true}
            codeBlock
            text={`npm install persian-date-letters`}
          />
        </div>
        <div>
          <h1 className="font-semibold text-3xl border-b pb-3 mb-5">
            Usage / Examples
          </h1>
          <CopyBlock
            language="jsx"
            theme={dracula}
            showLineNumbers={true}
            codeBlock
            text={`// Import
import { ConvertDateToLetters } from "persian-date-letters";

// Only solar date is supported
const convert = ConvertDateToLetters("1402/11/28");

//Get log ...
console.log(convert); // => بیست و هشتم بهمن یک هزار و چهارصد و دو`}
          />
        </div>
        <div>
          <h1 className="font-semibold text-3xl border-b pb-3 mb-5">
            About Me
          </h1>
          <div className="flex flex-col">
            <span className="text-lg">
              Hi im Amir , I'm a front-end developer...
            </span>
            <a href="http://" className="text-primary hover:underline">
              Personal website .
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Document;
