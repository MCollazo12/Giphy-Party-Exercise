//Use ajax request to get data from giphy api
async function addGif(search) {
  let res = await axios.get('https://api.giphy.com/v1/gifs/search', {
    params: {
      q: search,
      api_key: 'hCBHph6uz8cl6eUJecpQu7veETqadSsl',
    },
  });

  //Store the get result in gifArr and find a random index within the array using Math.random()
  let gifArr = res.data.data;
  let ranIdx = Math.floor(Math.random() * gifArr.length);

  //Retrieve url from random index in the gif array and append the url to new img element in gif-container
  let gifUrl = gifArr[ranIdx].images.original.url;
  $('#gif-container').append($('<img>', { src: gifUrl }));
}

//Handle search form input -> pass value to addGif() -> clear input
$('#search-form').on('submit', (e) => {
  e.preventDefault();
  let input = $('#search-input').val();
  addGif(input);
  $('#search-input').val('');
});

//Remove all gifs from gif container on click
$('#remove-btn').on('click', () => {
  $('#gif-container').empty();
});
