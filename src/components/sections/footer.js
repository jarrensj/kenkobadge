import { Link } from 'gatsby'
import React from "react"
import styled from "styled-components"

import { Container } from "../global"

const Footer = () => (
  <FooterWrapper id="footer">
    <FooterColumnContainer>
      <FooterColumn>
        <span>Resources</span>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: "black" }} to="/standards">Our Standards</Link></li>
          <li><Link style={{ textDecoration: 'none', color: "black" }} to="/disclaimer">Full Disclaimer</Link></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Company</span>
        <ul>
          <li><Link style={{ textDecoration: 'none', color: "black" }} to="/about">About Us</Link></li>
          <li><a style={{ textDecoration: 'none', color: "black" }} href="https://linkedin.com/in/jarrensanjose">LinkedIn</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Social</span>
        <ul>
          <li><a style={{ textDecoration: 'none', color: "black" }} href="https://instagram.com/jarrensj">Instagram</a></li>
          <li><a style={{ textDecoration: 'none', color: "black" }} href="https://twitter.com/jarrensj">Twitter</a></li>
        </ul>
      </FooterColumn>
      <FooterColumn>
        <span>Contact</span>
        <ul>
          <li><a style={{ textDecoration: 'none', color: "black" }} href="mailto:sanjose.jarren@gmail.com">Email</a></li>
          <li><Link style={{ textDecoration: 'none', color: "black" }} to="/join-us">Join Us</Link></li>
        </ul>
      </FooterColumn>
    </FooterColumnContainer>
    <BrandContainer>
      <Logo><Link style={{ textDecoration: 'none', color: "black" }} to="/">kenko</Link></Logo>
    </BrandContainer>
  </FooterWrapper>
)

const FooterWrapper = styled.footer`
  background-color: white;
  margin: 80px 0 0;
  padding: 0 0 80px;
`

const Logo = styled.div`
  font-family: ${props => props.theme.font.extrabold};
  ${props => props.theme.font_size.regular};
  color: ${props => props.theme.color.black.regular};
  text-decoration: none;
  letter-spacing: 1px;
  margin: 0;
  display: inline-flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 9;
  text-decoration: none;
  outline: 0px;
`

const BrandContainer = styled(Container)`
  position: relative;
  padding-top: 48px;
  display: flex;
  align-items: flex-end;

  @media (max-width: ${props => props.theme.screen.sm}) {
  }
`
const FooterColumnContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-column-gap: 32px;
  justify-content: start;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr 1fr;
    grid-gap: 32px;
  }
`
const FooterColumn = styled.div`
  span {
    font-size: 16px;
    font-family: ${props => props.theme.font.bold};
    color: ${props => props.theme.color.primary};
  }
  ul {
    list-style: none;
    margin: 16px 0;
    padding: 0;
    color: ${props => props.theme.color.black.regular};
    li {
      margin-bottom: 12px;
      font-family: ${props => props.theme.font.normal};
      font-size: 15px;
    }
  }
`

export default Footer