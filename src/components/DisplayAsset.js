import React, { Component } from 'react'
import {listAssets} from '../graphql/queries'
import { API, Auth, graphqlOperation } from 'aws-amplify'
class DisplayAsset extends Component {
  state = {
    errorMessage:"",
    isHovering: false,
    assets: [],
    ownerId: "",
    ownerUsername: ""
  }

  componentDidMount = async () => {
    this.getAssets() 
    await Auth.currentUserInfo()
    .then(user => {
      this.setState(
        {
          ownerId: user.attributes.sub,
          ownerUsername: user.username,
        }
      )
    })
  }

  componentWillUnmount() {
  
  }

  getAssets = async () => {
 
    try {
      const result = await API.graphql(graphqlOperation(listAssets))

      this.setState({ assets: result.data.listAssets.items })
    } catch (error) {
      console.error(error)
    }
  }
  render() {
    const { assets } = this.state
    return (
      assets.map(( asset ) => {
        return (
          <tr key={asset.id}>
            <th>{asset.id}</th>
            <th>{asset.description}</th>
            <th>{asset.organization}</th>
            <th>{asset.manufact}</th>
            <th>{asset.manufact_model}</th>
            <th>{asset.asset_type}</th>
          </tr>
        )
      })
  )}
}
export default DisplayAsset;