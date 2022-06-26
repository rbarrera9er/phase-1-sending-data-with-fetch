function submitData(name, email){
    return fetch('http://localhost:3000/users', {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
            "Accept": "application/json",
        },
        body: JSON.stringify({
            name: `${name}`,
            email: `${email}`,
        }),
    })
    .then(response => response.json())
    .then(obj => document.body.innerHTML = obj.id)
    .catch(function (error){
        console.log(error.message)
        document.body.innerHTML = error.message;
    })
}


