import axios from "axios";
import { config } from "dotenv";
import { IBase } from "../domain/interfaces";

config()

/**
 * 
 * @param token 
 * @param url 
 * @param path
 * @returns Promise<IBase<[]>>
 */
export default (path: string = ""): Promise<IBase<[]>> => {
    const {
        ACCESS_TOKEN: token,
        API_URL: url
    } = process.env
    return new Promise(async (resolve, reject) => {
        try {
            const response = await axios.get(`${url}/${path}`, { headers: { Authorization: `Bearer ${token}` } })
            resolve(response.data)
        } catch (error: unknown) {
            if (error instanceof Error) {
                reject(new Error(JSON.stringify(error.message)));
            }
        }
    });
}
