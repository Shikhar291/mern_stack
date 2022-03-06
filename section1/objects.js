let user=
{name:"James Holden",
email:"User@gmail.com",
password:"1234",
};
console.log(user.email);
user.name="abcd";
// console.log(user)

user['name']="James Holden";
// console.log(user);


movies=["abcd","bcda","abcdef"]
release=["2 sep 2021","24 oct 2021"]
actors=["123","1234","12345"]
movi={movies,release,actors};
console.log(movi);