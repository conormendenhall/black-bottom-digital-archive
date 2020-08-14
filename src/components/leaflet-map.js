import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Img from 'gatsby-image'

const LeafletMap = ({
  position,
  zoom,
  className,
  sites
}) => {
  return (
    <Map center={position} zoom={zoom} className={className}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank" rel="noopener noreferrer">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank" rel="noopener noreferrer">OpenStreetMap France</a>'
      />
      {sites
        ?.filter(item => item.place?.location)
        .map((item, key) => {
          let url = ''

          if (item.internal.type === 'ContentfulHistoricalSite') {
            url = 'historical-sites'
          } else if (item.internal.type === 'ContentfulHistoricalFigure') {
            url = 'historical-figures'
          } else if (item.internal.type === 'ContentfulEvent') {
            url = 'events'
          } else if (item.internal.type === 'ContentfulInterview') {
            url = 'interviews'
          }

          return (
            <Marker
              key={key}
              position={[
                item.place.location.lat,
                item.place.location.lon,
              ]}
            >
              <Popup>
                <a href={`/${url}/${item.slug}`}>
                  <h4>{item.title}</h4>
                  {item.image && <Img fluid={item.image.fluid} />}
                </a>
              </Popup>
            </Marker>
          )
        })}
    </Map>
  )
}

export default LeafletMap
