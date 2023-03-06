import React from "react";
import { Wrapper, LogoBox, ContentBox } from "./style";
import { Google, Logo, HandShake } from "../../../assets";
import { GoogleButton, LoginButton } from "../../global/button";
import { Link } from "react-router-dom";
const SignUp = () => {
  return (
    <Wrapper>
      <LogoBox>
        <img src={Logo} alt="logo" />
      </LogoBox>
      <ContentBox>
        <img src={HandShake} alt="logo" />
        <div className="box">
          <h1 className="text">Let’s get you started</h1>
          <p className="sub-text">
            Create an account today and get started for free
          </p>
        </div>
        <div className="buttons">
          <GoogleButton>
            <img src={Google} alt="retry" />
            Sign up with Google
          </GoogleButton>
          <Link to="/login">
            <LoginButton>Log in</LoginButton>
          </Link>
        </div>
      </ContentBox>
    </Wrapper>
  );
};

export default SignUp;
