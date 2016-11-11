console.log("Sanity Check: JS is working!");
var template;
var $dogsList;
var allDogs = [];

$(document).ready(function(){

  $dogsList = $('#dogTarget');

  // compile handlebars template
  var source = $('#dogs-template').html();
  template = Handlebars.compile(source);

  $.ajax({
    method: 'GET',
    url: '/api/Dogs',
    success: handleSuccess,
    error: handleError
  });


  $('#newDogForm').on('submit', function(e) {
    e.preventDefault();
    $.ajax({
      method: 'POST',
      url: '/api/Dogs',
      data: $(this).serialize(),
      success: newDogSuccess,
      error: newDogError
    });
  });
// your code

$booksList.on('click', '.deleteBtn', function() {
    $.ajax({
      method: 'DELETE',
      url: '/api/Dogs/'+$(this).attr('data-id'),
      success: deleteBookSuccess,
      error: deleteBookError
    });
  });

});


function render () {
  // empty existing posts from view
  $dogsList.empty();

  // pass `allBooks` into the template function
  var dogsHtml = template({ dogs: allDogs });

  // append html to the view
  $dogsList.append(dogsHtml);
};

function handleSuccess(json) {
  allDogs = json;
  render();
  console.log(allDogs);
}

function handleError(e) {
  console.log('uh oh');
  $('#dogTarget').text('Failed to load dogs, is the server working?');
}



function newDogSuccess(json) {
  $('#newBookForm input').val('');
  allDogs.push(json);

  // render();
}

function newDogError() {
console.log("there was an error");
}


function deleteBookSuccess(json) {
  var dog = json;
  var bookId = Dog._id;

  // find the book with the correct ID and remove it from our allBooks array
  for(var index = 0; index < allDogs.length; index++) {
    if(allDogs[index]._id === DogId) {
      allDogs.splice(index, 1);
      break;  // we found our book - no reason to keep searching (this is why we didn't use forEach)
    }
  }
  render();
}

function deleteBookError() {
console.log('error');
}
