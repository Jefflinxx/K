import styled from "styled-components";

import * as React from "react";
import Button from "@mui/material/Button";

export default function Init({ setStep }) {
  return (
    <Wrapper>
      <BtnWrapper>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => {
            localStorage.clear();
            setStep("first");
          }}
        >
          開始遊戲
        </Button>
      </BtnWrapper>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 100vh;
  border: 1px solid black;

  padding: 0px 40px 100px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
