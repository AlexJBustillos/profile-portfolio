function ProfileDetails(props) {
    console.log(props.project.name);
    return(
        <div>
            <h1>{props.project.name}</h1>
            <p>{props.project.description}</p>
            <a href="{props.project.url}">Live Site</a>
        </div>
    )
}

export default ProfileDetails