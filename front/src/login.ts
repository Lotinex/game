const loginBtn = document.getElementById("login") as HTMLInputElement

loginBtn.addEventListener('click', () => {
    const id = (document.getElementById("id") as HTMLInputElement).value
    const pw = (document.getElementById("password") as HTMLInputElement).value
    const data = { id, pw }
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type" : "application/json"
        },
        body: JSON.stringify(data)
    }).then(res => res.json()).then((data: {respone: string, redirectURL: string}) => {
        if(data.respone === "succeeded") {
            console.log("시발 왜 안되지")
            location.replace(data.redirectURL)
        } else {
            alert("faild login, check your Id and Password")
        }
    })
})