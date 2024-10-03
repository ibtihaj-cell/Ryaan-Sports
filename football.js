var box = document.getElementById("box")


var users = [
    {
        userName: "Cristiano Ronaldo ",
        data: "He was born on February 5, 1985, on the island of Madeira. Ronaldo began his professional career at Sporting CP before moving to Manchester United in 2003. He has won numerous awards. Ronaldo is known for his incredible speed, agility, and goal-scoring ability.",
        imageUrl: "p.jpg"
    },
    {
        userName: "Lionel Andrés Messi ",
        data: "Messi is considered by many to be the greatest player ever to play the sport. His achievements include winning four FIFA World Player of the Year awards, two UEFA Champions League titles, three UEFA Super Cups, an Olympic gold medal, and a Ballon d'Or award. He won the FIFA World Player of the Year award in 2007.",
        imageUrl: "p1.jpg"
    },
    {
        userName: "Kylian Mbappe Lottin",
        data: "Kylian Mbappe was born 20 December 1998 is a French professional footballer. He plays as a forward for Paris Saint-Germain and the France national team. At the age of 19, he has been marked the best young player in the world. ",
        imageUrl: "p2.jpg"
    },

    {
        userName: "Neymar da Silva Santos Júnior",
        data: "A prolific goalscorer and playmaker, he is widely regarded as one of the best players in the world as well as one of the greatest Brazilian footballers of all time. Neymar has scored at least 100 goals for three different clubs, making him one of four players to achieve this feat. ",
        imageUrl: "p3.jpg",
    },
    {
        userName: "Luka Modrić",
        data: "He is widely regarded as one of the greatest midfielders of all time, and as the greatest Croatian footballer ever. Modrić began his professional career with Croatian club Dinamo Zagreb in 2003 before spells on loan to Bosnian side Zrinjski Mostar and Croatian side Inter Zaprešić.",
        imageUrl: "p4.jpg"
    },
    {
        userName: "Robert Lewandowski",
        data: "Robert Lewandowski has been an FC Bayern striker since 2014. Before that he spent four years at Borussia Dortmund. The Pole began playing football at the age of eight for Partyzant Leszno and then joined the youth setup at Varsovia Warsaw. In 2005 he played for the Delta Warsaw first team. ",
        imageUrl: "p5.jpg"
    },

    {
        userName: "Harry Kane",
        data: "A prolific goalscorer with strong link play, Kane is regarded as one of the best strikers in the world. He is both Tottenham Hotspur's and England's all-time highest goalscorer, as well as being the second-highest Premier League all-time goalscorer. Kane has scored over 350 goals for club and country. ",
        imageUrl: "p6.jpg"
    },
    {
        userName: "Erling Haaland",
        data: "Haaland has won several individual awards and broken various records during his career. During the 2019–20 season with Salzburg, he became the first teenager to score goals in five consecutive UEFA Champions League matches. He was the top scorer of the Champions League for both the 2020–21 and 2022–23 seasons.",
        imageUrl: "p7.jpg"
    },
    {
        userName: "Karim Benzema",
        data: "He is Real Madrid's all-time second-highest goalscorer and top assist provider. Benzema won 24 trophies with Real Madrid, including four La Liga, three Copa del Rey, and five UEFA Champions League titles.",
        imageUrl: "p8.jpg"
    },

    {
        userName: "Kevin De Bruyne",
        data: "Kevin De Bruyne (born 28 June 1991) is a Belgian professional footballer who plays as a midfielder for Premier League club Manchester City and captains the Belgium national team. He is widely regarded as one of the best players of his generation as well as one of the best midfielders in the world.",
        imageUrl: "p9.jpg"
    }
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