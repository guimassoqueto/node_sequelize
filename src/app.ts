// testing connection
import { testConn } from "./2testConnection/testConn";

testConn()
.then(status => console.log(status))
.catch(err => console.log(err));

// creating table
import { tblUser, UserModel } from "./3tablesModels/tblUser";
tblUser.sync().then(d => console.log(d)).catch(err => console.log(err))

// inserting data
// tblUser.create({
//     name: "bibaman"
// }).then(c => console.log()).catch(e => console.log())

// finding data
import { User } from "./crudData/insertData";

User.getUser(157)
.then((u) => {
    if (u) {
        const user = <UserModel>u;
        console.log(user);
    }
    else {
        console.log("not found");
    }
})
.catch(err => console.log(err))
