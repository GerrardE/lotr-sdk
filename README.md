# Lord of the Rings SDK
[![codecov](https://codecov.io/gh/GerrardE/lotr-sdk/branch/main/graph/badge.svg?token=SLTR5I06N9)](https://codecov.io/gh/GerrardE/lotr-sdk)
![ci](https://github.com/lotr/lotr/actions/workflows/ci.yml/badge.svg)
![cd](https://github.com/lotr/lotr/actions/workflows/cd.yml/badge.svg)

## Getting Started

This repo contains a simple sdk for the Lord Of The Rings Api. 

It is integrated with Github Actions.

## Required Technologies

This application makes use of the following technologies:

- [Typescript](https://www.typescriptlang.org/) for Javascript type safety
- [Node](https://nodejs.org/) for creating the APIs
- [Github Actions](https://github.com/features/actions) for continuous integration and delivery

## Installation

### 1. Installation Steps

These instructions assumes that you have a working installation of `git` and `nodejs`. See the instructions for installation:

- [Git](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git) 
- [Node](https://nodejs.org/en/download/)

Provision the necessary services needed for running the sdk locally:

1. Run `npm install llotr-sdk`
1. Setup your environment variables for `ACCESS_TOKEN` & `API_URL` in a `.env` file at the root of your project.
1. The sdk can be used in the following format:

   ```
   const { 
        getMovies, 
        getMovie, 
        getMovieQuotes,
        getQuote,
        getQuotes 
    } = require('llotr-sdk');

   // Fetch a movie item given an id
   const movie = getMovie(id);

   // Fetch movie items
   const movies = getMovies();

   // Fetch movie quote items given an id
   const movieQuotes = getMovieQuotes(id);

   // Fetch a quote item given an id
   const quote = getQuote(id);

   // Fetch a quotes
   const quotes = getQuotes();
   ```
