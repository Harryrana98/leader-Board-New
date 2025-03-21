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
  obj.score = Number(score.value);

  arr.push(obj);
  //   console.log(arr);

  fname.value = "";
  lname.value = "";
  country.value = "";
  score.value = "";

  showPlayerdata(arr);
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

    deleteBtn.addEventListener("click",deletetask)

    function deletetask(){
        playerDiv.innerHTML=""

    }

    increaseBtn.addEventListener("click",increament)
    function increament(){
        
    }

    console.log(playerDiv)

    div.append(
      nameSpan,
      countrySpan,
      scoreSpan,
      deleteBtn,
      decreaseBtn,
      increaseBtn
    );
    playerDiv.append(div);
    console.log(decreaseBtn);
  }
}
