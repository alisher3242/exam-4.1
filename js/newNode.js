export default function({ avatar, id, email, first_name, last_name }) {
    let template = document.querySelector("#template")
    let newTemp = template.content.cloneNode(true)

    newTemp.querySelector(".avatar").src = avatar
    newTemp.querySelector(".email").textContent = email
    newTemp.querySelector(".fullname").textContent = `${first_name} ${last_name}`
    newTemp.querySelector("#id").href = id

    return newTemp;
}