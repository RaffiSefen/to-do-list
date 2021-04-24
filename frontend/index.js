let form = document.querySelector("#form")
let newDiv = document.querySelector("#new-div")
let items = []

let postEndpoint = "http://localhost:3000/api/new/item"
let getEndpoint = "http://localhost:3000/api/all/items"
let deleteEndpoint = "http://localhost:3000/api/delete/item/"

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
        let deleteBtn = document.createElement("a")
        let updateBtn = document.createElement("a")


        newP.setAttribute("class", "text-success")
        deleteBtn.setAttribute("class", "btn btn-outline-danger")
        deleteBtn.setAttribute("href", "index.html")
        updateBtn.setAttribute("class", "btn btn-outline-warning")
        updateBtn.setAttribute("href", `edit.html?id=${item._id}`)

        newP.innerHTML = item.name + "   " + item.time
        deleteBtn.innerHTML = "X"
        updateBtn.innerHTML = "Update"


        newDiv.appendChild(newP)
        newDiv.appendChild(deleteBtn)
        newDiv.appendChild(updateBtn)

        deleteBtn.addEventListener("click", async () => {
            await fetch(`${deleteEndpoint}${item._id}`, {
                method: "DELETE",
                headers: {
                    "Content-Type": "application/json"
                }
            })
            console.log('item has been deleted')
        })
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