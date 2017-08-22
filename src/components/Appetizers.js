import React, { Component } from "react"

export default class Appetizers extends Component {
  render() {
    let key = 0
    let appetizers = this.props.items.map(items => {
      key++
      return (
        <tbody key={key}>
          <tr>
            <td>
              {items.dish}
            </td>
            <td>
              {items.description}
            </td>
            <td>
              {items.price}
            </td>
          </tr>
        </tbody>
      )
    })
    return (
      <div className="row">
        <div className="col-md-6 col-md-offset-3">
          <h4>Appetizers</h4>
          <table className="table">
            <thead>
              <tr>
                <th className="col-md-3">Dish</th>
                <th className="col-md-8">Description</th>
                <th className="col-md-1">Price</th>
              </tr>
            </thead>
            {appetizers}
          </table>
        </div>
      </div>
    )
  }
}
