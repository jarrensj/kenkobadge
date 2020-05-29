
import React from "react"

import Layout from "../components/common/layout/layout"
import SEO from "../components/common/layout/seo"
import Navigation from "../components/common/navigation/page-navbar"

import Footer from "../components/sections/footer"


import styled from "styled-components"

import { Section, Container } from "../components/global"

import Img from "gatsby-image"


import { graphql, useStaticQuery, Link } from "gatsby"


const Standards = () => {
  const data = useStaticQuery(graphql`
    query {
      file(sourceInstanceName: { eq: "product" }, name: { eq: "green-skew" }) {
        childImageSharp {
          fluid(maxWidth: 1000) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)
  return (
  <Layout>
    <SEO title="Home" />
    <Navigation />
    <HeaderWrapper id="top">
      <Container>
        <Flex>
          <HeaderTextGroup>
            <h1>
              Our Standards
            </h1>
            <h2>
              Our goal is to set the foundational standard for businesses to follow to protect their employees, their customers, and the Earth we share.
            </h2>
            <ul>
              <li>
                <h2>No Thermal Paper</h2>
                <p>Thermal paper commonly contains BPA, which can be absorbed into your body through contact with skin.</p>
              </li>
              <li>
                <h2>
                  Acceptable Containers
                </h2>
                <p>
                  We don't want chemicals leaking from the containers' material onto your food or into your beverages. This also applies to take out items.
                </p>
              </li>
              <li>
                <h2>Correct Gloves</h2> 
                <p>
                  If gloves are used, we don't want the gloves' material to be leaking into employees' bodies or the customers' food items.
                </p>
              </li>
              <li>
                <h2>Suitable Cutlery</h2>
                <p>
                  Ensuring proper utensils are handed for the consumption of goods. 
                </p>
              </li>
              <li>
                <h2>Proper Equipment</h2>
                <p>
                  Ensuring proper equipment such as cookware and utensils are used during the food preparation process. 
                </p>
              </li>
              <li>
                <h2>Proper Ventilation</h2>
                <p>
                  Proper ventilation is not just important for the chefs' health. VoCs can stick to food. 
                </p>
              </li>
            </ul>
            <p>
              After passing these standards, a certification is provided so they can publicly display clean and healthy preparation values to your customers.
            </p>
            <small>Please note that a business having passed the evaluation shows that their business complied to the standards on the day of the evalation. We are not responsible or in control if they make changes afterwards and are no longer in compliance. We are not responsible for any damages if the business does so choose to break compliance and still display the badge. We do recommend that you do report this to us and we will take action. We also put an expiration of 1 year on the certificate though to help deter this.</small>
          </HeaderTextGroup>
          <ImageWrapper>
          <StyledImage fluid={data.file.childImageSharp.fluid} />
            <br />
          </ImageWrapper>
        </Flex>
      </Container>
    </HeaderWrapper>
    <Footer />
  </Layout>
  )
}

export default Standards


const HeaderWrapper = styled.header`
  background-color: #f8f8f8;
  padding: 160px 0 80px 0;
  position: relative;
  clip-path: polygon(0 0, 100% 0, 100% 100%, 0 calc(100% - 5vw));
  @media (max-width: ${props => props.theme.screen.md}) {
  }
`
const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 16px;
`

const HeaderTextGroup = styled.div`
  margin: 0;

  > div {
    width: 120%;
    margin-bottom: -4.5%;

    @media (max-width: ${props => props.theme.screen.md}) {
      margin: 0 16px;
    }
  }

  h1 {
    margin: 0 0 24px;
    color: ${props => props.theme.color.primary};
  }

  h2 {
    margin-bottom: 24px;
    ${props => props.theme.font_size.regular}
  }

  p {
    margin-bottom: 48px;
  }
`

const Flex = styled.div`
  display: grid;
  justify-content: space-between;
  align-content: center;
  grid-template-columns: 1fr 1fr;
  @media (max-width: ${props => props.theme.screen.md}) {
    grid-template-columns: 1fr;
    grid-gap: 64px;
  }
`

const HeaderForm = styled.form`
  display: flex;
  flex-direction: row;
  padding-bottom: 16px;

  @media (max-width: ${props => props.theme.screen.sm}) {
    flex-direction: column;
  }
`

const FormSubtitle = styled.span`
  ${props => props.theme.font_size.xxsmall}
`

const FormSubtitleLink = styled(Link)`
  color: ${props => props.theme.color.secondary};
  padding-bottom: 1px;
  margin-left: 8px;
  text-decoration: none;
  border-bottom: 1px solid ${props => props.theme.color.secondary};
`

const HeaderInput = styled.input`
  font-weight: 500;
  font-size: 16px;
  color: ${props => props.theme.color.primary};
  line-height: 42px;
  width: 100%;
  text-align: left;
  height: 60px;
  border-width: 1px;
  border-style: solid;
  border-color: ${props => props.theme.color.secondary};
  border-image: initial;
  border-radius: 4px;
  padding: 8px 16px;
  outline: 0px;
  &:focus {
    box-shadow: inset ${props => props.theme.color.secondary} 0px 0px 0px 2px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
    margin-bottom: 8px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    display: block;
    width: 100%;
  }
`

const HeaderButton = styled.button`
  font-weight: 500;
  font-size: 14px;
  color: white;
  letter-spacing: 1px;
  height: 60px;
  display: block;
  margin-left: 8px;
  text-transform: uppercase;
  cursor: pointer;
  white-space: nowrap;
  background: ${props => props.theme.color.secondary};
  border-radius: 4px;
  padding: 0px 40px;
  border-width: 0px;
  border-style: initial;
  border-color: initial;
  border-image: initial;
  outline: 0px;
  &:hover {
    box-shadow: rgba(110, 120, 152, 0.22) 0px 2px 10px 0px;
  }
  @media (max-width: ${props => props.theme.screen.md}) {
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    margin-left: 0;
  }
`
const ImageWrapper = styled.div`
  justify-self: end;
  align-self: center;
  @media (max-width: ${props => props.theme.screen.md}) {
    justify-self: center;
  }
`

const StyledImage = styled(Img)`
  width: 500px;
  @media (max-width: ${props => props.theme.screen.md}) {
    width: 400px;
  }
  @media (max-width: ${props => props.theme.screen.sm}) {
    width: 300px;
    display: none;
  }
`
