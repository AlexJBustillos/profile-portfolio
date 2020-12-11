import { Link } from 'react-router-dom'

function Nav() {
    return(
        <ul>
            <Link to="/profile">Profile</Link><br/>
            <Link to="/">Home</Link><br/>
            <Link to="/contact">Contact</Link><br/>
            <Link to="/weather">Weather</Link>
            <Link to="/github">Find GH</Link>
        </ul>
        
    )
}

export default Nav