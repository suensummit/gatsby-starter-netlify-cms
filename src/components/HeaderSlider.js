import React from 'react'
import { useStaticQuery } from 'gatsby'
import BackgroundSlider from 'gatsby-image-background-slider'

const HeaderSlider = ({ children }) => (
  <>
    <main>{children}</main>
    <div className="full-width-image-container margin-top-0">
      <BackgroundSlider 
        query={useStaticQuery(graphql`
          query {
            backgrounds: allFile (filter: {sourceInstanceName: {eq: "backgrounds"}}){
              nodes {
                relativePath
                childImageSharp {
                  fluid (maxWidth: 4000, quality: 100){
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
        `)}
      />
    </div>
  </>
)

export default HeaderSlider