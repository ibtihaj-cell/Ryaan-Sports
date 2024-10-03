var box = document.getElementById("box");

var users = [
  {
    userName: "Mohammad Amir",
    data: "Mohammad Amir born on 13 April 1992 is a former Pakistani cricketer bowler for the Pakistan national cricket team. He was a left-arm fast bowler.Amir made his international debut against England in the group stages of the 2009 ICC World Twenty20",
    imageUrl: "f.jpg",
  },
  {
    userName: "Dale Willem Steyn",
    data: "Dale Willem Steyn born on 27 June 1983 is a South African  Cricketer.He is often regarded as one of the greatest fast bowlers and the greatest Test bowler of his generation.Steyn made his debut for South Africa on 17 December 2004 in the first Test of England's tour. ",
    imageUrl: "f1.jpg",
  },
  {
    userName: "Mohammad Babar Azam",
    data: "Mohammad Babar Azam born on 15 October 1994 is a Pakistani international cricketer and captain of the Pakistan national cricket team who is widely regarded as one of the finest batters in contemporary cricket.He is ranked as the number one batter in ODIs",
    imageUrl: "f7.jpg",
  },

  {
    userName: "Benjamin Andrew Stokes",
    data: "Benjamin Andrew Stokes born on 4 June 1991 is an English international cricketer who is the captain of the England Test team and plays for the England Twenty20 International (T20I) team.He was part of the England team that won the 2019 Cricket World Cup",
    imageUrl: "f3.jpg",
  },
  {
    userName: "Joseph Charles Buttler",
    data: "Joseph Charles Buttler born on 8 September 1990 is an English cricketer who is the captain of the England cricket team in limited overs cricket,.He was the vice-captain and a crucial member of the England team that won the 2019 Cricket World Cup",
    imageUrl: "f4.jpg",
  },
  {
    userName: "Syed Imad Wasim Haider",
    data: "Syed Imad Wasim Haider born on 18 December 1988 commonly known as Imad Wasim, is a Welsh-born Pakistani international cricketer. He is a left-handed all-rounder. Wasim was a member of the Pakistan team that won the 2017 ICC Champions Trophy.",
    imageUrl: "f5.jpg",
  },

  {
    userName: "Shoaib Akhtar",
    data: "Shoaib Akhtar born on 13 August 1975 is a Pakistani former cricketer . Nicknamed the Rawalpindi Express, he is the fastest bowler to have played the game. Akhtar made his Test match debut in November 1997 as an opening fast bowler and played his first One Day International ",
    imageUrl: "f6.jpg",
  },
  {
    userName: "Naseem Abbas Shah",
    data: "Naseem Abbas Shah born on 15 February 2003 is a Pakistani international cricketer.In October 2019 at the age of 16 he was called up to the Pakistan cricket team for their Test series against Australia.He made his international debut for Pakistan in November 2019 against Australia.",

    imageUrl: "f8.jpg",
  },
  {
    userName: "Mohammad Junaid Khan",
    data: "Mohammad Junaid Khan born on 24 December 1989 is a Pakistani international cricketer who bowls left arm fast.In August 2018, he was one of 33 players to be awarded a central contract for the 2018-19 season by the Pakistan Cricket Board (PCB).[4][5].",
    imageUrl: "f2.jpg",
  },

  {
    userName: "Steven Peter Devereux Smith",
    data: "Steven Peter Devereux Smith born on 2 June 1989 is an Australian international cricketer and former captain of the Australian national team. Regarded by some as the best Test batsman of the modern era.",
    imageUrl: "f9.jpg",
  },
];

for (var i = 0; i < users.length; i++) {
  box.innerHTML += ` <div class="col-lg-3 col-md-4 col-sm-6 col-12">
    <div class="card">
    <div class="poster"><img src="${users[i].imageUrl}" alt="Location Unknown"></div>
    <div class="details">
        <h1>${users[i].userName}</h1>
        <h2>${users[i].data}</h2>
        <div class="rating">
</div>
        </div>
</div>`;
}
