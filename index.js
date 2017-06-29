import React, { Component } from 'react'
import ReactDOM from 'react-dom'

const styles = {
  app: {
    textAlign: 'center',
    fontFamily: 'Helvetica Neue',
    fontWeight: 'bold',
    fontSize: 32
  },
  emoji: {
    paddingTop: '40vh',
    textAlign: 'center',
    fontSize: 42
  },
}

class App extends Component {
  render() {
    return (
      <div>
        <div style={styles.emoji}>
          🔜
        </div>
      </div>
    )
  }
}

const root = document.querySelector('#app')
ReactDOM.render(<App />, root)
