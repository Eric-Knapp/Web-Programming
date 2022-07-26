const form1 = document.getElementById("form1");
const error = document.getElementById("error");
const number = document.getElementById("number");
const uList = document.getElementById("list");

//prime #s  return modulus: num modulus i equals 0
function primes(num) {
  for (let i = 2; i < num; i++) {
    if (num % i === 0) {
      return false;
    }
  }
  //returning > 1 for odds if modulus === 0 is false
  return num > 1;
}

//fibonacci
function fibo(num, x = 1, y = 0) {
  if (num <= 0) {
    return y;
  } else {
    return fibo(num - 1, y, x + y); //fibonacci calc
  }
}

//form events - listeing for submit and output of fibonacci
if (form1) {
  form1.addEventListener("submit", (event) => {
    event.preventDefault();
    console.log(number.value);
    //if number entered error hidden
    if (number.value.trim() && !isNaN(number.value)) {
      error.hidden = true; //turn off error

      //list creation for fibonacci output
      let lis = document.createElement("li");

      //concatenation and output of numbers entered in search bar according to spec
      lis.innerHTML =
        "The Fibonacci of " +
        number.value +
        " is " +
        fibo(parseInt(number.value)) +
        ".";

      //is-prime vs. not-prime class - manipulated colors red, green in styles file
      if (primes(fibo(parseInt(number.value)))) {
        lis.classList.add("is-prime");
      } else {
        lis.classList.add("not-prime");
      }
      //appending to list each entered value and fibonacci calculation
      uList.appendChild(lis);
      form1.reset(); //reset form
    } else {
      number.value = "";
      error.hidden = false; //else turn on error
      error.innerHTML = "Error! Cannot leave blank, must enter a valid number!";
      number.className = "inputClass";
    }
  });
}
