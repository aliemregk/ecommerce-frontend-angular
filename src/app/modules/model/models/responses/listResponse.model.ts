import { Response } from "./response.model";

export interface ListResponse<T> extends Response {
    data: T[];
}