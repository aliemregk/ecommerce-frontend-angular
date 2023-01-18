export interface SingleResponse<T> extends Response {
    data: T;
}