import { useState } from "react";
import { createGlobalStyle } from "styled-components";

import Init from "./Init";
import First from "./First";
import Second from "./Second";
import Third from "./Third";
import Fourth from "./Fourth";

export default function App() {
  const [step, setStep] = useState("init");
  return (
    <>
      <GlobalStyle />
      {step === "init" && <Init setStep={setStep} />}
      {step === "first" && <First setStep={setStep} />}
      {step === "second" && <Second setStep={setStep} />}
      {step === "third" && <Third setStep={setStep} />}
      {step === "fourth" && <Fourth setStep={setStep} />}
    </>
  );
}

const GlobalStyle = createGlobalStyle`
* {
  margin: 0px;
  padding: 0px;
  box-sizing: border-box;
  /* font-family: "Clear Sans",sans-serif; */
}
p{
  color: #585858;
}
`;
