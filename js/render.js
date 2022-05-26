import newNode from "./newNode.js";

export default function(data, list) {
    let frg = document.createDocumentFragment()
    data.forEach(user => {
        let newUser = newNode(user)
        frg.append(newUser)
    });

    list.append(frg)
}