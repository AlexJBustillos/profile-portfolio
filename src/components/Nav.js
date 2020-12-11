import { Link } from 'react-router-dom'

function Nav() {
    return(
        <ul>
            <Link to="/">Profile</Link><br/>
            <Link to="/about">About</Link><br/>
            <Link to="/contact">Contact</Link>
        </ul>
        
    )
}

export default Nav