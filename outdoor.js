var box = document.getElementById("box")


var users = [
    {

        userName: "Cricket ",

        imageUrl: "s.jpg"
    },
    {
        userName: "Volley Ball ",

        imageUrl: "s1.jpg"
    },
    {
        userName: "Basketball",

        imageUrl: "s2.jpg"
    },

    {
        userName: "Table Tennis",

        imageUrl: "s3.jpg",
    },
    {
        userName: "Football",

        imageUrl: "s4.jpg"
    },
    {
        userName: "Ice Hockey",

        imageUrl: "s5.jpg"
    },

    {
        userName: "Badminton",

        imageUrl: "s6.jpg"
    },
    {
        userName: "Tennis",

        imageUrl: "s7.jpg"
    },
    {
        userName: "Golf",

        imageUrl: "s8.jpg"
    },

    {
        userName: "Rugby",

        imageUrl: "s9.jpg"
    }
]

for (var i = 0; i < users.length; i++) {
    box.innerHTML += ` <div class=" col-lg-3 col-md-4 col-sm-6 col-12 ">
    <div class="col">
    <div class="card">
    <div class="poster"><img  src="${users[i].imageUrl}" alt="Location Unknown"></div>
    <div class="details">
        <h1>${users[i].userName}</h1>
        <div class="rating">
</div>
        </div>
    </div>
</div>`
}