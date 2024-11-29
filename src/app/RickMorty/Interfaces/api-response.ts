import { Character } from "./character";

export interface ApiResponse {
    info: { next: string; prev: string };
    results: Character[];
}