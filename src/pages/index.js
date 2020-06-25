import React from "react"
import { graphql } from 'gatsby'
import Img from 'gatsby-image'
import './index.css'

const IndexPage = ({ data }) => {
  console.log(data);
  return (
    <div>
      <div className="header"><center><h1>My Photo Album</h1></center></div>
      
      <div className="photos">
        {data.allFile.edges.map(({node}) => {  // (edge) aslında
          return <Img key={node.id} fluid={node.childImageSharp.fluid}/>
        })}
      </div>
    </div>
  )
}


export const pageQuery = graphql`
  query IndexPageQuery 
  {
    allFile (filter: {absolutePath: {regex: "//photos//"}}) {
      edges {
        node {
          id,
          childImageSharp {
            fluid {
              ...GatsbyImageSharpFluid
            }
          }
        }
      }
    }
  }
`

export default IndexPage
