export type Await<T> = T extends Promise<infer U> ? U : T;

export type DeepPartial<T> = {
    [P in keyof T]?: DeepPartial<T[P]>;
};
