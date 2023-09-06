"use strict";
const userList = [
    {
        fullName: "nastaran yari",
        age: 20,
        job: "student",
        maritalStatus: "single",
        gender: "female",
        yourHeight: 163,
        yourWeight: 55,
        id: "n1s2t4njk",
    },
    {
        fullName: "ali maleki",
        age: 32,
        job: "free",
        maritalStatus: "married",
        gender: "male",
        yoreNumber: 9178562587,
        id: "1458mrkdh",
    },
    {
        fullName: "nasim ahmadi",
        age: 25,
        gender: "female",
        id: "nasim14587"
    }
];
console.log(userList);
const addList = (user) => {
    userList.push(user);
};
addList({
    fullName: "mohammad taheri",
    age: 15,
    maritalStatus: "single",
    gender: "male",
    yourHeight: 145,
    yoreNumber: 9352874589,
    id: "lwuudm145",
});
console.log(userList);
const editUser = (id, user) => {
    const userIndex = userList.findIndex((item) => item.id === id);
    userList[userIndex] = user;
};
editUser("1458mrkdh", {
    fullName: "ali maleki",
    age: 35,
    job: "electrician",
    maritalStatus: "single",
    gender: "male",
    yoreNumber: 9178562587,
    id: "1458mrkdh",
});
console.log(userList);
const delitUser = (id) => {
    const delitUser = userList.filter((item) => item.id !== id);
    return delitUser;
};
console.log(delitUser("nasim14587"));
