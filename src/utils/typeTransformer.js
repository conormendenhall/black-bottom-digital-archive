const transformType = (type) => {
  let pathSegment = ''

  if (type === 'ContentfulHistoricalSite') {
    pathSegment = 'historical-sites'
  } else if (type === 'ContentfulHistoricalFigure') {
    pathSegment = 'historical-figures'
  } else if (type === 'ContentfulInterview') {
    pathSegment = 'oral-histories'
  }

  return pathSegment
}

export default transformType
