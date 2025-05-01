import axios from "axios";
import type { Livro } from "./types";

const apiUrl = import.meta.env.VITE_API_URL;

export const getAllBook = () => {
  return axios.get<Livro[]>(`${apiUrl}/livro`);
};
