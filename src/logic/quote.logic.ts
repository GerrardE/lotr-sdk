import { IBase, IQuote } from "../domain/interfaces";
import getItem from "./base.logic";

export const getQuotes = (): Promise<IBase<IQuote[]>>=>  getItem("quote");

export const getQuote = (id: string): Promise<IBase<IQuote[]>>=> getItem(`quote/${id}`);
