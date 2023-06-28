import axios from "axios";
import { expect } from "chai";
import { config } from "dotenv";
import MockAdapter from "axios-mock-adapter";
import { getMovies, getMovie, getMovieQuotes } from "../../../src/logic/movie.logic";
import { createMovies, createMovie } from "../../../src/factory/movie.factory"
import { IMovie } from "../../../src/domain/interfaces";

config();

describe("MOVIE TESTS >> :", () => {
  let mock: MockAdapter;
  let movie: IMovie[];
  let movee: IMovie;
  // const token: string = `Bearer ${process.env.ACCESS_TOKEN}`;
  // const url: string = process.env.API_URL || "";
  
  beforeAll(async() => {
    mock = new MockAdapter(axios.create());
    movie = await createMovies();
    movee = await createMovie();
  });

  it("getMovies: should get movies successfully", async () => {
    mock.onGet(`/movie`, {}, { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }).reply(200, { docs: movie});
    const movies = await getMovies();
    
    expect(movies.docs).to.be.an("array");
  });

  it("getMovie: should get movie successfully", async () => {
    mock.onGet(`/movie/5cd95395de30eff6ebccde5c`, {}, { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }).replyOnce(200, { docs: movee });
    const movies = await getMovie("5cd95395de30eff6ebccde5c");
    
    expect(movies.docs[0]).to.include({ _id: "5cd95395de30eff6ebccde5c"});
  });

  it("getMovieQuotes: should get movie quotes successfully", async () => {
    mock.onGet(`/movie/5cd95395de30eff6ebccde5c/quote`, {}, { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }).replyOnce(200, { docs: movee });
    const movies = await getMovieQuotes("5cd95395de30eff6ebccde5c");
    
    expect(movies.docs).to.be.an("array");
  });

  afterAll(async() => {
    mock.reset()
  });
});
