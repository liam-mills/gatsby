import * as React from 'react'
import { graphql, useStaticQuery } from 'gatsby'

const Title = ({title}) => {
    const data = useStaticQuery(graphql`
        query {
            allWp {
                edges {
                    node {
                        allSettings {
                            generalSettingsTitle
                        }
                    }
                }
            }
        }
    `)

    return (
        <title>{data.allWp.edges[0].node.allSettings.generalSettingsTitle} &mdash; {title}</title>
    )
}

export default Title