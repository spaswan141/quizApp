import React from 'react'
import { Link } from 'react-router-dom'
import Styles from '../styles/Home.module.css'
function Home() {
  return (
    <div>
     <div className={Styles.navbar}>
       <div className={Styles.userNavbar}>
        <Link className={Styles.navbarRouteName}  to="" >User</Link>
       </div>
       <div className={Styles.adminNavbar}>
       <Link className={Styles.navbarRouteName} to="" >Admin</Link>

       </div>
     </div>
    </div>
  )
}

export default Home