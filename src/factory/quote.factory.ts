import { faker } from '@faker-js/faker';
import { IQuote } from "../domain/interfaces";

export const createQuote = (quote?: IQuote): IQuote => {
    return {
        _id: quote?._id || faker.string.uuid(),
        dialog: quote?.dialog || faker.word.sample(),
        movie: quote?.movie || faker.word.sample(),
        character: quote?.character || faker.word.sample(),
        id: quote?.id || faker.string.uuid()
    };
}

export const createQuotes = (quote?: IQuote, count: number = 5): IQuote[] => {
    const quotes: IQuote[] = [];

    while(count>0){
        quotes.push({
            _id: quote?._id || faker.string.uuid(),
            dialog: quote?.dialog || faker.word.sample(),
            movie: quote?.movie || faker.word.sample(),
            character: quote?.character || faker.word.sample(),
            id: quote?.id || faker.string.uuid()
        })
        count--;
    }

    return quotes;
}
