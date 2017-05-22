document.addEventListener("DOMContentLoaded", function() {
    console.log("Movies script ready")
    function searchMovies(title) {
        console.log(movies)
        
    }

    var movies = [
        {
            title: "Rad",
            director: "Steeeeve",
            rating: "12",
            image: ""
        },
        {
            title: "Legally Blonde",
            director: "Captain America",
            rating: "1",
            image: ""
        },
        {
            title: "Pokemon #1",
            director: "Me",
            rating: "15",
            image: ""           
        },
    ];

    for (var i = 0; i < movies.length; i++) {
        console.log(movies[i])
        var listItem = document.createElement("li")
        listItem.innerText = movies[i].title

        console.log(listItem)

        var movieList = document.getElementById("movie-list")

        movieList.appendChild(listItem)
            
    }
    var searchInput = document.getElementById("movie-search-input")
    var searchButton = document.getElementById("movie-search-button")
    searchInput.addEventListener("keyup", function(event){
        if (event.keyCode === 13){
            console.log("Searching")
            searchMovies(event.target.value)
        }
 })
    searchButton.addEventListener("click", function(){
        console.log("Searching")
        searchMovies(searchInput.value)
})

})
