export interface Meta {
    deleted: boolean,
    id: number,
    type: string
}

export interface Query<T> {
    row: T[],
    meta: Meta[]
}