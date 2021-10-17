import React from 'react'
import { Link } from 'gatsby'
const Links = () => {
  return (
    <ul className='nav-link'>
      <li>
        <Link to='/' className='page-link'>
          About
        </Link>
      </li>
      <li>
        <Link to='/posts' className='page-link'>
          Skills
        </Link>
      </li>
      <li>
        <Link to='/newsletter' className='page-link'>
          Projects
        </Link>
      </li>
      <li>
        <Link to='/post' className='page-link'>
          Contacts
        </Link>
      </li>
    </ul>
  )
}

export default Links
