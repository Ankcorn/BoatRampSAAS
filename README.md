# Boat Ramp AAS

To view this demo go to [https://boatrampsaas.netlify.com/](https://boatrampsaas.netlify.com/)

Before you start developing make sure you install all the dependencies:

```
> yarn
```

Create a .env file with your mapbox token
```
REACT_APP_MAPBOX="magic mapbox token"
```
then run the project

```
> yarn start
```

## Data

The project contains a data set describing the location and metadata of boat ramps in Australia's Gold Coast. The data set can be found under `./data/boat_ramps.geojson`.

It is a standard [GeoJSON](http://geojson.org/) file, with each feature consisting of a `geometry` and `properties`, such as owner, material that the ramp is made of, etc.

To load it in I have turned it into a ts file and it is served as a response to requests to the ramps lambda

## Features

Your goal is to build a React and Redux-based UI to explore this data. The interface should have the following features:

- [x] A map to be able to visualise all the boat ramps.
- [ ] A data visualisation of your choice that displays the number or ramps per construction
- [ ] A data visualisation of your choice that displays the number of ramps per size category (values of `area` in 3 different ranges: `[0, 50)`, `[50, 200)`, and `[200, 526)`).
- [ ] Zooming in the map should filter the visualised data to include only those ramps which are currently visible in the viewport.
- [ ] Clicking on a data point on a visualisation, should filter the ramps on the map to reflect the selected data.

## Technology choices

The use of React and Redux is required. Apart from that, you are completely free to choose libraries, frameworks and tools to best assist you in this challenge. The choice of the method of serving the data to the UI is up to you, but it should use a RESTful API approach.
