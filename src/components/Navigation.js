import * as React from 'react'
import { Link } from 'gatsby'

const Navigation = ({links}) => {
    return (
        <nav>
            <ul className="flex gap-3">
                {links.map(link => <li key={link.url}><Link to={link.url} className="text-blue-500 hover:text-blue-600">{link.label}</Link></li>)}
            </ul>
        </nav>
    )
}

export default Navigation