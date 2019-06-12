# slchallenge

## Objective
The objective of this application is to display customer's information, find possible email duplicates, and email character frequency.

## Background 
Companies may have several duplicates because of typos, using database space and making the search features less accurate.

## Overview
This application connects to Salesloft API to fetch people information and find possible duplicates by using a mix of Levenshtein distance algorithm and Dice similarity coefficient.

## Detailed design
### High level architecture
The following diagram represents motivation, strategy, business and application layers using Archimate modeling language.
![SL](https://user-images.githubusercontent.com/16652547/59323874-30a1a000-8ca2-11e9-8d5f-547f239cc49d.jpg)

### Use cases
The following diagram represents the use cases covered by this application.
![useCases](https://user-images.githubusercontent.com/16652547/59323918-5cbd2100-8ca2-11e9-9b9c-1bc0e7816662.png)

### Component diagram
The following diagram represents application components and their relations.
![components](https://user-images.githubusercontent.com/16652547/59323978-9e4dcc00-8ca2-11e9-87c5-49dabd783191.png)

## Running the project locally

Simply run `npm install` the first time, then:

```
npm run dev
```

For the API call to work you need to export your API key as `SL_API_TOKEN` environment variable.

## Running the project using Docker

Create the docker image by running

```
docker build -t slchallenge .
```

Then run the image sending `SL_API_TOKEN` env variable
```
docker run -e SL_API_TOKEN=<token> -p 3000:3000 slchallenge
```
Your application will be running on http://localhost:3000