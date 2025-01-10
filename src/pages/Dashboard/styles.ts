import styled from "styled-components";

export const Title = styled.h1`
  font-size: 48px;
  color: var(--color-black-medium);
  max-width: 28rem;
  line-height: 3.5rem;
`;

export const Form = styled.form`
  margin-top: 2.5rem;
  max-width: 44rem;

  display: flex;

  input {
    flex: 1;
    height: 4rem;
    padding: 0 1.5rem;
    border: 0;
    border-radius: 0.4rem 0rem 0rem 0.4rem;
  }

  button {
    width: 13rem;
    height: 4rem;
    background: var(--color-green-light);
    border-radius: 0rem 0.4rem 0.4rem 0rem;
    border: 0;
    color: var(--color-white);
    font-weight: bold;
  }
`;

export const Repositories = styled.div`
  margin-top: 5rem;
  max-width: 28rem;

  a {
    background: var(--color-white);
    border-radius: 5px;
    width: 100%;
    display: block;
    text-decoration: none;

    display: flex;
    align-items: center;

    img {
      width: 4rem;
      height: 4rem;
      border-radius: 50%;
    }

    div {
      margin-left: 1rem;

      strong {
        font-size: 20px;
        color: var(--color-black-medium);
      }

      p {
        font-size: 18px;
        color: var(--color-gray-medium);
        margin-top: 0.2rem;
      }
    }
  }
`;