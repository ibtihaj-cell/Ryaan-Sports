var box = document.getElementById("box");

var users = [
  {
    userName: "cricket",
    link: "./styl.html",
    imageUrl: "imad.jpg",
  },
  {
    userName: "football",
    link: "./football.html",
    imageUrl: "ronaldo.jpg",
  },

  {
    userName: "recreation",
    link: "./rec.html",
    imageUrl: "c.jpg",
  },
];

for (var i = 0; i < users.length; i++) {
  box.innerHTML += `<div class="col-md-4 col-12">
    <div class="card">
    <div class="poster"><img src="${users[i].imageUrl}" alt="Location Unknown"></div>
    <div class="details">
        <h1>${users[i].userName}</h1>
        <a class='btn btn-danger' href='${users[i].link}'>READ MORE</a>
        <div class="rating">
</div>
</div>
        </div>
</div>`;
}
