// write js code here corresponding to favourites.html

var card = JSON.parse(localStorage.getItem("favourites")) || null

display(card)

function display(data) {

    // document.querySelector("tbody").innerHTML = ""

    data.forEach(function (elem, index) {
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
        favourites.innerText = "Delete"
        favourites.style.color = "red"
        favourites.style.cursor = "pointer"
        favourites.addEventListener("click", function () {
            interest(elem, index)
        })

        box.append(number, team1, team2, date, venue, favourites)

        document.querySelector("tbody").append(box)
    })

}



function interest(elem, index) {
    card.splice(index, 1)

    localStorage.setItem("favourites", JSON.stringify(card))
    window.location.reload()

}