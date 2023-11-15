import { User } from "@prisma/client";
import { prisma } from "..";
import DataLoader from "dataloader";

const batchUsers = async (ids: number[]): Promise<User[]> => {
    // ids: [10, 11, 12, 13]
    console.log(ids);
    const users = await prisma.user.findMany({
        where: {
            id: {
                in: ids
            }
        }
    });

    console.log("users: ", users);

    /*
    {
        1: {id: 1, name: fahim}
        2: {id: 2, name: fahim}
        4: {id: 4, name: fahim}
        10: {id: 10, name: fahim}
        3: {id: 3, name: fahim}
    }
    */
    const userData: { [key: string]: User } = {};

    users.forEach((user) => {
        userData[user.id] = user;
    });
    console.log(userData)

    return ids.map((id) => userData[id]);
};

//@ts-ignore
export const userLoader = new DataLoader<number, User>(batchUsers);