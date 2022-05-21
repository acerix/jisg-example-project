import React from 'react'
import {A000045} from 'jisg'
import './App.css'

const generator = A000045()

interface AppState {
  output: String
}

class App extends React.Component<{}, AppState> {
  interval: NodeJS.Timer | undefined

  override state : AppState = {
    output: ''
  }

  override render() {
    return (
      <div className='App'>{this.state.output}</div>
    )
  }

  override componentDidMount() {
    this.interval = setInterval(
      () => {
        const v = generator.next().value
        this.setState({ output: this.state.output + v + ' ' })
      },
      0
    )
  
  }

  override componentWillUnmount() {
    clearInterval(this.interval)
  }

}

export default App
