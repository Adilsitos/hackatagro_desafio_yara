import styled from "styled-components";
import img from '../../assets/header_background.png';

export const Container = styled.div`

  font-family: "Boing Regular", sans-serif;
  flex-direction: column;
  font-size: 30px;
  justify-content: center;
  align-items: center;
  display: flex;
  width: 100%;
 
  background-color: #D5E4D9;
`;

export const Content = styled.div`
  display: grid;
  grid-gap: 35px;
  grid-template-columns: 1.5fr 1fr;
  grid-template-rows: 1.4fr 1fr;
  margin: 0px 35px;
  @media (max-width: 910px) {
    grid-gap: 25px;
    grid-template-columns: 1fr;
    grid-template-rows: 2fr 0.7fr 2.6fr;
    margin: 0px 25px;
  }
`;

export const Header = styled.header`
  padding: 25px 0px;
  width:100%;
  margin-top:10px;
  display: inline-flex;
  justify-content:center;
  align-items: center;
  padding: 0;
  height:180px;
`;


export const H1 = styled.h1`
  margin: 0;
  padding: 0;
  font-family: "Boing Regular", sans-serif;
  font-size: 16px;
  line-height: 10px;
  color: #ffffff;
  margin-left:20px;
  color:#D5E4D9;
`;

export const Title = styled.ul`
  margin-top:0px;
  color:#D5E4D9;;
  font-family: "Comfortaa", sans-serif;
  font-size: 50px;
  font-weight: bold;
  display: flex;
  margin-left:400px;


`;

export const Body = styled.div`
  margin-top:0px;
  padding:0px;
  display:flex;
  position: relative;
  align-items: center;
  justify-content: center;
  background-color: #D5E4D9;
  width: 100%;
  flex-direction: column;
`;

export const InputContainer = styled.div`
  width: 60%;
  padding-top: 20px;
  display: flex;
  justify-content: space-evenly;
` ;
export const Background = styled.div`
  background-image: url(${img});
  filter:brightness(70%);
  justify-content:center;
  align-items: center;
  width:95%;
  position: relative;
  display:table-cell;
  
`;

export const Cardtitle = styled.div`
  font-size: 54px;
  line-height: 1.05;
  margin: 15px 0px;

  @media (max-width: 910px) {
    font-size: 33px;
  }
`;

export const Carddescription = styled.p`
  font-size: 24px;
  font-weight: 500;
  line-height: 1.45;
  margin: 0px 0px 25px 0px;

  @media (max-width: 910px) {
    font-size: 18px;
    line-height: 1.35;
  }
`;

export const Button = styled.button`
  font-size: 18px;
  font-weight: 700;
  text-decoration: none;
  border: none;
  border-radius: 20px;
  margin-right: 15px;
  padding: 15px 40px;
  cursor: pointer;
  background: #ffffff;

  @media (max-width: 910px) {
    font-size: 16px;
    padding: 12px 25px;
  }
`;

export const Cardlink = styled.a`
  margin: 0;
  color: #000;
  font-size: 20px;
  font-weight: 700;
  text-decoration: none;
  padding-bottom: 3px;
  border-bottom-width: 2px;
  border-bottom-style: solid;
  border-bottom-color: #000;

  @media (max-width: 910px) {
    font-size: 16px;
  }
`;

export const Icon = styled.a`
  position: absolute;
  bottom: -17px;
  left: 60px;
  z-index: 1;
`;

export const Hamburguermenu = styled.nav`
  position: fixed;
  display: flex;
  flex-direction: column;
  top: 0;
  right: ${({ toggle }) => (toggle ? 0 : "100vw")};
  height: calc(100vh - 40px);
  width: calc(100vw - 40px);
  padding: 20px;
  z-index: 2;
  background: #3cf;
`;
