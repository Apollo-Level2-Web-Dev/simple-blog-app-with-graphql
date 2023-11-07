import { Query } from "./Query/Query";
import { Mutation } from "./Mutation/Mutation";
import { Post } from "./post";
import { User } from "./user";
import { Profile } from "./profile";

export const resolvers = {
    Query,
    Post,
    User,
    Profile,
    Mutation
};