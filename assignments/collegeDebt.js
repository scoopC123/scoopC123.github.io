/* file: collegeDebt.js
author: Cooper Lenzi
description: jquery exercise to demonstrate
college loans	

Portions of code borrowed from
George Corser on Codepen
https://codepen.io/gpcorser/pen/pogEQJw
Regie09 on GitHub
https://github.com/Regie09/regie092/blob/master/assignment06.html */

// global variables

var loans = [
  { loan_year: 2020, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2021, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2022, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2023, loan_amount: 10000.00, loan_int_rate: 0.0453 },
  { loan_year: 2024, loan_amount: 10000.00, loan_int_rate: 0.0453 }
];

//Regie09 Code
let saveForm = () => {
  localStorage.setItem(`as06`, JSON.stringify(loans));
};

// -------------------------------------------------------
//gets inside the localstorage and updates the form in that localstorage
let loadForm = () => {
  if (localStorage.getItem(`as06`) != null) {
    loans = JSON.parse(localStorage.getItem(`as06`));
    updateForm();
  } else {
    alert(`Error: no saved values`);
  }
};
//Regie09 Code
let toMoney = (value) => {
  return `\$${toComma(value.toFixed(2))}`;
};



function loadDoc(){
   // pre-fill defaults for first loan year
   var defaultYear = loans[0].loan_year;
   //console.log(defaultYear);
   
   //document.getElementById("loan_year0" + 1).value = defaultYear++;
   //jQuery conversion
   $("#loan_year0" + 1).val(defaultYear++);
   
   var defaultLoanAmount = loans[0].loan_amount;
   //document.getElementById("loan_amt0" + 1).value = defaultLoanAmount.toFixed(2);
   $("#loan_amt0" + 1).val(defaultLoanAmount.toFixed(2));

   var defaultInterestRate = loans[0].loan_int_rate;
   //document.getElementById("loan_int0" + 1).value = defaultInterestRate;
   $("#loan_int0" + 1).val(defaultInterestRate);

   var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  // document.getElementById("loan_bal0" + 1).innerHTML 
  //   = toComma(loanWithInterest.toFixed(2));
  $("#loan_bal0" + 1).text(toComma(loanWithInterest.toFixed(2)));  
 
  //$("#loan_int_accrued").text(toComma(loanWithInterest.toFixed(2)));
 
  // pre-fill defaults for other loan years
    for(var i=2; i<6; i++) {
      //document.getElementById("loan_year0" + i).value = defaultYear++;
      $("#loan_year0" + i).val(defaultYear++);

      //document.getElementById("loan_year0" + i).disabled = true;
      $("#loan_year0"+ i).prop("disabled", true);

      //document.getElementById("loan_year0" + i).style.backgroundColor = "gray";
      $("#loan_year0" + i).css("background-color", "gray");

      //document.getElementById("loan_year0" + i).style.color = "white";
      $("#loan_year0" + i).css("color", "white");

      //document.getElementById("loan_amt0" + i).value = defaultLoanAmount.toFixed(2);
      $("#loan_amt0" + i).val(defaultLoanAmount.toFixed(2));

      //document.getElementById("loan_int0" + i).value = defaultInterestRate;
      $("#loan_int0" + i).val(defaultInterestRate);

      //document.getElementById("loan_int0" + i).disabled = true;
      $("#loan_int0" + i).prop("disabled", true);

      //document.getElementById("loan_int0" + i).style.backgroundColor = "gray";
      $("#loan_int0" + i).css("background-color", "gray");

      //document.getElementById("loan_int0" + i).style.color = "white";
      $("#loan_int0" + i).css("color", "white");

      loanWithInterest = (loanWithInterest + defaultLoanAmount) * (1 + defaultInterestRate);
      
      //document.getElementById("loan_bal0" + i).innerHTML = toComma(loanWithInterest.toFixed(2));
      $("#loan_bal0" + i).text(toComma(loanWithInterest.toFixed(2)));
      } // end: "for" loop



    // all input fields: select contents on fucus
    $("input[type=text]").focus(function() {
      $(this).select();
      $(this).css("background-color", "yellow");
    }); 
    $("input[type=text]").blur(function() {
      $(this).css("background-color", "white");
    });
    
    $("#loan_year01").focus();
    $("#loan_year01").blur( function() {
      updateLoansArray();
    });
} // end function: loadDoc()

  function toComma(value) {
  return value.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
}

//My Code, which wasn't working too well!
/*function updateLoansArray() { //with year
  loans[0].loan_year = parseInt($("#loan_year01").val());
  loans[0].loan_amount = parseFloat($("#loan_amt01").val());
  loans[0].loan_int_rate = parseFloat($("#loan_int01").val());
  for(var i=1; i<5; i++) {
    loans[i].loan_year = loans[0].loan_year + i;
    $("#loan_year0"+ (i+1) ).val(loans[i].loan_year);
    //amounts
    //putting value in array, from what user enters in form
    loans[i].loan_amount = parseFloat($("#loan_amt0"+ (i+1) ).val());
    //loading value in form from array
    $("#loan_amt0"+ (i+1) ).text(toComma(loans[i].loan_amount.toFixed(2)));
    //interest
    //parse float so the decimal value will return
    loans[i].loan_int_rate = loans[0].loan_int_rate;
    $("#loan_int0"+ (i+1) ).val(loans[i].loan_int_rate); 
  }
  yearEndBalance();      
}
function yearEndBalance(){

  var defaultInterestRate = loans[0].loan_int_rate;

  var loanWithInterest = loans[0].loan_amount * (1 + loans[0].loan_int_rate);
  $("#loan_bal0" + 1).text(toComma(loanWithInterest.toFixed(2))); 

  for(var i=2; i<6; i++) {
    loanWithInterest = (loanWithInterest + loans[i-1].loan_amount) * (1 + defaultInterestRate);   
    $("#loan_bal0" + i).text(toComma(loanWithInterest.toFixed(2)));
  }

  totalInterest();
}

function totalInterest(){
  var defaultInterestRate = loans[0].loan_int_rate;

  var interest = loans[0].loan_amount * defaultInterestRate;
  
  for(var i=1; i<5; i++) {
    interest = interest + (loans[i].loan_amount *  defaultInterestRate);   
    console.log(interest);
  }
  
  $("#loan_int_accrued").text(toComma(interest.toFixed(2)));

}
 */
//Regie09 Code
function updateLoansArray() {
  //takes user input and change the data in loans array using regex

  // regex tester web site: https://www.regexpal.com/
  let yearP = /^(19|20)\d{2}$/; //has to be 19 or 20 at the start and followed by two numbers
  let amtP = /^([1-9][0-9]*)+(.[0-9]{1,2})?$/; //first digit has to start 1-9 and followed by none, one or more additional digits and then plus two or one decimal digit.
  let intP = /^(0|)+(.[0-9]{1,5})?$/; //have zero at the start have 1 to 5 decimal places
  let valid = true;

  //checks yearP matches the year pattern. background turns red if false
  if (!yearP.test($(`#loan_year01`).val())) {
    valid = false;
    $(`#loan_year01`).css("background-color", "red");
  }
  //checks if amtP matches the ammount pattern. background turns red if false
  for (i = 1; i < 6; i++) {
    if (!amtP.test($(`#loan_amt0${i}`).val())) {
      valid = false;
      $(`#loan_amt0${i}`).css("background-color", "red");
    }
  }
  //check if intP matches the interest rate pattern. background turns red if false
  if (!intP.test($(`#loan_int01`).val())) {
    valid = false;
    $(`#loan_int01`).css("background-color", "red");
  }

  //if users input are true then it updates the variables and form
  if (valid) {
    loans[0].loan_year = parseInt($("#loan_year01").val());
    for (var i = 1; i < 5; i++) {
      loans[i].loan_year = loans[0].loan_year + i;
    }
    for (i = 1; i < 6; i++) {
      let amt = parseFloat($(`#loan_amt0${i}`).val()).toFixed(2);
      loans[i - 1].loan_amount = amt;
    }
    let rate = parseFloat($("#loan_int01").val());
    for (i = 0; i < 5; i++) {
      loans[i].loan_int_rate = rate;
    }

    updateForm(); // only updates if inputs are valid then it will update the form
  } // end: if
} // end: function updateLoansArray()

// INPUT Validation
//My Regex
function regexYear () {
  // Year validation
  // a year starting in 2000, up to 9999
  var regex = /^[2-9]{1}[0-9]{3}$/;
  var value = document.getElementById("loan_year01").value;
 
  if(regex.test(value)) document.getElementById("msg").innerHTML = "ok";
  else document.getElementById("msg").innerHTML = "invalid";
}


function regexAmount (id) {
  // Amount validation
  // amount ranging from 0000-999999
  var regex = /^[0-9]{4,6}$/;
  var value = document.getElementById(""+id+"").value;

  if(regex.test(value)) document.getElementById("msg").innerHTML = "ok";
  else document.getElementById("msg").innerHTML = "invalid";

}


function regexInterest (){
  // Interest validation
  // interst starting with 0, followed by ., and 2 to 6 decimal places
  var regex = /[0]{1}[.]{1}[0-9]{2,6}/;
  var value = document.getElementById("loan_int01").value;

  if(regex.test(value)) document.getElementById("msg").innerHTML = "ok";
  else document.getElementById("msg").innerHTML = "invalid";
}

//Regie09 Code
let updateForm = () => {
  loanWithInterest = 0;
  let totalAmt = 0;
  for (i = 1; i < 6; i++) {
    $(`#loan_year0${i}`).val(loans[i - 1].loan_year);
    let amt = loans[i - 1].loan_amount;
    $(`#loan_amt0${i}`).val(amt);
    totalAmt += parseFloat(amt);
    $(`#loan_int0${i}`).val(loans[i - 1].loan_int_rate);
    loanWithInterest =
      (loanWithInterest + parseFloat(amt)) * (1 + loans[0].loan_int_rate);
    $("#loan_bal0" + i).text(toMoney(loanWithInterest));
  }
  int = loanWithInterest - totalAmt;
  $(`#loan_int_accrued`).text(toMoney(int)); //show the interest
}; // end: function updateForm()

//Regie09 Code
var app = angular.module("myApp", []);

//contoller takes the total amount borrowed and spread it in how many years
app.controller("myCtrl", function ($scope) {
  $scope.payments = []; // controller connects with the view in HTML
  $scope.populate = function () {
    //populates the payments array

    updateForm(); //updates form

    //payments
    let total = loanWithInterest; //calculate total
    let iRate = loans[0].loan_int_rate;
    let r = iRate / 12;
    let n = 11;
    //loan payment formula
    //https://www.thebalance.com/loan-payment-calculations-315564
    let pay =
      12 * (total / (((1 + r) ** (n * 12) - 1) / (r * (1 + r) ** (n * 12)))); //formula to get computation with same payments for every period
    for (let i = 0; i < 10; i++) {
      //loop that generate the calculation as the period increases
      total -= pay;
      let int = total * iRate;
      $scope.payments[i] = {
        year: loans[4].loan_year + i + 1,
        payment: toMoney(pay),
        amt: toMoney(int),
        ye: toMoney((total += int))
      };
    }
    //calculates the last payment with the last total balance
    $scope.payments[10] = {
      year: loans[4].loan_year + 11,
      payment: toMoney(total),
      amt: toMoney(0),
      ye: toMoney(0)
    };
  };
});
