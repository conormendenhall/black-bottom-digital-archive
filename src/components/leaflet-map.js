import React from 'react'
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'

const LeafletMap = ({ center, zoom, className, data }) => {
  return (
    <MapContainer center={center} zoom={zoom} className={className}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank" rel="noopener noreferrer">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank" rel="noopener noreferrer">OpenStreetMap France</a>'
      />
      {data
        ?.filter((item) => item.places)
        .map((entry) => {
          let url = ''

          if (entry.internal.type === 'ContentfulHistoricalSite') {
            url = 'historical-sites'
          } else if (entry.internal.type === 'ContentfulHistoricalFigure') {
            url = 'historical-figures'
          } else if (entry.internal.type === 'ContentfulInterview') {
            url = 'oral-histories'
          }

          const briefMaximumChar = 249
          const brief = entry.brief?.trim().substring(0, briefMaximumChar)

          return entry.places.map((place, key) => {
            return (
              <Marker
                key={key}
                position={[place.location.lat, place.location.lon]}
              >
                <Popup closeButton={false}>
                  <a href={`/${url}/${entry.slug}`}>
                    <div className="map-popup-header bold">{entry.title}</div>
                    {brief && <div className="map-popup-body">{brief}</div>}
                    <div>&gt;&gt; Read more</div>
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
