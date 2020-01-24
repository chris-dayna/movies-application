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
                      <td> ${genre}</td>
                      <td> ${year}</td>
                      </tr>`);
  });


}).catch((error) => {
  alert('Oh no! Something went wrong.\nCheck the console for details.');
  console.log(error);
});


$('#newMovieButton').click(function(event) {
    event.preventDefault();
  const movieName = $('#movieNameInput').val();
  const movieRating =$('#selectRatingInput').val();
  // var formData = JSON.stringify(movieName + movieRating).serializeArray();
    $('#insertProducts').empty();


  $.ajax("/api/movies", {
    type: "POST",
    data: {
      title: movieName,
      rating: movieRating
    }
  });

    getMovies().then((movies) => {
        console.log('Here are all the movies:');
        movies.forEach(({title, rating, year, genre, id}) => {
            console.log(`id#${id} - ${title} - rating: ${rating}`);
            $('#insertProducts').append(`<tr>
                      <td scope="row"> ${id} </td>
                      <td>${title}</td>
                      <td> ${rating} </td>
                      <td> ${genre}</td>
                      <td> ${year}</td>
                      <td></td>
                      </tr>`);
        });


    }).catch((error) => {
        alert('Oh no! Something went wrong.\nCheck the console for details.');
        console.log(error);
    });

});


//edit json

$('.editMovieButton').click(function(){
    const movieID = $('#editMovieID').val();
    const newName = $('#editMovieName').val();
    const newRating = $('#editRatingInput').val();

    if(movieID == movies.id)
        $.ajax("/api/movies", {
            type: "PUT",
            data: {
                title: newName,
                rating: newRating
            }
        });


});



