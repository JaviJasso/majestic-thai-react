import React, { Component } from "react"
import Appetizers from "./Appetizers"
import Desserts from "./Desserts"
import Entrees from "./Entrees"
import Layout from "./Layout"
//
import "../styles/App.css"
// Import BaseLayout, Appetizers, Entrees, Desserts

class App extends Component {
  constructor(props) {
    super(props)

    this.state = {
      appetizers: [],
      entrees: [],
      desserts: []
    }
  }
  // Lifecycle method
  // Fetch from http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu.
  // The response should return an object with appetizers, entres, and desserts.
  // Set these to state.
  // YOUR CODE HERE>
  componentDidMount() {
    fetch("http://tiny-lasagna-server.herokuapp.com/collections/reactthaimenu")
      .then(response => response.json())
      .then(allData => {
        this.setState({
          appetizers: allData[0].Appetizers,
          desserts: allData[0].Desserts,
          entrees: allData[0].Entrees
        })
      })
  }

  render() {
    // Your render should consist of the BaseLayout with the following children components: Appetizers, Entrees, and Dessert.
    // Each component needs to receive state via props.
    return (
      <Layout>
        <Appetizers items={this.state.appetizers} />
        <Entrees items={this.state.entrees} />
        <Desserts items={this.state.desserts} />
      </Layout>
    )
  }
}

export default App
