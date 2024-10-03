var box = document.getElementById("box")


var users = [
    {
        userName: "The football match Brainy Bunch vs Agile Avengers will be held on September 23",
        imageUrl: "l.jpg"
    },
    {
        userName: "The football match Net Rippers vs Basket Hounds will be held on august 12",
        imageUrl: "l1.jpg"
    },
    {
        userName: "The basketball match Savage Squads vs Diamond Dynamos will be held on September 27",
        imageUrl: "l2.jpg"
    },

    {
        userName: "The cricket match Pakistan  vs Australia will be held on july 13",
        imageUrl: "w1.jpg",
    },
    {
        userName: "The cricket match Netherland vs Scotland will be held on june 6",
        imageUrl: "w2.jpg"
    },

    {
        userName: "The chess game GM Magnus Carlsen vs GM Fabiano Caruana will be held on September 9",
        imageUrl: "w3.jpg"
    },
    {
        userName: "The football match Real Madrid vs Barcelona will be held on September 13",
        imageUrl: "w4.jpg"
    },
    {
        userName: "The football match Thundering Titans vs Golden Eagles will be held on march 
        3",
        imageUrl: "w5.jpg"
    },


]

for (var i = 0; i < users.length; i++) {
    box.innerHTML += ` <div class=" col-lg-3 col-md-4 col-sm-6 col-12 ">
    
    <div class="card">
    <div class="poster"><img src="${users[i].imageUrl}" alt="Location Unknown"></div>
    <div class="details">
        <h1>${users[i].userName}</h1>
        <div class="rating">
</div>
        </div>
   
</div>`
}