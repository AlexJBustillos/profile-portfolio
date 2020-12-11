import React, { useState } from 'react'
import axios from 'axios'
import GithubResult from './GithubResult'

function Github() {
    // TODO Verify zip is actually a zip
    const [username, setUsername] = useState('');
    const [github, setGithub] = useState(null);

    const handleSubmit = (e) => {
        e.preventDefault();
        // We will call the api using axios
        let url = `https://api.github.com/users/${username}`
        axios.get(url)
        .then(result => {
            // Set some state
            setGithub(result.data)
        })
        .catch(err => {
            console.log(err);
        })
    }
     // conditionally render a weather result componenet

    return (
        <div>
            <form onSubmit={handleSubmit}>
                <h1>Find profiles in Github</h1>
                {github ? <GithubResult github={github}/> : null}
                <label htmlFor='username'>Username: </label>
                <input type="text" name="username" id="username" onChange={e => setUsername(e.target.value)}
                />
                <input type="submit" value="Find Github"/>
            </form>
        </div>
    )
}

export default Github