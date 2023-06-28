import { faker } from "@faker-js/faker";
import { IMovie } from "../domain/interfaces";

export const createMovie = (movie?: IMovie): IMovie => {
    return {
        _id: movie?._id || faker.string.uuid(),
        name: movie?.name || faker.string.alpha(5),
        runtimeInMinutes: movie?.runtimeInMinutes || faker.number.int(),
        budgetInMillions: movie?.budgetInMillions || faker.number.int(),
        boxOfficeRevenueInMillions: movie?.boxOfficeRevenueInMillions || faker.number.int(),
        academyAwardNominations: movie?.academyAwardNominations || faker.number.int(),
        academyAwardWins: movie?.academyAwardWins || faker.number.int(),
        rottenTomatoesScore: movie?.rottenTomatoesScore || faker.number.int()
    };
}

export const createMovies = (movie?: IMovie, count: number = 5): IMovie[] => {
    const movies: IMovie[] = []
    while(count > 0) {
        movies.push({
            _id: movie?._id || faker.string.uuid(),
            name: movie?.name || faker.string.alpha(5),
            runtimeInMinutes: movie?.runtimeInMinutes || faker.number.int(),
            budgetInMillions: movie?.budgetInMillions || faker.number.int(),
            boxOfficeRevenueInMillions: movie?.boxOfficeRevenueInMillions || faker.number.int(),
            academyAwardNominations: movie?.academyAwardNominations || faker.number.int(),
            academyAwardWins: movie?.academyAwardWins || faker.number.int(),
            rottenTomatoesScore: movie?.rottenTomatoesScore || faker.number.int()
        });
        count--;
    }
    return movies;
}
