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
              <SubTitle> CS & Econ Student</SubTitle>
            </div> 
            <div>
              <Title> Hello, I’m Jack </Title>
              <Text>
                I'm a senior studying Computer Science and Economics at the University of Oregon. 
              </Text>
              <Text> 
                I'm passionate about data science, full stack web development, product management music, and basketball. 
                I'm currently looking for roles in any and all of these fields. Please see my resume attached below.
              </Text>
              <Text> 
                My company, <b className="lined-link"><a href="https://www.ampmusic.co">AmpMusic.co </a></b> strives to provide 
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
