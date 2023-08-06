export declare const resolvers: {
    Query: {
        movie: (_: null, { id }: {
            id: number;
        }) => Promise<any>;
        movies: () => Promise<any>;
    };
};
