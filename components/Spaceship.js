import React from 'react'

class Spaceship extends React.Component {
  render() {
    return (
      <div className="space_ship">
        <h2>Name: {this.props.name}</h2>
        <h4>Speed: {this.props.speed}</h4>
        <p>Has Rockets: {this.props.hasRockets}</p>
        <p>Colors: {this.props.colors}</p>
      </div>
    )
  }
}

Spaceship.defaultProps = {
  hasRockets: false,
  colors: ['black', 'red']
}

export default Spaceship
