import React, { useEffect, useState } from "react";
import { Wrapper, LogoBox, ContentBox } from "./style";
import { Google, Logo, HandShake } from "../../../assets";
import { GoogleButton, LoginButton } from "../../global/button";
import { Link, useNavigate } from "react-router-dom";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { setLocalUserInstance } from "../../../state/localstorage";
import moment from "moment";
const Login = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>([]);
  const [profile, setProfile] = useState<any>([]);
  const login = useGoogleLogin({
    onSuccess: (codeResponse) => setUser(codeResponse),
    onError: (error) => console.log("Login Failed:", error),
  });

  useEffect(() => {
    if (user) {
      axios
        .get(
          `https://www.googleapis.com/oauth2/v1/userinfo?access_token=${user.access_token}`,
          {
            headers: {
              Authorization: `Bearer ${user.access_token}`,
              Accept: "application/json",
            },
          }
        )
        .then((res: any) => {
          console.log(res, "response");
          setProfile(res.data);
          let date: string = moment().format(JSON.stringify(new Date()));
          let fd = new FormData();
          fd.append("Name", res.data.name);
          fd.append("Email", res.data.email);
          fd.append("Picture", res.data.picture);
          fd.append("Time", date);
          setLocalUserInstance(res.data);
          onLogin(fd);
        })
        .catch((err: any) => console.log(err));
    }
  }, [user]);
  const onLogin = (data: any) => {
    fetch(
      "https://script.google.com/macros/s/AKfycbwDqvJ3gbV-fGX6cTPcZ-ZgO4t4mV3WS4RsgAXe__sYuIdP7_Wlbf5gWd3tzdwNFotzIQ/exec",
      {
        method: "POST",
        body: data,
      }
    )
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setTimeout(function () {
          navigate("/");
        }, 1000); //wait 1 second
      })
      .catch((error) => {
        console.log(error);
      });
  };

  // log out function to log the user out of google and set the profile array to null
  const logOut = () => {
    googleLogout();
    setProfile(null);
  };
  return (
    <Wrapper>
      <LogoBox>
        <img src={Logo} alt="logo" />
      </LogoBox>
      <ContentBox>
        <img src={HandShake} alt="logo" />
        <div className="box">
          <h1 className="text">Welcome back</h1>
          <p className="sub-text">Log in to your account</p>
        </div>
        <div className="buttons">
          <GoogleButton onClick={() => login()}>
            <img src={Google} alt="retry" />
            Log in with Google
          </GoogleButton>
          <Link to="/signup">
            <LoginButton>Sign Up</LoginButton>
          </Link>
        </div>
      </ContentBox>
    </Wrapper>
  );
};

export default Login;
