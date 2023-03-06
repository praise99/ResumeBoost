import React, { useState } from "react";
import { Wrapper, Box, Cards, Card } from "./style";
import { CoverLetter, ResumeLetter } from "../../assets";
import { Link } from "react-router-dom";
import { getCurrentUserInstance } from "../../state/localstorage";
const Dashboard = () => {
  const user = getCurrentUserInstance();
  return (
    <Wrapper>
      <Box>
        <h1 className="heading">Welcome to ResumAI, {user.given_name}</h1>
        <p className="sub-text">What do you want to do today?</p>
      </Box>
      <Cards>
        <Link to="cover-letter/create">
          <Card>
            <img src={CoverLetter} alt="data" />
            <h1 className="text">Create a Cover Letter</h1>
          </Card>
        </Link>
        <Link to="#">
          <Card className="resume">
            <img src={ResumeLetter} alt="data" />
            <h1 className="text">Create a Resume</h1>
          </Card>
        </Link>
      </Cards>
    </Wrapper>
  );
};

export default Dashboard;
