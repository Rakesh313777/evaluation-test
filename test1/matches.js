// write js code here corresponding to matches.html

var formdata = JSON.parse(localStorage.getItem("schedule")) || null

var card = JSON.parse(localStorage.getItem("favourites")) || []


display(formdata)

function display(data) {

    document.querySelector(".heading").innerHTML = ""

    data.forEach(function (elem) {
        var box = document.createElement("tr")

        var number = document.createElement("td")
        number.innerText = elem.number

        var team1 = document.createElement("td")
        team1.innerText = elem.team1

        var team2 = document.createElement("td")
        team2.innerText = elem.team2

        var date = document.createElement("td")
        date.innerText = elem.date

        var venue = document.createElement("td")
        venue.innerText = elem.venue

        var favourites = document.createElement("td")
        favourites.innerText = "Add favourite"
        favourites.style.color = "green"
        favourites.addEventListener("click", function () {
            interest(elem)
        })

        box.append(number, team1, team2, date, venue, favourites)

        document.querySelector("tbody").append(box)
    })

}



function interest(elem) {

    card.push(elem)
    localStorage.setItem("favourites", JSON.stringify(card))

    window.location.href = "favourites.html"
}


// filter---->

var filter = document.querySelector("#filterVenue")
filter.addEventListener("change", function () {

    if (filter.value == "none") {
        display(formdata)
    }
    else {
        var filtered = formdata.filter(function (element) {
            return element.venue == filter.value
        })
        // console.log(filtered)
        display(filtered);
    }
})





