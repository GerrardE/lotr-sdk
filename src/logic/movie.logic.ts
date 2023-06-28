import { IBase, IMovie } from "../domain/interfaces";
import getItem from "./base.logic";

/**
 * 
 * @param token 
 * @param url 
 * @returns Promise<IBase<IMovie[]>>
 */
export const getMovies = (): Promise<IBase<IMovie[]>>=> getItem("movie")

/**
 * 
 * @param id 
 * @param token 
 * @param url 
 * @returns Promise<IBase<IMovie[]>>
 */
export const getMovie = (id: string): Promise<IBase<IMovie[]>> => getItem(`movie/${id}`)

/**
 * 
 * @param id 
 * @param token 
 * @param url 
 * @returns Promise<IBase<IMovie[]>>
 */
export const getMovieQuotes = (id: string): Promise<IBase<IMovie[]>> => getItem(`movie/${id}/quote`)
