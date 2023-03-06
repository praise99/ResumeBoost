import React, { useState } from "react";
import { FormInput } from "../../global/formInput";
import {
  Wrapper,
  Box,
  InputBox,
  ButtonBox,
  FirstWrapper,
  SecondWrapper,
  GeneratedBox,
  BottomBox,
  Pagination,
  ImageBox,
  ButtonSecondBox,
} from "./style";
import { LeftArrow, RightArrow, Retry, Copy, Edit } from "../../../assets";
import { CustomButton, EditButton } from "../../global/button";
const CreateCoverLetter = () => {
  const [firstName, setFirstName] = useState("");
  const [role, setRole] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [years, setYears] = useState("");
  const [notable, setNotable] = useState("");
  const [relevant, setRelevant] = useState("");
  const [submitted, setSubmitted] = useState(false);
  return (
    <Wrapper>
      <Box>
        <h1 className="heading">Cover Letter</h1>
        <p className="sub-text">
          Fill the form below as clearly as possible to generate a suitable
          cover letter
        </p>
      </Box>
      {!submitted && (
        <FirstWrapper>
          <InputBox>
            <FormInput
              label="First name"
              index="1"
              type="text"
              value={firstName}
              className="left"
              stateHandler={setFirstName}
              holder="e.g Peter"
            />
            <FormInput
              label="What role is this for?"
              index="2"
              type="text"
              value={role}
              className="right"
              stateHandler={setRole}
              holder="e.g Product Designer"
            />
          </InputBox>
          <InputBox>
            <FormInput
              label="Company name"
              index="3"
              type="text"
              value={companyName}
              stateHandler={setCompanyName}
              holder="e.g Spotify"
              className="left"
            />
            <FormInput
              label="Years of experience"
              index="4"
              type="text"
              value={years}
              stateHandler={setYears}
              className="right"
              holder="e.g 3 years"
            />
          </InputBox>
          <FormInput
            label="Notable achievements"
            index="5"
            type="textarea"
            value={notable}
            stateHandler={setNotable}
            holder="Write something interesting..."
          />
          <FormInput
            label="Relevant skills and experience"
            index="6"
            type="textarea"
            value={relevant}
            stateHandler={setRelevant}
            holder="Write something interesting..."
          />
          <ButtonBox>
            <CustomButton onClick={() => setSubmitted(true)}>
              Generate cover letter
            </CustomButton>
          </ButtonBox>
        </FirstWrapper>
      )}
      {submitted && (
        <SecondWrapper>
          <p className="text">Generated Cover Letter</p>
          <GeneratedBox>
            Dear Hiring Manager, I am writing to apply for the Product Designer
            position at Spotify. I am a highly skilled and experienced Product
            Designer with over 3 years of industry experience. In my current
            role at Youtube, I have been responsible for designing and
            developing a wide range of innovative products. Some highlights from
            my career include: Leading the design and development of a popular
            smartphone app that has been downloaded over 100,000 times
            Developing a new product line that generated over $1 million in
            revenue in its first year Collaborating with cross-functional teams
            to design and launch successful new products on tight deadlines I
            believe that my skills and experience make me a strong fit for this
            role. I am highly creative and have a strong ability to
            conceptualize and design innovative products. I am also highly
            organized and detail-oriented, which allows me to manage complex
            projects and meet deadlines. I am excited about the opportunity to
            join Spotify and contribute to the success of your team. Thank you
            for considering my application. I look forward to discussing the
            role further. Sincerely, Emmanuel
            <BottomBox>
              <Pagination>
                <img src={LeftArrow} alt="retry" />
                <p className="text">1/1</p>
                <img src={RightArrow} alt="retry" />
              </Pagination>
              <ImageBox>
                <img src={Retry} alt="retry" />
              </ImageBox>
            </BottomBox>
          </GeneratedBox>
          <ButtonSecondBox>
            <CustomButton>
              <img src={Copy} alt="retry" />
              Copy to clipboard
            </CustomButton>
            <EditButton onClick={() => setSubmitted(false)}>
              <img src={Edit} alt="retry" />
              Edit details
            </EditButton>
          </ButtonSecondBox>
        </SecondWrapper>
      )}
    </Wrapper>
  );
};

export default CreateCoverLetter;
