export interface ListResponse<T> extends Response {
    data: T[];
}