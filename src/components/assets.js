import React, { Component } from 'react'
import { Container, Table } from 'react-bootstrap'
import DisplayAsset  from './DisplayAsset'

class Assets extends Component {

  render() {
    return (
      <Container>
        <Table responsive>
          <thead>
            <tr>
              <th>Asset</th>
              <th>Description</th>
              <th>Organization</th>
              <th>Manufacturer</th>
              <th>Model</th>
              <th>Asset Type</th>
            </tr>
          </thead>
          <tbody>
            <DisplayAsset />
          </tbody>
        </Table>
      </Container>

    )
  }
}
export default Assets;