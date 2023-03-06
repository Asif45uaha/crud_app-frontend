import React from "react";
import { Container, styled } from "@mui/material";
const MainHeader = styled(Container)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-top: 30px;
`;
const Home = () => {
  return (
    <>
      <MainHeader>
        <h2>MERN STACK CRUD APP</h2>
        <h3>CREATE</h3>
        <h3>READ</h3>
        <h3>UPDATE</h3>
        <h3>DELETE</h3>
      </MainHeader>
    </>
  );
};

export default Home;
