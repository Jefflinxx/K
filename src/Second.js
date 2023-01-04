import styled from "styled-components";
import Button from "@mui/material/Button";

export default function Second({ setStep }) {
  return (
    <Wrapper>
      <BtnWrapper>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => {
            setStep("third");
          }}
        >
          用數字代表玩家
        </Button>
      </BtnWrapper>
      <BtnWrapper>
        <Button variant="contained" sx={{ width: "100%" }} onClick={() => {}}>
          為每一位玩家取名
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
  margin-bottom: 20px;
`;
