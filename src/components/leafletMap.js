import React from 'react'
import PropTypes from 'prop-types'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Img from 'gatsby-image'

class LeafletMap extends React.Component {
  static propTypes = {
    /** Latitude and Longitude of the map centre in an array, eg [51, -1] **/
    position: PropTypes.array,

    /** Initial zoom level for the map (default 13) **/
    zoom: PropTypes.number,
  }

  static defaultProps = {
    position: [55.92077, -4.33371],
    zoom: 13,
  }

  render() {
    return (
      <Map center={this.props.position} zoom={this.props.zoom}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank" rel="noopener noreferrer">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank" rel="noopener noreferrer">OpenStreetMap France</a>'
        />
        {this.props.places.map(({ node }) => {
          return (
            <Marker
              key={node.id}
              position={[node.coordinates.lat, node.coordinates.lon]}
            >
              <Popup className="popup">
                {node.title}
                <Img fixed={node.media[0].photo.fixed}></Img>
              </Popup>
            </Marker>
          )
        })}
      </Map>
    )
  }
}

export default LeafletMap
