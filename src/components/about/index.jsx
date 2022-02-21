import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import {AboutSection, Avatar, Title, Text, SubTitle} from './style';
import {SectionIntro, ContainerLayout, ResumeButton} from "../common";

const About = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile.png" }) {
        childImageSharp {
          fluid(maxWidth: 550) {
            ...GatsbyImageSharpFluid
          }
        }
      }
    }
  `)
  return (
    <>
      <SectionIntro>
        <ContainerLayout>
          <AboutSection>
            <div>
              <Avatar fluid={data.placeholderImage.childImageSharp.fluid} alt="user photo" />
              <SubTitle> Software Engineer </SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Jack </Title>
              <Text>
                I'm a software engineer in the Client Integration department at <b className="lined-link"><a href="https://www.epsilon.com/us">Epsilon</a></b>, an ad-tech company owned by Publicis Groupe.
              </Text>
              <Text> 
                I'm passionate about software engineering, full stack web development, music, basketball, and rock climbing. 
                I am always looking for a challenge where I can learn and grow while meeting new people. Please see my resume attached below.
              </Text>
              <Text> 
                My company, <b className="lined-link"><a href="https://ampmusic.co">AmpMusic.co </a></b> strives to provide 
                budding artists with all the tools they need to survive in the music industry. Check it out and let me know what you think!
              </Text>
              <ResumeButton href="resume.pdf" target="_blank"> Download resume </ResumeButton>
            </div>
          </AboutSection>
        </ContainerLayout>
      </SectionIntro>
    </>
  )
}


export default About
