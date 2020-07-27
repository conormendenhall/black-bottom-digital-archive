import React from 'react'
import { Map, TileLayer, Marker, Popup } from 'react-leaflet'
import Img from 'gatsby-image'

const LeafletMap = ({ position, zoom, className, sites }) => {
  return (
    <Map center={position} zoom={zoom} className={className}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.fr/hot/{z}/{x}/{y}.png'"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Tiles style by <a href="https://www.hotosm.org/" target="_blank" rel="noopener noreferrer">Humanitarian OpenStreetMap Team</a> hosted by <a href="https://openstreetmap.fr/" target="_blank" rel="noopener noreferrer">OpenStreetMap France</a>'
      />
      {sites
        ?.filter(site => site.place?.location)
        .map((site, key) => {
          return (
            <Marker
              key={key}
              position={[site.place.location.lat, site.place.location.lon]}
            >
              <Popup>
                <a
                  href={`/${
                    site.internal.type === 'ContentfulHistoricalSite'
                      ? 'historical-sites'
                      : 'events'
                  }/${site.slug}`}
                >
                  <h4>{site.title}</h4>
                  {site.image && <Img fluid={site.image.fluid}></Img>}
                </a>
              </Popup>
            </Marker>
          )
        })}
    </Map>
  )
}

export default LeafletMap
