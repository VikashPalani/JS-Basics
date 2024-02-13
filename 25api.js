//API stands for Application Programming Interface.
//All browsers have a set of built-in Web APIs to support complex operations, and to help accessing data.
/* To use these APIs, you will have to download the code from the Web.

Examples:

YouTube API - Allows you to display videos on a web site.
Twitter API - Allows you to display Tweets on a web site.
Facebook API - Allows you to display Facebook info on a web site.

*/

// From https://api.chucknorris.io/ 
// We can retrieve a rando chuck joke in JSON format using the below API
// https://api.chucknorris.io/jokes/random

fetch("https://api.chucknorris.io/jokes/random")
    .then((Response) => {
        return Response.json();
    })

    .then ((data) => {
        var joke = data.value;
        console.log("JOKE:", joke);
    })

    .catch();
