const teamName = document.getElementById("team");
const typeOfSport = document.getElementById("sport");
const worldCupYear = document.getElementById("year");
const headCoach = document.getElementById("head-coach");
const playerCards = document.getElementById("player-cards");
const playersDropdownList = document.getElementById("players");
const myFavoriteFootballTeam = {
    team: "Chelsea",
    sport: "Football",
    year: 2012,
    isChampionLeagueWinner: true,
    headCoach: {
      coachName: "Roberto Di Matteo",
      matches: 12,
    },
    players: [
      {
        name: "John Obi Mikel",
        position: "midfielder",
        number: 12,
        isCaptain: false,
        nickname: "Obi Wan",
      },
      {
        name: "John Terry",
        position: "defender",
        number: 26,
        isCaptain: true,
        nickname: "JT",
      },
      {
        name: "Michael Essien",
        position: "midfielder",
        number: 5,
        isCaptain: false,
        nickname: "The Bison",
      },
      {
        name: "Ramires",
        position: "midfielder",
        number: 7,
        isCaptain: false,
        nickname: "Rambo",
      },
      {
        name: "Juan Mata",
        position: "midfielder",
        number: 10,
        isCaptain: false,
        nickname: "The Wizard",
      },
      {
        name: "Didier Drogba",
        position: "forward",
        number: 11,
        isCaptain: false,
        nickname: "Tito",
      },
      {
        name: "Salomon Kalou",
        position: "forward",
        number: 21,
        isCaptain: false,
        nickname: "K2",
      },
      {
        name: "Fernando Torres",
        position: "forward",
        number: 9,
        isCaptain: false,
        nickname: "El Nino",
      },
      {
        name: "Daniel Sturridge",
        position: "forward",
        number: 23,
        isCaptain: false,
        nickname: "Studger",
      },
      {
        name: "Flourent Malouda",
        position: "forward",
        number: 15,
        isCaptain: false,
        nickname: "Fearless Dog",
      },
      {
        name: "Frank Lampard",
        position: "midfielder",
        number: 8,
        isCaptain: false,
        nickname: "Lampsey",
      },
      {
        name: "Oriol Romeu",
        position: "midfielder",
        number: 6,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Paulo Ferreira",
        position: "defender",
        number: 19,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Branislav Ivanovic",
        position: "defender",
        number: 2,
        isCaptain: false,
        nickname: "Bane",
      },
      {
        name: "David Luiz",
        position: "defender",
        number: 4,
        isCaptain: false,
        nickname: "Sideshow Bob",
      },
      {
        name: "Ashley Cole",
        position: "defender",
        number: 3,
        isCaptain: false,
        nickname: "Cashley",
      },
      {
        name: "Gary Cahill",
        position: "defender",
        number: 24,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Jose Bosingwa",
        position: "defender",
        number: 17,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ryan Bertrand",
        position: "midfielder",
        number: 34,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Ross Turnbull",
        position: "goalkeeper",
        number: 22,
        isCaptain: false,
        nickname: null,
      },
      {
        name: "Petr Čech",
        position: "goalkeeper",
        number: 1,
        isCaptain: false,
        nickname: null,
      },
    ],
  };
  

Object.freeze(myFavoriteFootballTeam);
const { sport, team, year, players } = myFavoriteFootballTeam;
const { coachName } = myFavoriteFootballTeam.headCoach;

typeOfSport.textContent = sport;
teamName.textContent = team;
worldCupYear.textContent = year;
headCoach.textContent = coachName;

const setPlayerCards = (arr = players) => {
  playerCards.innerHTML += arr
    .map(
      ({ name, position, number, isCaptain, nickname }) =>
        `
        <div class="player-card">
          <h2>${name} ${isCaptain ? "(Captain)" : ""}</h2>
          <p>Position: ${position}</p>
          <p>Number: ${number}</p>
          <p>Nickname: ${nickname !== null ? nickname : "N/A"}</p>
        </div>
      `
    )
    .join("");
};

playersDropdownList.addEventListener("change", (e) => {
  playerCards.innerHTML = "";

  switch (e.target.value) {
    case "nickname":
      setPlayerCards(players.filter((player) => player.nickname !== null));
      break;
    case "forward":
      setPlayerCards(players.filter((player) => player.position === "forward"));
      break;
    case "midfielder":
      setPlayerCards(
        players.filter((player) => player.position === "midfielder")
      );
      break;
    case "defender":
      setPlayerCards(
        players.filter((player) => player.position === "defender")
      );
      break;
    case "goalkeeper":
      setPlayerCards(
        players.filter((player) => player.position === "goalkeeper")
      );
      break;
      default : setPlayerCards();
    }
});
