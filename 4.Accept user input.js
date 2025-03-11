// How to accept user input

// 1.Easy way = Window prompt --------------------------------

let username;

username = window.prompt("Enter your name");

console.log(username);




// 2.Professional way = HTML TextBox --------------------------------




let username;

document.getElementById("login").onclick = function(){
    username = document.getElementById("username").value;
    document.getElementById("welcome").textContent = "Welcome " + username;
}

// <!DOCTYPE html>
// <html lang="en">
// <head>
//     <meta charset="UTF-8">
//     <meta name="viewport" content="width=device-width, initial-scale=1.0">
//     <link rel="stylesheet" href"/style.css">
//     <title>Document</title>
// </head>
// <body>
//     <h1 id="welcome">Welcome</h1>
//     <label for="username">Username:</label>
//     <input type="text" id="username"><br><br>
//     <button id="login">Login</button>
//     <script src="/script.js"></script>
// </body>
// </html>
