
let trash = document.getElementsByClassName("delete");


Array.from(trash).forEach(function(element) {
      element.addEventListener('click', function(){
        const name = this.parentNode.childNodes[1].innerText
        fetch('delete', {
          method: 'delete',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            'name': name,
          })
        }).then(function (response) {
          window.location.reload()
        })
      });
});



let ratingInput = document.querySelectorAll("#ratings");
console.log(ratingInput)
Array.from(ratingInput).forEach(function (element) {
  element.addEventListener('change', function (e) {
  let rating = e.target.value
   const name = this.parentNode.childNodes[1].innerText
   console.log(name)
   fetch('rating', {
    method: 'put',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      'name': name,
      'rating': rating
    })
  })
  .then(function (response) {
    window.location.reload()
  })

   
    
  })
})