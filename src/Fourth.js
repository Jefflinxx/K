import styled from "styled-components";
import { useEffect } from "react";
import { useState } from "react";

export default function Fourth({ setStep }) {
  const [memberArr, setMemberArr] = useState([]);
  const member = Number(localStorage.getItem("member"));

  console.log(memberArr);

  useEffect(() => {
    const card = JSON.parse(localStorage.getItem("card"));
    console.log(card);
    const memberArr = [];
    for (let i = 0; i < member; i++) {
      memberArr.push({ identity: card[i], sx: { width: "100%" }, alive: true });
    }
    setMemberArr(memberArr);
  }, []);
  useEffect(() => {
    if (memberArr.length) {
      const foundK = memberArr.find((i) => i.identity === 3);
      if (foundK) {
        console.log("有k");
        const foundKalive = memberArr.find(
          (i) => i.identity === 3 && i.alive === true
        );
        if (foundKalive) alert("K還活著");
        else alert("挑戰者勝利");
      } else {
        console.log("只有a");
        const foundAalive = memberArr.find(
          (i) => i.identity === 1 && i.alive === true
        );
        if (foundAalive) alert("K還活著");
        else alert("挑戰者勝利");
      }
    }
  }, [memberArr]);
  return (
    <Wrapper>
      {memberArr.map((i, index) => (
        <BtnWrapper key={index + 1}>
          <CardDiv
            variant="outlined"
            alive={i.alive}
            onClick={() => {
              if (memberArr[index].alive) {
                if (window.confirm("確定淘汰嗎？")) {
                  memberArr.splice(index, 1, {
                    ...memberArr[index],
                    sx: { width: "100%", backgroundColor: "red" },
                    alive: false,
                  });
                  setMemberArr([...memberArr]);
                }
              }
            }}
          >
            {index + 1}
          </CardDiv>
        </BtnWrapper>
      ))}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  overflow: scroll;

  display: flex;
  flex-direction: column;
  justify-content: center;
  min-height: 100vh;
  border: 1px solid black;

  padding: 0px 40px 0px;
`;
// const Wrapper2 = styled.div`
//   overflow: scroll;
//   height: 100%;
//   width: 100%;
//   border: 1px solid black;
// `;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-bottom: 20px;
  :first-child {
    margin-top: 20px;
  }
`;

const CardDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 8px;
  height: 30px;
  width: 100%;
  border: 1px solid black;
  background-color: ${(props) => !props.alive && "red"};
`;
