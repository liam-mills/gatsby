import * as React from 'react'
import Layout from '../components/layout'
import Title from '../components/Title'
import { graphql, useStaticQuery, Link } from 'gatsby'

const Blog = () => {
    const data = useStaticQuery(graphql`
        query {
            allWpPost {
                edges {
                    node {
                        databaseId
                        title
                        excerpt
                        slug
                    }
                }
            }
        }
    `)

    return (
        <Layout>
            <Title title="home" />
                <h2 className="text-3xl mb-6">Posts</h2>
                <div className="grid grid-cols-2 gap-3">
                    {data.allWpPost.edges.map(({ node }) => (
                        <Link to={node.slug} key={node.databaseId}>
                            <article className="border border-white p-3 space-y-3">
                                <h3 className="text-2xl">{node.title}</h3>
                                <div dangerouslySetInnerHTML={{ __html: node.excerpt }} />
                            </article>
                        </Link>
                    ))}
                </div>
        </Layout>
    )
}

export default Blog