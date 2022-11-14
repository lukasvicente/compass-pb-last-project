import styled from 'styled-components';
import loginBackground from '../../assets/loginBackground.png';
import logoCompass from '../../assets/logoCompass.png';

export const Container = styled.div`
  display: flex;
  flex-direction: row;
  background: linear-gradient(180deg, #33383d 0%, #1c1d20 100%);
  height: 100vh;
  width: 100%;
  @media (max-height: 650px) {
    height: auto;
  }
`;
export const ContainerLeft = styled.div`
  width: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  color: ${(props) => props.theme.secondary};
  @media (max-width: 920px) {
    width: 100%;
    background-image: url(${logoCompass});
    background-repeat: no-repeat;
    background-size: 200px;
    background-position-x: center;
    background-position-y: 25px;
  }

  @media (max-height: 775px) {
    padding: 20% 0;
  }

  @media (max-width: 420px) {
    width: 75%;
    margin: 0 10%;
    background-position-x: center;
    background-position-y: 25px;
  }
  @media (max-width: 375px) {
    align-items: flex-start;
    background-position-x: center;
    background-position-y: 25px;
    background-size: 150px;
    width: 100%;
  }
  @media (max-width: 320px) {
    margin: 0 7%;
    background-size: 120px;
  }
`;
export const TitleContainer = styled.div``;
export const ErrorMessageContainer = styled.div`
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ErrorMessage = styled.p`
  font-weight: 700;
  font-size: 14px;
  line-height: 20px;
  text-align: center;
  display: ${(props) => (props.error ? 'initial' : 'none')};
  color: ${(props) => props.error && '#E9B425'};
`;
export const SignUpButton = styled.a`
  font-weight: 700;
  font-size: 0.875rem;
  line-height: 20px;
  text-align: center;
  color: ${(props) => props.theme.secondary};
  margin-top: 20px;
  cursor: pointer;
  width: 100%;
  text-align: center;
  @media (max-width: 920px) {
    padding-left: 20px;
  }

  @media (max-width: 375px) {
    padding-left: 0;
  }
`;
export const Form = styled.form`
  min-width: 300px;
  width: 379px;
  margin-top: 135px;
  color: #e0e0e0;
  h2 {
    font-weight: 400;
    font-size: 1.875rem;
    line-height: 38px;
    margin-bottom: 32px;
  }
  @media (max-width: 375px) {
    min-width: 0;
    width: 100%;
    margin-top: 50px;
  }
`;

export const FormButtonContainer = styled.div`
  width: 100%;

  @media (max-width: 920px) {
    width: 110%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`;
export const Title = styled.h1`
  font-weight: 400;
  width: 379px;
  font-size: 3.75rem;
  line-height: 76px;
  color: #e0e0e0;
  padding-bottom: 18px;
  @media (max-width: 920px) {
    margin-top: 50px;
  }
  @media (max-width: 375px) {
    margin-top: 20px;
  }
`;
export const Description = styled.p`
  font-weight: 400;
  font-size: 1rem;
  line-height: 20px;
  max-width: 300px;
  color: #e0e0e0;
`;
export const ContainerRight = styled.div`
  width: 50%;
  background-image: url(${loginBackground});
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  justify-content: center;
  padding-top: 35px;
  img {
    width: 434px;
    height: 60px;
  }

  @media (max-width: 920px) {
    display: none;
  }
`;
