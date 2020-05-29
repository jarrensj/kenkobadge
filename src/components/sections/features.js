import React from "react"
import styled from "styled-components"
import { Link } from "gatsby"

import { Section, Container } from "../global"

const Features = () => (
  <Section id="features">
    <StyledContainer>
      <Subtitle>What we care about</Subtitle>
      <SectionTitle>Our Standards</SectionTitle>
      <FeaturesGrid>
        <FeatureItem>
          <FeatureTitle>No Thermal Paper</FeatureTitle>
          <FeatureText>
            BPA can be absorbed into your body just by handling thermal paper. The common culprit is a receipt.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Acceptable Containers</FeatureTitle>
          <FeatureText>
            We don't want chemicals leaking from the containers' material onto your food or into your drinks.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Correct Gloves</FeatureTitle>
          <FeatureText>
            We don't want the gloves' material to be leaking into employees' bodies or the customers' food items.
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Appropriate Cookware</FeatureTitle>
          <FeatureText>
            We want to ensure proper utensils and equipment are used starting from the preparation process. 
          </FeatureText>
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Suitable Cutlery</FeatureTitle>
          <FeatureText>
            Ensuring proper utensils are handed to the customer for the consumption of their goods.
          </FeatureText>        
        </FeatureItem>
        <FeatureItem>
          <FeatureTitle>Proper Ventilation</FeatureTitle>
          <FeatureText>
            Proper ventilation is not just important for the chefs' health. VoCs can stick to food.
          </FeatureText>
        </FeatureItem>
      </FeaturesGrid>
      <Subtitle><Link to="/standards" style={{ textDecoration: 'none' }} >See full details of our standards</Link></Subtitle>
    </StyledContainer>
  </Section>
)

export default Features

const StyledContainer = styled(Container)``

const SectionTitle = styled.h3`
  color: ${props => props.theme.color.primary};
  display: flex;
  justify-content: center;
  margin: 0 auto 40px;
  text-align: center;
`

const Subtitle = styled.h5`
  font-size: 16px;
  color: ${props => props.theme.color.accent};
  letter-spacing: 0px;
  margin-bottom: 12px;
  text-align: center;
`

const FeaturesGrid = styled.div`
  max-width: 670px;
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 0px auto;
  grid-column-gap: 40px;
  grid-row-gap: 35px;
  @media (max-width: ${props => props.theme.screen.sm}) {
    grid-template-columns: 1fr;
    padding: 0 64px;
  }
`

const FeatureItem = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`

const FeatureTitle = styled.h4`
  color: ${props => props.theme.color.primary};
  letter-spacing: 0px;
  line-height: 30px;
  margin-bottom: 10px;
`

const FeatureText = styled.p`
  text-align: center;
`
