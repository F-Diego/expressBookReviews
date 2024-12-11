const express = require('express');
let books = require("./booksdb.js");
let isValid = require("./auth_users.js").isValid;
let users = require("./auth_users.js").users;
const public_users = express.Router();
let fs = require('fs');

public_users.post("/register", (req,res) => {
  //Write your code here
  const username = req.body.username;
  const password = req.body.password;
  // Check if both username and password are provided
  if (username && password) {
    // Check if the user does not already exist
    if (!doesExist(username)) {
      // Add the new user to the users array
      users.push({"username": username, "password": password});
      return res.status(200).json({message: "User successfully registered. Now you can login"});
    } else {
      return res.status(404).json({message: "User already exists!"});
    }
  }
  // Return error if username or password is missing
  return res.status(404).json({message: "Unable to register user."});
  //return res.status(300).json({message: "Yet to be implemented"});
});

let filename1 = "booksdb.js";

//funcion para leer el archivo sincronicamente
function readFile1 (filename1) {
    //leyendo el archivo, y bloqueando el resto de la ejecucion
    let data = fs.readFileSync (filename1);
    console.log("\n\nEl contenido del archivo es \n\n" + data);
}

//mensaje que muestra el contenido del archivo
console.log('Lista de libros');
readFile1(filename1);
console.log('Lectura terminada');

/*
// Get the book list available in the shop
public_users.get('/',function (req, res) {
  //Write your code here
  res.send(JSON.stringify(books,null,4));
  //return res.status(300).json({message: "Yet to be implemented"});
});
*/

//funcion para leer el archivo sincronicamente
//para mostrar segun isbn
function readFile2 (filename1) {
    //leyendo el archivo, y bloqueando el resto de la ejecucion
    let data = fs.readFileSync (filename1[isbn]);
    console.log("\n\nEl contenido del archivo es \n\n" + data);
}

//mensaje que muestra el contenido del archivo
console.log('Lista de libros segun isbn');
readFile2(filename1);
console.log('Lectura terminada');


/*
// Get book details based on ISBN
public_users.get('/isbn/:isbn',function (req, res) {
  //Write your code here
  const isbn = req.params.isbn;
  res.send(books[isbn]);
  //return res.status(300).json({message: "Yet to be implemented"});
 });
 */

 /*
// Get book details based on author
public_users.get('/author/:author',function (req, res) {
  //Write your code here
  const author = req.params.author;
  res.send(books[author]);
  //return res.status(300).json({message: "Yet to be implemented"});
});
*/

//funcion para leer el archivo sincronicamente
//para mostrar segun author
function readFile3 (filename1) {
    //leyendo el archivo, y bloqueando el resto de la ejecucion
    let data = fs.readFileSync (filename1[author]);
    console.log("\n\nEl contenido del archivo es \n\n" + data);
}

//mensaje que muestra el contenido del archivo
console.log('Lista de libros segun author');
readFile3(filename1);
console.log('Lectura terminada');

/*
// Get all books based on title
public_users.get('/title/:title',function (req, res) {
  //Write your code here
  const title = req.params.title;
  res.send(books[title]);
  return res.status(300).json({message: "Yet to be implemented"});
});
*/

//funcion para leer el archivo sincronicamente
//para mostrar segun author
function readFile4 (filename1) {
    //leyendo el archivo, y bloqueando el resto de la ejecucion
    let data = fs.readFileSync (filename1[title]);
    console.log("\n\nEl contenido del archivo es \n\n" + data);
}

//mensaje que muestra el contenido del archivo
console.log('Lista de libros segun author');
readFile4(filename1);
console.log('Lectura terminada');

//  Get book review
public_users.get('/review/:review',function (req, res) {
  //Write your code here
  const review = req.params.review;
  res.send(books[review]);
  //return res.status(300).json({message: "Yet to be implemented"});
});

module.exports.general = public_users;
