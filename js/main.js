import render from "./render.js"

let list = document.querySelector("#list")
async function getUsers() {
    let fetchUsers = await fetch("https://reqres.in/api/users")
    let data = (await fetchUsers.json()).data

    render(data, list)
}
getUsers()