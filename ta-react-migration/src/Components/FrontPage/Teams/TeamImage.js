import React, { Component } from 'react'

class TeamImage extends Component {
    render() {
        return (
            <figure>
                <img src={require('../../../assets/images/teams.png')} alt="teams" />
            </figure>
        )
    }
}
export default TeamImage