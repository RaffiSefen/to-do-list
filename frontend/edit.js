let browserUrl = new URL(document.URL)
let browserId = browserUrl.searchParams.getAll("id")[0]

let getData = async () => {
    let res = await fetch(`http://localhost:3000/api/item/${browserId}`)
    let foundedItem = await res.json()
    return foundedItem
}

let form = document.querySelector("#form")

let nameInput = document.querySelector("#name")
let hourInput = document.querySelector("#hour")
let minuteInput = document.querySelector("#minute")

let putEndpoint = "http://localhost:3000/api/update/item/"



form.addEventListener("submit", async (e) => {
    e.preventDefault();
    let data = await getData()

    let name = nameInput.value
    let time = hourInput.value + " : " + minuteInput.value
    console.log(hourInput)

    console.log('form submitted')
    await fetch(`${putEndpoint}${browserId}`, {
        method: "PUT",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ name, time })
    })
})