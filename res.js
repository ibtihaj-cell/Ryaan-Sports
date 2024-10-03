var box = document.getElementById("box")


var users = [
    {

        userName: "Hiking ",

        imageUrl: "h.jpg"
    },
    {
        userName: "Hunting ",

        imageUrl: "h1.jpg"
    },
    {
        userName: "Rafting",

        imageUrl: "h2.jpg"
    },

    {
        userName: "Air Sports",

        imageUrl: "h3.jpg",
    },
    {
        userName: "Rock Climbing",

        imageUrl: "h4.jpg"
    },
    {
        userName: "Horseback Riding",

        imageUrl: "h5.jpg"
    },

    {
        userName: "Snowboarding",

        imageUrl: "h6.jpg"
    },
    {
        userName: "Diving",

        imageUrl: "h7.jpg"
    },
    {
        userName: "Yoga",

        imageUrl: "h8.jpg"
    },

    {
        userName: "Photography",

        imageUrl: "h9.jpg"
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