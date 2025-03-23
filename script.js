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
  if (
    fname.value.trim() === "" ||
    lname.value.trim() === "" ||
    country.value.trim() === "" ||
    score.value.trim() === ""
  ) {
    alert("Please fill in all fields.");
    return;
  }

  if (isNaN(score.value) || Number(score.value) < 0) {
    alert("Please enter a valid positive number for the score.");
    return;
  }

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
    div.classList.add("playerTask")
    const nameSpan = document.createElement("span");
    const countrySpan = document.createElement("span");
    const scoreSpan = document.createElement("span");
    const deleteBtn = document.createElement("i");
    deleteBtn.className="fa-solid fa-trash"
    const increaseBtn = document.createElement("button");
    increaseBtn.id="inbtn"
    const decreaseBtn = document.createElement("button");
    decreaseBtn.id="debtn"
    nameSpan.innerHTML = arr[i].Name;
    countrySpan.innerHTML = arr[i].country;
    scoreSpan.innerHTML = arr[i].score;

    nameSpan.style.textTransform="capitalize"
    countrySpan.style.textTransform="capitalize"
    scoreSpan.style.textTransform="capitalize"

    // deleteBtn.innerHTML = "delete";
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

    increaseBtn.addEventListener("click", () => {
      increament(i);
    });
    function increament(index) {
      // scoreSpan.innerHTML = Number(scoreSpan.innerHTML) +5;
      arr[index].score = Number(arr[index].score) + 5;
      shorting(arr);
      showPlayerdata(arr);
      // console.log(arr);
    }
    decreaseBtn.addEventListener("click", () => {
      decrement(i);
    });
    // function decrement(index) {
    //   // scoreSpan.innerHTML = Number(scoreSpan.innerHTML) -5;
    //   arr[index].score = Number(arr[index].score) - 5;
    //   shorting(arr);
    //   showPlayerdata(arr);
    //   // console.log(arr);
    // }

    function decrement(index) {
      if (arr[index].score > 0) {
        arr[index].score = Math.max(0, arr[index].score - 5); // Ensures minimum score is 0
        shorting(arr);
        showPlayerdata(arr);
      } else {
        alert("Score cannot be negative.");
      }
    }

    // decreaseBtn.addEventListener("click", () => {
    //   scoreSpan.innerHTML = Number(scoreSpan.innerHTML) - 5;
    //   showPlayerdata(arr);
    //   shorting(arr);
    // });

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

