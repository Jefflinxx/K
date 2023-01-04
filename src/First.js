import styled from "styled-components";

import * as React from "react";
import InputLabel from "@mui/material/InputLabel";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Select from "@mui/material/Select";
import Button from "@mui/material/Button";

export default function First({ setStep }) {
  const [countOfPeople, setCountOfPeople] = React.useState("");

  const handleChange = (event) => {
    setCountOfPeople(event.target.value);
  };

  return (
    <Wrapper>
      <SelectWrapper>
        <FormControl
          variant="standard"
          sx={{ m: 1, minWidth: 120, width: "100%" }}
        >
          <InputLabel id="demo-simple-select-standard-label">人數</InputLabel>
          <Select
            labelId="demo-simple-select-standard-label"
            id="demo-simple-select-standard"
            value={countOfPeople}
            onChange={handleChange}
            label="人數"
          >
            {[6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20].map(
              (i) => (
                <MenuItem value={i}>{i}</MenuItem>
              )
            )}
          </Select>
        </FormControl>
      </SelectWrapper>
      <BtnWrapper>
        <Button
          variant="contained"
          sx={{ width: "100%" }}
          onClick={() => {
            if (!countOfPeople) alert("請選擇人數");
            else {
              //   localStorage.clear();
              localStorage.setItem("member", countOfPeople);
              setStep("second");
            }
          }}
        >
          Continue
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

const SelectWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  margin-bottom: 20px;
`;
const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
