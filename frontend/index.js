let form = document.querySelector("#form")
let newDiv = document.querySelector("#new-div")
let items = []

let postEndpoint = "http://localhost:3000/api/new/item"
let getEndpoint = "http://localhost:3000/api/all/items"


const getData = async () => {
    let res = await fetch(getEndpoint);
    console.log('res', res)
    let data = await res.json();
    console.log('data', data)
    items = data
    return items
}

setTimeout(async () => {
    await displayData()
}, 1000);

const displayData = async () => {
    let toDoList = await getData();

    items.map((item) => {
        console.log('item', item)

        let newP = document.createElement("p")

        newP.innerHTML = item.name + "   " + item.time

        newDiv.appendChild(newP)
    })
}











form.addEventListener("submit", async (e) => {
    e.preventDefault()
    console.log('Form submitted')
    let name = document.querySelector("#name").value
    let hour = document.querySelector("#hour").value
    let minute = document.querySelector("#minute").value
    console.log('minute', minute)
    let time = hour + ":" + minute

    await fetch(postEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, time })
    })
})