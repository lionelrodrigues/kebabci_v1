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

  &:hover {
    color: ${(props) => (props.primary ? "#ae0d12" : "#fff")};
    background-color: ${(props) => (props.primary ? "#fff" : "#ae0d12")};
    border: 1px solid ${(props) => (props.primary ? "#ae0d12" : "#fff")};
    outline: none;
    transition: all 0.2s ease-in;
  }
  &:active {
    outline: none;
  }
`;
export const Title = styled.h2`
  font-family: merriweather, serif;
  font-style: normal;
  font-weight: 500;
  color: ${(props) => (props.primary ? "#fff" : "#ae0d12")};
  letter-spacing: 2px;
  text-transform: uppercase;
`;
export const P = styled.p`
  color: #fff;
  padding: 1rem;
`;
