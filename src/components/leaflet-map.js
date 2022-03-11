import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import { GatsbyImage, getImage } from 'gatsby-plugin-image'

const LeafletMap = ({ center, zoom, className, data }) => {
  return (
    <MapContainer center={center} zoom={zoom} className={className}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank" rel="noopener noreferrer">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank" rel="noopener noreferrer">OpenStreetMap France</a>'
      />
      {data
        ?.filter(item => item.places)
        .map(entry => {
          let url = ''

          if (entry.internal.type === 'ContentfulHistoricalSite') {
            url = 'historical-sites'
          } else if (entry.internal.type === 'ContentfulHistoricalFigure') {
            url = 'historical-figures'
          } else if (entry.internal.type === 'ContentfulInterview') {
            url = 'interviews'
          } else if (entry.internal.type === 'ContentfulEvent') {
            url = 'events'
          }

          const image = getImage(entry.image)

          return entry.places.map((place, key) => {
            return (
              <Marker
                key={key}
                position={[place.location.lat, place.location.lon]}
              >
                <Popup>
                  <a href={`/${url}/${entry.slug}`}>
                    <span>{entry.title}</span>
                    {image && <GatsbyImage image={image} />}
                  </a>
                </Popup>
              </Marker>
            )
          })
        })}
    </MapContainer>
  )
}

export default LeafletMap
