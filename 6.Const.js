// const


const PI = 3.14159;

let radius;
let circumference;

document.getElementById("button").onclick = function(){
    radius=document.getElementById("text").value;

    radius = Number(radius);

    circumference = 2 * PI * radius;

    document.getElementById("h").textContent = circumference;


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
//     <h1>Enter The Radius of a Circle:</h1>
//     <label for="">Radius:</label>
//     <input type="text" id="text">
//     <button id="button">Submit</button>
//     <h3 id="h"></h3>
//     <script src="/script.js"></script>
// </body>
// </html>
