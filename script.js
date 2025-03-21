const form = document.querySelector("form");
const fname = document.querySelector("#fname");
const lname = document.querySelector("#lname");
const country = document.querySelector("#country");
const score = document.querySelector("#score");
const playerDiv = document.querySelector(".playerBoard");

const arr = [];

form.addEventListener("submit", addplayer);

function addplayer(e) {
  e.preventDefault();

  let obj = {};

  obj.Name = fname.value + " " + lname.value;
  obj.country = country.value;
  obj.score = score.value;

  arr.push(obj);

  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";

  shorting(arr);
  showPlayerdata(arr);
  // console.log(arr)
}

function showPlayerdata(arr) {
  playerDiv.innerHTML = "";
  for (let i = 0; i < arr.length; i++) {
    const div = document.createElement("div");
    const nameSpan = document.createElement("span");
    const countrySpan = document.createElement("span");
    const scoreSpan = document.createElement("span");
    const deleteBtn = document.createElement("button");
    const increaseBtn = document.createElement("button");
    const decreaseBtn = document.createElement("button");

    nameSpan.innerHTML = arr[i].Name;
    countrySpan.innerHTML = arr[i].country;
    scoreSpan.innerHTML = arr[i].score;

    deleteBtn.innerHTML = "delete";
    increaseBtn.innerHTML = "+5";
    decreaseBtn.innerHTML = "-5";

    deleteBtn.addEventListener("click", () => {
      deletetask(i);
      showPlayerdata(arr);
    });

    function deletetask(index) {
      //DELETING ELEMENT MATCHING INDEX NUMBER
      arr.splice(index, 1);
      shorting(arr);
    }

    increaseBtn.addEventListener("click", increament);
    function increament(i) {
      scoreSpan.innerHTML = Number(scoreSpan.innerHTML) +5;
      shorting(arr);
      showPlayerdata(arr);
      console.log(arr);
      
    }

    decreaseBtn.addEventListener("click", (i) => {
      scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 5;
      showPlayerdata(arr);
      shorting(arr);
    });

    // console.log(playerDiv)

    div.append(
      nameSpan,
      countrySpan,
      scoreSpan,
      deleteBtn,
      decreaseBtn,
      increaseBtn
    );
    playerDiv.append(div);
    // shorting(arr);
    // console.log(decreaseBtn);
  }
}

function shorting(arr) {
  arr.sort((a, b) => b.score - a.score);
  // console.log(arr);
}
