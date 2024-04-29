import * as React from 'react'
import Navigation from '../components/Navigation'
import { useStaticQuery, graphql } from 'gatsby'

const links = [
    {
        url: '/',
        label: 'Home'
    },
    {
        url: '/blog',
        label: 'Blog'
    }
]

const Layout = ({pageTitle, children}) => {
    const data = useStaticQuery(graphql`
        query {
            site {
                siteMetadata {
                    title
                }
            }
        }
    `)

    return (
        <div className="bg-black text-white min-h-screen">
            <header className="bg-white">
                <div className="flex gap-6 max-w-7xl m-auto p-6 items-center">
                    <h1 className="text-xl font-bold text-black">{data.site.siteMetadata.title}</h1>
                    <Navigation links={links}></Navigation>
                </div>
            </header>
            <main className="max-w-7xl m-auto p-6">
                <h1 className="text-3xl font-bold">{pageTitle}</h1>
                {children}
            </main>
        </div>
    )
}

export const Head = () => <title>Home</title>

export default Layout