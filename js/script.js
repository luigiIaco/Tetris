let contenitore = document.getElementById("container");
let striscia = document.getElementById("lose");
let cont = 0;
let changeDir = 0;
let arr_completo = [];
let array_id;
let array_ordinate = [];
let array_ascisse = [];
let numero = 0;
let lista = [];
let bool = false;
let bool_due=false;

let grid = [];
for (let i = 0; i < 15; i++) {
  for (let j = 0; j < 10; j++) {
    if (i == 14) {
      var div = document.createElement("div");
      div.classList.add("item", "limite");
      div.setAttribute("id", `${j}_${i}`);
      contenitore.appendChild(div);
      grid.push(div);
    } else if (i == 0) {
      var div = document.createElement("div");
      div.classList.add("item", "gameover");
      div.setAttribute("id", `${j}_${i}`);
      contenitore.appendChild(div);
      grid.push(div);
    } else if (j == 0) {
      var div = document.createElement("div");
      div.classList.add("item", "sinistra");
      div.setAttribute("id", `${j}_${i}`);
      contenitore.appendChild(div);
      grid.push(div);
    } else if(j==9) {
      var div = document.createElement("div");
      div.classList.add("item", "destra");
      div.setAttribute("id", `${j}_${i}`);
      contenitore.appendChild(div);
      grid.push(div);
    }else {
      var div = document.createElement("div");
      div.classList.add("item");
      div.setAttribute("id", `${j}_${i}`);
      contenitore.appendChild(div);
      grid.push(div);
    }
  }
}

let array = [
  [3, 0, 3, 1, 3, 2, 4, 2],
  [7, 0, 7, 1, 7, 2, 7, 3],
  [1, 0, 2, 0, 3, 0, 2, 1],
  [8, 0, 8, 1, 8, 2, 8, 3],
  [3, 0, 4, 0, 3, 1, 4, 1],
];
let random = Math.floor(Math.random() * 5);

document.body.addEventListener("keydown", direction);
let inter = setInterval(tic, 300);
function tic() {
  for (let index = 0; index < grid.length; index++) {
    grid[index].style.backgroundColor = "black";
    grid[index].style.border = "none";
  }

  for (let d = 0; d < arr_completo.length; d++) {
    arr_completo[d].style.backgroundColor = "red";
    arr_completo[d].style.border = "1px solid yellow";
    if (arr_completo[d].classList.contains("gameover")) {
      clearInterval(inter);
      alert("Hai perso");
    }
  }
  let uno = document.getElementById(
    `${array[random][0] + changeDir}_${array[random][1] + cont}`
  );
  let due = document.getElementById(
    `${array[random][2] + changeDir}_${array[random][3] + cont}`
  );
  let tre = document.getElementById(
    `${array[random][4] + changeDir}_${array[random][5] + cont}`
  );
  let quattro = document.getElementById(
    `${array[random][6] + changeDir}_${array[random][7] + cont}`
  );
  let lista = [uno, due, tre, quattro];
  for (let p = 0; p < lista.length; p++) {
    lista[p].style.backgroundColor = "red";
    lista[p].style.border = "1px solid yellow";
    if (lista[p].classList.contains("sinistra")){
      bool = true;
    }
    if (lista[p].classList.contains("destra")){
      bool_due = true;
    }


  }

  for (let v = 0; v < lista.length; v++) {
    if (lista[v].classList.contains("limite")) {
      random = Math.floor(Math.random() * 5);
      cont = -1;
      changeDir = 0;
      for (let t = 0; t < lista.length; t++) {
        arr_completo.push(lista[t]);
      }
      for (let x = 0; x < lista.length; x++) {
        let boh = lista[x].getAttribute("id");
        array_id = boh.split("_");
        array_ascisse.push(array_id[0]);
        array_ordinate.push(array_id[1] - 1);
      }

      for (let y = 0; y < array_ascisse.length; y++) {
        document
          .getElementById(`${array_ascisse[y]}_${array_ordinate[y]}`)
          .classList.add("limite");
      }
    }
  }
  cont++;
}

function direction(event) {
  var key = event.which;
  switch (key) {
    case 39:
      if (bool_due == true) {
        console.log("ciao");
      } else {
        changeDir += 1;
      }
      break;
    case 37:
      if (bool == true) {
        console.log("ciao");
      } else {
        changeDir -= 1;
      }
      break;
  }
  bool = false;
  bool_due=false;
}
