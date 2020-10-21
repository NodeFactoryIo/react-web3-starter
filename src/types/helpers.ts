export type Await<T> = T extends {
    // TODO: remove at typescript version 4.x
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    then(onfulfilled?: (value: infer U) => unknown): unknown;
}
    ? U
    : T;
