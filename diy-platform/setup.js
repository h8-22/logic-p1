const fs = require("fs");
const pool = require('./connection')

const authorsJSON = JSON.parse(fs.readFileSync("./data/authors.json", "utf-8"))
const postsJSON = JSON.parse(fs.readFileSync("./data/posts.json", "utf-8"))
// console.log(authorsJSON);
// console.log(postsJSON);

let authorQuery =
    `CREATE TABLE "Authors" (
    "id" SERIAL PRIMARY KEY,
    "fullName" VARCHAR(120) NOT NULL,
    "gender" VARCHAR(6) NOT NULL
    )`
let postQuery =
    `CREATE TABLE IF NOT EXISTS "Posts" (
    "id" SERIAL PRIMARY KEY,
    "title" VARCHAR(100),
    "difficulty" VARCHAR(6),
    "estimatedTime" INTEGER,
    "description" TEXT,
    "totalVote" INTEGER,
    "imageUrl" VARCHAR(100),
    "createdDate" DATE,
    "AuthorId" INTEGER REFERENCES "Authors"("id")`

pool.query(authorQuery, (err, res) => {
    if (err) console.log(err);
    else {
        console.log("SUCCESS", res)
    }
})
// `
//     CREATE TABLE IF NOT EXISTS "Posts" (
//     "id" SERIAL PRIMARY KEY,
//     "title" VARCHAR(100),
//     "difficulty" VARCHAR(6),
//     "estimatedTime" INT,
//     "description" TEXT, 
//     "totalVote" INT,
//     "createdDate" DATE,
//     "AuthorId" INT REFERENCES "Authors" ("id") 
//     );
// `
pool.query(postQuery, (err, res) => {
    if (err) console.log(err);
    else {
        console.log("SUCCESS", res);
    }
})