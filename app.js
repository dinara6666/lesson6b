const url = 'https://api.sampleapis.com/movies/'



const genres = ['animation', 'classic', 'comedy' , 'drama'  , 'horror' , 'family' , 'mystery' , 'scifi-fantasy' , 'western']

//Dom

const div = document.getElementById('buttons')
const movies = document.getElementById('movies')
let buttons;

div.innerHTML = genres.map(  (janr)  => {
    return `
    <button class="relative inline-flex items-center justify-center p-0.5 mb-2 me-2 overflow-hidden text-sm font-medium text-gray-900 rounded-lg group bg-gradient-to-br from-purple-600 to-blue-500 group-hover:from-purple-600 group-hover:to-blue-500 hover:text-white dark:text-white focus:ring-4 focus:outline-none focus:ring-blue-300 dark:focus:ring-blue-800">
<span class="relative px-5 py-2.5 transition-all ease-in duration-75 bg-white dark:bg-gray-900 rounded-md group-hover:bg-opacity-0">
 ${janr}
</span>
</button>`
}
).join(``)
//index = 0
buttons = div.querySelectorAll('button')

//dry - Don't Reaat Yourself

buttons.forEach((btn) => {
  btn.addEventListener('click' , () => {
    fetch(url + btn.innerText)
    .then( response => response.json() )
    .then( films => {
        //films = [{}, {}]
        movies.innerHTML = films.map(film => {

            return `
              <div class="xl:w-1/4 md:w-1/2 p-4">
                  <div class="bg-gray-100 p-6 rounded-lg">
                    <img class="h-63 rounded w-full object-cover object-center mb-6" src="${film.posterURL}" alt="content">
                   
                    <h2 class="text-lg text-gray-900 font-medium title-font mb-4">${film.title}</h2>
                    <p class="leading-relaxed text-base">
                    <a href= "https://www.imdb.com/title/${film.imdbId}">${film.imdbId}></a>
                    </p>
                  </div>
                  </div>
            `
    }).join('')
       
    })
  })
})







// git init
// 
//  README.md
// git commit -m  "first commit"
// git branch -M main
// git remote add origin https://github.com/dinara6666/lesson6b.git
// git push -u origin main