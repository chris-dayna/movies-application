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
  const movieRating = $('#selectRatingInput').val();
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
    const movieID = $('#editMovieID');
    const newName = $('#editMovieName');
    const newGenre = $('#editMovieGenre');
    const newYear = $('#editMovieYear')
    const newRating = $('#editRatingInput');
    const moviePost = {id: movieID.val(), title: newName.val(), rating: newRating.val(), genre: newGenre.val(), year: newYear.val()};
    console.log(moviePost);
    const url = '/api/movies/' + movieID.val();
    const options = {
        method: 'PUT',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(moviePost),
    };
        fetch(url, options).then(response => response.json());
        });


// delete
$('.deleteMovieButton').click(function(){
    const deleteMovieID = $('#deleteMovieID');
    const url = '/api/movies/' + deleteMovieID.val();
    const options = {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json',
        },
    };
    fetch(url, options).then(response => response.json());;
});



