import axios from "axios";
import { expect } from "chai";
import { config } from "dotenv";
import MockAdapter from "axios-mock-adapter";
import { 
    getQuotes,
    getQuote 
} from "../../../src/logic/quote.logic";
import { 
    createQuotes, 
    createQuote 
} from "../../../src/factory/quote.factory"
import { IQuote } from "../../../src/domain/interfaces";

config();

describe("QUOTE TESTS >> :", () => {
  let mock: MockAdapter;
  let quote: IQuote[];
  let quotee: IQuote;
  // const token: string = `Bearer ${process.env.ACCESS_TOKEN}`;
  // const url: string = process.env.API_URL || "";
  
  beforeAll(async() => {
    mock = new MockAdapter(axios.create());
    quote = await createQuotes();
    quotee = await createQuote();
  });

  it("getQuotes: should get Quotes successfully", async () => {
    mock.onGet(`/quote`, {}, { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }).reply(200, { docs: quote});
    const resp = await getQuotes();
    
    expect(resp.docs).to.be.an("array");
  });

  it("getQuote: should get quote successfully", async () => {
    mock.onGet(`/quote/5cd96e05de30eff6ebccebbc`, {}, { 'Authorization': `Bearer ${process.env.ACCESS_TOKEN}` }).replyOnce(200, { docs: quotee });
    const resp = await getQuote("5cd96e05de30eff6ebccebbc");
    
    expect(resp.docs[0]).to.include({ _id: "5cd96e05de30eff6ebccebbc"});
  });

  afterAll(async() => {
    mock.reset()
  });
});
