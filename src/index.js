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
  movies.forEach(({title, rating, id}) => {
    console.log(`id#${id} - ${title} - rating: ${rating}`);
      // $.ajax("db.json")
      //     .done(function(data){
      //         console.log(data);
      for (var i = 0; i < movies.length; i++){
                  $('#insertProducts').html('<tr>' +
                      '<td scope="row">' + title + '</td>' +
                      '<td>' + rating + '</td>' +

                      // '<td>' + '$' + data.price + '</td>' +
                      // '<td>' + data[i].categories + '</td>' +
                      '</tr>)');
              }
          //
          //
          // });

  });
}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});
