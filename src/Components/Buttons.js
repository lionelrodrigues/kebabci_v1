import styled from "styled-components";

export const Button = styled.button`
  color: ${(props) => (props.primary ? "#fff" : "#ae0d12")};
  padding: 0.5rem 1.5rem;
  border: none;
  margin: 1rem;
  font-size: 1rem;
  border-radius: 3px;
  background-color: ${(props) => (props.primary ? "#ae0d12" : "#fff")};
  font-weight: 300;
  transition: all 0.2s ease-in;
  border: 1px solid ${(props) => (props.primary ? "#ae0d12" : "#fff")};

  &:hover {
    color: ${(props) => (props.primary ? "#ae0d12" : "#fff")};
    background-color: ${(props) => (props.primary ? "#fff" : "#ae0d12")};
    border: 1px solid ${(props) => (props.primary ? "#ae0d12" : "#fff")};
    outline: none;
  }
  &:active {
    outline: none;
  }
`;
export const Title = styled.h1`
  font-family: merriweather, serif;
  font-style: normal;
  font-weight: 600;
  color: ${(props) => (props.primary ? "#ffd500" : "#ae0d12")};
  letter-spacing: 2px;
  padding: 2rem auto;
  font-size: 3rem;
`;
export const P = styled.p`
  color: #fff;
  padding: 1rem;
  line-spacing: 1rem;
  font-weight: 500;
`;
