import { tblUser, UserModel } from "../3tablesModels/tblUser";

class User {
    static async getUser(id: number): Promise<UserModel | null> {
        try {
            const user = await tblUser.findByPk(id);
            return user
        }
        catch (error) {
            return null;
        }
    }
}

export { User };