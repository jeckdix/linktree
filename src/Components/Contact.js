import React, { useState } from "react";
import styled from "styled-components";
import Footer from "./Footer/Footer";

const Header = styled.header`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 0px;
  margin-bottom: 30px;
  @media (min-width: 1200px) {
    margin-bottom: 40px;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 20px;
  @media (min-width: 1200px) {
    gap: 40px;
  }
`;

const P = styled.p`
  font-weight: 400;
  font-size: 18px;
  line-height: 20px;
  color: #475467;
`;

const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px 20px;
  gap: 40px;
  margin-top: 30px;
  @media (min-width: 1200px) {
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    button {
      width: 720px;
    }
  }
`;

const TextContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  @media (min-width: 1200px) {
    .email,
    .message {
      width: 720px;
    }
  }
`;
const Label = styled.label`
  font-weight: 550;
  font-family: "Inter";
  font-style: normal;
  font-size: 15px;
  line-height: 20px;
  color: #344054;
  letter-spacing: -0.02em;
`;
const H1 = styled.h1`
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 36px;
  line-height: 44px;
  color: #101828;
  margin-bottom: 0px;
`;

const Input = styled.input`
  background: #ffffff;
  border: 1px solid #d0d5dd;
  ${(props) => props.error && "#F89687"};
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05)
    ${(props) => props.error && "rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #D1E9FF"};
  border-radius: 8px;
  padding: 10px 14px;
  width: 343px;
  text-align: left;
  ::placeholder {
    font-size: 14px;
    font-family: "Arial";
  }
  :focus {
    outline: none;
    border: 1px solid #84caff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    border-radius: 8px;
  }
`;

const TextArea = styled.textarea`
  padding: 12px 14px;
  width: 343px;
  background: #ffffff;
  border: 1px solid #d0d5dd;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  border-radius: 8px;
  height: 108px;
  ::placeholder {
    font-size: 14px;
    font-family: "Arial";
  }
  :focus {
    border: 1px solid #84caff;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
    border-radius: 8px;
    outline: none;
  }
`;

const Button = styled.button`
  align-items: center;
  padding: 12px 20px;
  gap: 8px;
  background: #1570ef;
  border: 1px solid #1570ef;
  box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05);
  color: #ffffff;
  font-family: "Inter";
  font-style: normal;
  font-weight: 600;
  font-size: 16px;
  line-height: 24px;
  border-radius: 8px;
  width: 343px;
  height: 48px;

  :hover {
    background: #175cd3;
  }
  :focus {
    background: #1570ef;
    border: 1px solid #1570ef;
    box-shadow: 0px 1px 2px rgba(16, 24, 40, 0.05), 0px 0px 0px 4px #d1e9ff;
  }
  :disabled {
    background: #b2ddff;
  }
`;

const CheckboxContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  input {
    background: #ffffff;
    border: 1px solid #d0d5dd;
    border-radius: 6px;
    margin-top: 0px;
  }
  Label {
    font-family: "Inter";
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    @media (min-width: 1200px) {
      font-size: 15px;
      gap: 5px;
    }
  }
`;

const NameContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 17px;

  @media (min-width: 1200px) {
    display: flex;
    flex-direction: row;
    gap: 33px;
  }
`;

const Contact = () => {
  const [firstName, setFirstName] = useState("");
  const [lastName, setlastName] = useState("");
  const [enteredEmail, setEmail] = useState("");
  const [enteredMessage, setMessage] = useState("");
  const [isValidFirst, setIsValidFirst] = useState(true);
  const [isValidLast, setIsValidLast] = useState(true);
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidMessage, setIsValidMessage] = useState(true);

  const name = "debugger";

  const firstNameHandler = (e) => {
    setFirstName(e.target.value);
    if (e.target.value.trim().length === 0) {
      setIsValidFirst(false);
    } else if (e.target.value.trim().length > 0) {
      setIsValidFirst(true);
    }
  };

  const lastNameHandler = (e) => {
    setlastName(e.target.value);
    if (e.target.value.trim().length === 0) {
      setIsValidLast(false);
    } else if (e.target.value.trim().length > 0) {
      setIsValidLast(true);
    }
  };
  const emailHandler = (e) => {
    setEmail(e.target.value);
      if (e.target.value.trim().length > 0 && e.target.value.includes("@")) {
      setIsValidEmail(true);
    } else {
        setIsValidEmail(false);
    }
  };

  const messageHandler = (e) => {
    setEmail(e.target.value);
    if (e.target.value.trim().length > 0) {
      setIsValidMessage(true);
    } else {
      setIsValidMessage(false);
    }
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    if (firstName.length ===0) {setIsValidFirst(false)} 
    if (lastName.length ===0){setIsValidLast(false)} 
    if (enteredEmail.length ===0){setIsValidEmail(false)}
    if (enteredMessage.length ===0){setIsValidMessage(false)}
  }

  const errorStyle ={ color: "red", marginTop: 1, marginBottom: 0 }
  return (
    <>
      <Container>
        <div>
          <Header>
            <H1> Contact Me</H1>
            <P> Hi there, contact me to ask about anything you have in mind.</P>
          </Header>

          <Form onSubmit={onSubmitHandler}>
            <NameContainer>
              <TextContainer>
                <Label htmlFor="firstName"> First name</Label>
                <Input
                  type="text"
                  name="firstName"
                  id="firstName"
                  placeholder="Enter your first name"
                  onChange={firstNameHandler}
                />
              {!isValidFirst? <p style={errorStyle}>Please enter first name field</p>: ""}
              </TextContainer>
              <TextContainer>
                <Label htmlFor="lastName"> Last name</Label>
                <Input
                  type="text"
                  name="lastName"
                  id="lastName"
                  placeholder="Enter your last name"
                  onChange={lastNameHandler}
                />
                {!isValidLast? <p style={errorStyle}>Please enter first name field</p>: ""}
              </TextContainer>
            </NameContainer>
            <TextContainer>
              <Label htmlFor="email"> Email</Label>
              <Input
                type="email"
                name="email"
                id="email"
                className="email"
                placeholder="yourname@gmail.com"
                onChange={emailHandler}
              />
              {!isValidEmail? <p style={errorStyle}>Please enter a valid email name field</p>: ""}
            </TextContainer>
            <TextContainer>
              <Label id="message"> Message</Label>
              <TextArea
                onChange={messageHandler}
                className="message"
                forHtml="message"
                placeholder="Send me a message and I'lll reply you as soon as possible..."
              />
              {!isValidMessage? <p style={errorStyle}>Please enter your message here</p>: ""}
            </TextContainer>
            <CheckboxContainer>
              <input type="checkbox" name="agreement" id="agreement" />
              <Label htmlFor="agreement">
                {" "}
                {`You agree to providing your data to ${name} who may contact you.`}{" "}
              </Label>
            </CheckboxContainer>
            <Button>Send message</Button>
          </Form>
        </div>
        <Footer />
      </Container>
    </>
  );
};
export default Contact;
