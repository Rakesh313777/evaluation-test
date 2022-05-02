// write js code here corresponding to index.html
// You should add submit event on the form


var formdata = JSON.parse(localStorage.getItem("schedule")) || null

var form = document.querySelector("#masaiForm")
form.addEventListener("submit", myfunction)

function myfunction() {
    event.preventDefault()

    var data = {
        number: matchNum.value,
        team1: teamA.value,
        team2: teamB.value,
        date: date.value,
        venue: venue.value
    }

    formdata.push(data)
    localStorage.setItem("schedule", JSON.stringify(formdata))
    window.location.href="matches.html"

}