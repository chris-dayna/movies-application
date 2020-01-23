


const $ = require('jquery');

/**
 * es6 modules and imports
 */
import sayHello from './hello';
sayHello('World');

/**
 * require style imports
 */



const {getMovies} = require('./api.js');

getMovies().then((movies) => {
  console.log('Here are all the movies:');
  movies.forEach(({title, rating, year, genre, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
                  $('#insertProducts').append(`<tr>
                      <td scope="row"> ${id} </td>
                      <td>${title}</td>
                      <td> ${rating} </td>
                      <td> ${year}</td>
                      <td> ${genre}</td>
                      </tr>`);
  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});

$('#insertProducts').on("load", function() {
  $("#loading").hide();
});

