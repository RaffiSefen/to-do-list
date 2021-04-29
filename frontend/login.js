let form = document.querySelector("#form")
let emailInput = document.querySelector("#email")
let passwordInput = document.querySelector("#password")

let loginEndpoint = "http://localhost:3000/api/login"


form.addEventListener("submit", async (e) => {
    e.preventDefault()

    let email = emailInput.value
    let password = passwordInput.value

    await fetch(loginEndpoint, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify({ email, password })
    })
})

