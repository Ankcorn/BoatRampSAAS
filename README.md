# Boat Ramp AAS

To view this demo go to [https://gallant-darwin-b5858a.netlify.com/](https://gallant-darwin-b5858a.netlify.com/)

Before you start developing make sure you install all the dependencies:

```
> yarn
```

then simply run the project

```
> yarn start
```

## Data

The project contains a data set describing the location and metadata of boat ramps in Australia's Gold Coast. The data set can be found under `./data/boat_ramps.geojson`.

It is a standard [GeoJSON](http://geojson.org/) file, with each feature consisting of a `geometry` and `properties`, such as owner, material that the ramp is made of, etc.

## The challenge

Your goal is to build a React and Redux-based UI to explore this data. The interface should have the following features:

1. A map to be able to visualise all the boat ramps.
2. A data visualisation of your choice that displays the number or ramps per construction material.
3. A data visualisation of your choice that displays the number of ramps per size category (values of `area` in 3 different ranges: `[0, 50)`, `[50, 200)`, and `[200, 526)`).
4. Zooming in the map should filter the visualised data to include only those ramps which are currently visible in the viewport.
5. Clicking on a data point on a visualisation, should filter the ramps on the map to reflect the selected data.

## Technology choices

The use of React and Redux is required. Apart from that, you are completely free to choose libraries, frameworks and tools to best assist you in this challenge. The choice of the method of serving the data to the UI is up to you, but it should use a RESTful API approach.

## Once complete

When you've finished writing your code, please host it in a publicly accessible location (such as github) for us to clone, along with a readme on how to run it.

### Good luck!
