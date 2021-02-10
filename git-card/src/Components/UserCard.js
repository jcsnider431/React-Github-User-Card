import React from 'react';


class UserCard extends React.Component {
    render() {
        const { name, followers, following, company, location, bio, avatar_url} = this.props
        return (
            <div className="cardContainer">
                
                <h1>Name: {name}</h1>
                {/* <img src={avatar_url} /> */}
                <div>
                    <p>Bio: {bio}</p>
                </div>
                <p>Followers: {followers}</p>
                <p>Following: {following}</p>
                <p>Company: {company}</p>
                <p>Location: {location}</p>
            </div>
        )
    }
}

export default UserCard;