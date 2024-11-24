export interface user {
    username: string;
    password: string;
}

let user1:user = {
    username: "admin",
    password: "admin"
}

let user2:user = {
    username: "viki",
    password: "rose"
}


let user3:user = {
    username: "huemer",
    password: "sytIstToll"
}

let user4:user ={
    username: "Gerald",
    password: "PapaSchlumpf"
}

export let allusers: user[] = [
   user1,
   user2,
   user3,
   user4
];