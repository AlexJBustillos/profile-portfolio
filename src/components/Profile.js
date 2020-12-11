import { Link } from 'react-router-dom'

function Profile(props) {
    const projectItems = props.projects.map((p) => {
        return <li key={p.id}><Link to={`/profile/${p.id}`}>{p.name}</Link></li>
    })
    return(
        <>
            <h1>Projects</h1>
            <ul>{projectItems}</ul>
        </>
    )
}

export default Profile