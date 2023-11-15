export const Profile = {
    user: async (parent: any, args: any, { prisma, userInfo }: any) => {
        return await prisma.user.findUnique({
            where: {
                id: parent.userId
            }
        })
    }
}