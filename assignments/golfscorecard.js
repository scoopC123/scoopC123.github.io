let elem = [];
// assign the entire table row for hole 1 to a variable, elem
// elem[1] = document.getElementById("1");

// display the number of children (all td elements)
// console.log(elem.children.length);
// display the content of the + button, which is the first child of the fifth element
// console.log(elem.children[4].children[0]); 

// assign a function to the + button
// elem[1].children[4].children[0].onclick = function(){add1(elem[1]);};

for(let i=1; i<=18; i++) {
  // console.log(i);
  elem[i] = document.getElementById(i.toString());
  elem[i].children[4].children[0].onclick = function(){add1(elem[i]);};
  elem[i].children[4].children[1].onclick = function(){sub1(elem[i]);};
}

// create an "add1" function
function add1 (elem) {
  if(elem.children[2].innerHTML == "-"){
    elem.children[2].innerHTML = "1";
    over(elem);
  } 

  else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore + 1;
    over(elem);
  }
}

function sub1 (elem) {
   if(elem.children[2].innerHTML == "-"){ 
    elem.children[2].innerHTML = "1";
    over(elem);
   }
   else {
    let currentScore = elem.children[2].innerHTML;
    currentScore = Number.parseInt(currentScore);
    elem.children[2].innerHTML = currentScore - 1;
    over(elem);
  }
 }

function over (elem) {
  if(elem.children[2].innherHTML == "1")
    elem.children[3].innerHTML = "-3"
  else{
  let parScore = elem.children[1].innerHTML;
  parScore = Number.parseInt(parScore);
  
  let currentScore = elem.children[2].innerHTML;
  currentScore = Number.parseInt(currentScore);
  
  elem.children[3].innerHTML = currentScore - parScore;
  }
}

function  total(elem) {
  
}


