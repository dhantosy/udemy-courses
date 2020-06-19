import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

import Clue from './Clue'

class Category extends Component {
  constructor() {
    super()

    this.state = {
      clues: []
    }
  }

  componentDidMount() {
    const { id } = this.props.category

    fetch(`http://jservice.io/api/clues?category=${id}`)
      .then(response => response.json())
      .then(json => this.setState({ clues: json }))
  }

  render() {
    const { title } = this.props.category

    return (
      <div>
        <Link to='/' className='link-home'>
          <h4>Home</h4>
        </Link>
        <h2>{title}</h2>
        {
          this.state.clues.map(clue => {
            return (
              <Clue key={clue.id} clue={clue} />
            )
          })
        }
      </div>
    )
  }
}

function mapStateToProps(state) {
  return { category: state.category }
}

export default connect(mapStateToProps, null)(Category)
