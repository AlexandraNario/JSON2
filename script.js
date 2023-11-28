/*Objective: In this exercise, you'll work with a JavaScript object and
use the JSON.stringify() method to convert it into JSON dummy data*/

//Create a JavaScript file named stringifyJsonExercise.js to write your code.
//Use JSON.stringify() to convert the dataObject into a JSON string.
//Log the resulting JSON string to the console.
// Sample JavaScrip Object

const dataObject = {

    user: {

        id: 1,

        name: "John Doe",

        email: "john@example.com",

        address: {

            city: "New York",

            zipcode: "10001"

        }

    },

    product: {

        id: 101,

        name: "Laptop",

        price: 999.99

    }

};

const dataString = JSON.stringify(dataObject);

console.log(dataString);
//{"user":{"id":1,"name":"John Doe","email":"john@example.com","address":{"city":"New York","zipcode":"10001"}},"product":{"id":101,"name":"Laptop","price":999.99}}
//thats the output for our stringify data
//usually the server will store a stringify version of your data
//the other version is more readable however