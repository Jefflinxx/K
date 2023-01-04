import styled from "styled-components";
import Button from "@mui/material/Button";
import { useEffect } from "react";
import { useState } from "react";

const identity = { 1: "先知", 2: "挑戰者", 3: "K" };

export default function Third({ setStep }) {
  const [drawOrder, setDrawOrder] = useState(0);
  const [card, setCard] = useState([]);
  const [cardI, setCardI] = useState(0);
  const [rest, setRest] = useState([]);
  const member = Number(localStorage.getItem("member"));

  useEffect(() => {
    // const member = Number(localStorage.getItem("member"));
    const arr = [1];
    if (member < 9) {
      for (let i = 0; i < member - 1; i++) {
        arr.push(2);
      }
      arr.push(3);
      arr.push(3);
    } else if (member < 12) {
      for (let i = 0; i < member - 1; i++) {
        arr.push(2);
      }
      arr.push(3);
      arr.push(3);
      arr.push(3);
    } else if (member >= 12) {
      for (let i = 0; i < member - 1; i++) {
        arr.push(2);
      }
      arr.push(3);
      arr.push(3);
      arr.push(3);
      arr.push(3);
    }

    // Fisher-Yates Shuffle
    (function shuffle(array) {
      for (let i = array.length - 1; i > 0; i--) {
        let j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
      }
    })(arr);

    console.log(arr);
    localStorage.setItem("card", JSON.stringify(arr));
    setCard(arr);
  }, []);
  useEffect(() => {
    if (card) {
      // const member = Number(localStorage.getItem("member"));
      const restCardCount = card.length - member;
      const arr = [];
      for (let i = 0; i < restCardCount; i++) {
        arr.push(1);
      }
      setRest(arr);
    }
  }, [card]);
  useEffect(() => {
    // const member = Number(localStorage.getItem("member"));
    if (cardI >= member) setDrawOrder(3);
  }, [cardI]);
  return (
    <Wrapper>
      {drawOrder === 0 && (
        <BtnWrapper>
          <Button
            variant="contained"
            sx={{ width: "100%" }}
            onClick={() => {
              //拿人數去比對應該要有的角色名單
              //產生一個obj是key是名字 value是身份

              setDrawOrder(2);
            }}
          >
            開始發牌
          </Button>
        </BtnWrapper>
      )}
      {drawOrder === 1 && (
        <Card
          onClick={() => {
            setCardI(cardI + 1);
            setDrawOrder(2);
          }}
        >
          {cardI + 1}:{identity[card[cardI]]}
        </Card>
      )}
      {drawOrder === 2 && (
        <Card onClick={() => setDrawOrder(1)}>請交給{cardI + 1}號玩家</Card>
      )}
      {drawOrder === 3 && (
        <Card onClick={() => setDrawOrder(4)}>
          請將手機放在中間，所有人閉上眼睛，先知請睜眼點擊查看剩餘的牌
        </Card>
      )}
      {drawOrder === 4 && (
        <Card onClick={() => setStep("fourth")}>
          {rest.map((_, index) => (
            <SmallCard>{`${identity[card[cardI + index]]} `}</SmallCard>
          ))}
        </Card>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 100vh;
  border: 1px solid black;

  padding: 0px 40px 100px;
`;

const BtnWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* margin-bottom: 20px; */
`;

const Card = styled.div`
  border: 1px solid black;
  width: 200px;
  height: 400px;

  display: flex;
  justify-content: center;
  align-items: center;
`;

const SmallCard = styled.div`
  border: 1px solid black;
`;
