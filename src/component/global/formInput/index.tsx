import React, { useState } from "react";
import styled from "styled-components";
interface PropSchema {
  label?: string;
  type: string;
  value: any;
  preventSpaces?: boolean;
  stateHandler?: React.Dispatch<React.SetStateAction<any>>;
  changeEventHandler?: Function;
  holder?: string;
  helperText?: string;
  inputNotValid?: boolean;
  rightAddon?: string;
  required?: boolean;
  options?: any[];
  paddingLeft?: string;
  maxChar?: number;
  minNumValue?: string;
  bgColor?: string;
  index: string;
  className?: string;
  [x: string]: any;
}
const Container = styled.div`
  width: 100%;
  .right {
    margin-left: 10px;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      margin-left: 0px;
    }
  }
  .left {
    margin-right: 10px;
    @media (max-width: ${({ theme }) => theme.responsive.mb}) {
      margin-right: 0px;
    }
  }
`;
const Box = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  /* margin: label ? "1.6em" : "0.5em"; */
`;
const LabelBox = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 12px;
  margin-top: 35px;
  @media (max-width: ${({ theme }) => theme.responsive.mb}) {
    margin-top: 25px;
  }
`;

const Index = styled.div`
  width: 24px;
  height: 24px;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  font-feature-settings: "ss01" on;
  color: #fc9570;
  background: rgba(252, 149, 112, 0.08);
`;
const Flex = styled.div`
  display: flex;
  align-items: center;
`;
const FormLabel = styled.label`
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  text-align: center;
  font-feature-settings: "ss01" on;
  color: #ffffff;
  padding-left: 15px;
  /* color:focused?" #5C14CE" : "#737373"; */
`;
const Input = styled.input`
  border: none;
  padding: 14px 16px;
  gap: 10px;
  width: 100%;
  height: 45px;
  background: #202020;
  border: 1px solid #6b7280;
  border-radius: 8px !important;
  font-weight: 400;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "ss01" on;
  color: #6b7280;
`;
const TextArea = styled.textarea`
  border: none;
  padding: 14px 16px;
  gap: 10px;
  height: 126px;
  background: #202020;
  border: 1px solid #6b7280;
  border-radius: 8px !important;
  font-weight: 400;
  width: 100%;
  font-size: 14px;
  line-height: 17px;
  font-feature-settings: "ss01" on;
  color: #6b7280;
`;
const InputGroup = styled.div`
  display: flex;
  align-items: center;
`;
export const FormInput = ({
  label,
  holder,
  type,
  value,
  required,
  options,
  helperText,
  preventSpaces,
  inputNotValid,
  stateHandler,
  changeEventHandler,
  paddingLeft,
  maxChar,
  minNumValue,
  bgColor,
  index,
  className,
  ...rest
}: PropSchema) => {
  const [showPassword, setShowPassword] = useState(false);
  const [focused, setFocused] = React.useState(false);
  const onFocus = () => setFocused(true);
  const onBlur = () => setFocused(false);
  const showHandler = () => {
    setShowPassword(!showPassword);
  };

  return (
    <Container>
      {type !== "textarea" ? (
        <Box>
          <Flex>
            {label && (
              <LabelBox>
                <Index>{index}</Index>
                <FormLabel
                  htmlFor={label ? label.split(" ").join("").toLowerCase() : ""}
                >
                  {label}
                </FormLabel>
              </LabelBox>
            )}
            {/* {maxChar && (
              <Text fontSize="0.8em">
                <span style={{ color: "#777777" }}>{value.length}</span>/
                {maxChar}
              </Text>
            )} */}
          </Flex>
          <InputGroup>
            <Input
              {...rest}
              style={{ borderRadius: "0" }}
              min={minNumValue ? minNumValue : "0"}
              maxLength={maxChar ? maxChar : 524288}
              type={showPassword ? "text" : type}
              id={label ? label.split(" ").join("").toLowerCase() : ""}
              value={value}
              className={className}
              placeholder={holder}
              onFocus={onFocus}
              onBlur={onBlur}
              onChange={
                changeEventHandler && !stateHandler
                  ? (e: React.ChangeEvent<any>) => {
                      preventSpaces
                        ? changeEventHandler(e.target.value.replace(/\s/g, ""))
                        : changeEventHandler(e.target.value);
                    }
                  : stateHandler && !changeEventHandler
                  ? (e: React.ChangeEvent<any>) => {
                      preventSpaces
                        ? stateHandler(e.target.value.replace(/\s/g, ""))
                        : stateHandler(e.target.value);
                    }
                  : () => {
                      // do nothing
                    }
              }
              onKeyDown={(e: React.KeyboardEvent<any>) => {
                // @ts-ignore
                if (e.keyCode === 38 || e.keyCode === 40) {
                  e.preventDefault();
                }
              }}
            />
          </InputGroup>
          {/* <FormHelperText fontStyle="italic">{helperText}</FormHelperText> */}
        </Box>
      ) : (
        <Box>
          <LabelBox>
            <Index>{index}</Index>
            <FormLabel
              htmlFor={label ? label.split(" ").join("").toLowerCase() : ""}
            >
              {label}
            </FormLabel>
          </LabelBox>
          <InputGroup>
            <TextArea
              {...rest}
              style={{ borderRadius: "0" }}
              maxLength={maxChar ? maxChar : 524288}
              id={label ? label.split(" ").join("").toLowerCase() : ""}
              value={value}
              onFocus={onFocus}
              placeholder={holder}
              onBlur={onBlur}
              onChange={
                changeEventHandler && !stateHandler
                  ? (e: React.ChangeEvent<any>) => {
                      preventSpaces
                        ? changeEventHandler(e.target.value.replace(/\s/g, ""))
                        : changeEventHandler(e.target.value);
                    }
                  : stateHandler && !changeEventHandler
                  ? (e: React.ChangeEvent<any>) => {
                      preventSpaces
                        ? stateHandler(e.target.value.replace(/\s/g, ""))
                        : stateHandler(e.target.value);
                    }
                  : () => {
                      // do nothing
                    }
              }
              onKeyDown={(e: React.KeyboardEvent<any>) => {
                // @ts-ignore
                if (e.keyCode === 38 || e.keyCode === 40) {
                  e.preventDefault();
                }
              }}
            />
          </InputGroup>
        </Box>
      )}
    </Container>
  );
};
