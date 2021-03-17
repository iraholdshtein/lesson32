$.ajax({
    method: 'GET',
    url:"http://www.omdbapi.com/?apikey=1c02a36c&t=",
}).done(function(response){
    console.log(response)
});
function render()
.catch(error)=>{
    console.log(error);
  });