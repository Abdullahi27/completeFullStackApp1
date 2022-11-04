let btn = document.querySelector("#btn")
let movieBtn = document.querySelector("#movieBtn")
let result = document.querySelector("#result")

let container = document.querySelector(".cardContainer")
movieBtn.addEventListener("click", getMovie)

function getMovie() {
  let search = document.querySelector("input")
  fetch(`https://www.omdbapi.com/?apikey=bfff9b39&s=${search.value}`)
    .then((response) => response.json())
    .then((data) => {
      console.log(data)
      result.innerHTML =
        `${data.Search
          .map(
            (item) =>
              `<div class="card">
            <img src="${item.Poster}"
                  class="card-img-top" alt="${item.Title}">
              <div class="card-body">
                  <h5 class="card-title">${item.Title}</h5>
                  <p class="card-text">${item.Year}</p>
                  <button class="add" data-imglink="${item.Poster}" data-name="${item.Title}">Bookmark Movie</button>
              </div>
          </div>`
          )
          .join("")}`


      let addbtn = document.getElementsByClassName("add");

      Array.from(addbtn).forEach(function (element) {
        element.addEventListener('click', function () {
          let name = element.dataset.name
          let imglink = element.dataset.imglink
          fetch('bookmark', {
            method: 'post',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              'name': name,
              'imglink': imglink
            })
          })
        })
      })

      document.querySelector("#remove").addEventListener('click', ()=> {
        document.querySelector('#result').innerHTML = ''
      })






  });
}

