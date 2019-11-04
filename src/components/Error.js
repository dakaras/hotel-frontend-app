import React from 'react'
import {Link} from 'react-router-dom'
export default function Error() {
    return (
        <div>
            <p>404 PAGE NOT FOUND</p><br/>
            <Link to='/'>Return Home</Link>
        </div>
    )
}
