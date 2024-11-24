export interface user {
    username: string;
    password: string;
}

let user1:user = {
    username: "admin",
    password: "admin"
}


export let allusers: user[] = [
   user1
];