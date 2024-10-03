var box = document.getElementById("box")


var users = [
    {
        userName: "Brainy Bunch       vs     Agile Avengers",
        data: "Brainy Bunch beats Agile Avengers 4-2",
        imageUrl: "l.jpg"
    },
    {
        userName: "Savage Squads      vs     Diamond Dynamos ",
        data: "Savage Squads beats Diamond Dynamos 5-1",
        imageUrl: "l1.jpg"
    },
    {
        userName: "Net Rippers     vs     Basket Hounds",
        data: "Net Rippers beat Basket Hounds 36-33",
        imageUrl: "l2.jpg"
    },

    {
        userName: "Pakistan    vs  Australia",
        data: "Pakistan  beats Australia by 2 wickets",
        imageUrl: "w1.jpg",
    },
    {
        userName: "Netherland    vs  Scotland",
        data: "Netherland beats Scotland by 23 run ",
        imageUrl: "w2.jpg"
    },
    
    {
        userName: "GM Magnus Carlsen      vs    GM Fabiano Caruana",
        data: "GM Magnus Carlsen beats GM Fabiano Caruana by 3 points",
        imageUrl: "w3.jpg"
    },
    {
        userName: "Real Madrid      vs   Barcelona",
        data: " Real Madrid beats Barcelona 5-1",
        imageUrl: "w4.jpg"
    },
    {
        userName: "Thundering Titans    vs    Golden Eagles FC",
        data: " Thundering Titans beats Golden Eagles FC 6-1",
        imageUrl: "w5.jpg"
    },

 
]

for (var i = 0; i < users.length; i++) {
    box.innerHTML += ` <div class=" col-lg-3 col-md-4 col-sm-6 col-12 ">
    
    <div class="card">
    <div class="poster"><img src="${users[i].imageUrl}" alt="Location Unknown"></div>
    <div class="details">
        <h1>${users[i].userName}</h1>
        <h2>${users[i].data}</h2>
        <div class="rating">
</div>
        </div>
   
</div>`
}