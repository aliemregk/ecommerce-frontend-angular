import { Response } from "./response.model";

export interface SingleResponse<T> extends Response {
    data: T;
}