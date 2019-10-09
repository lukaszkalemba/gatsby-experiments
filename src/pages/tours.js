import React from 'react'
import Tours from '../components/tours/Tours'
import Layout from '../components/layout'
import { graphql, useStaticQuery } from 'gatsby'

const tours = () => {
  const { tours } = useStaticQuery(graphql`
    query {
      tours: allContentfulTour {
        edges {
          node {
            name
            price
            slug
            country
            id: contentful_id
            days
            images {
              fluid {
                ...GatsbyContentfulFluid_withWebp
              }
            }
          }
        }
      }
    }
  `)

  return (
    <Layout>
      <Tours tours={tours.edges} />
    </Layout>
  )
}

export default tours
