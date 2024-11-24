function login() {
    let username = document.getElementById('username').value;
    let password = document.getElementById('password').value;

    if (username == "" || password == "") {
        document.getElementById('answer').innerHTML = `<h3>Please enter username and password</h3>`;
    } else {
        let user_data = {
            username: username,
            password: password
        };

        fetch("/auth-user", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(user_data)
        })
        .then(response => response.json())
        .then(data => {
            console.log(data);

            if (data.success) {
                window.location.href = "./html/home.html";
            } else {
                document.getElementById('answer').innerHTML = `<h3>Invalid login data. Please try again.</h3>`;
            }
        })
        .catch(error => {
            console.error('Fetch error:', error);
        });
    }
}