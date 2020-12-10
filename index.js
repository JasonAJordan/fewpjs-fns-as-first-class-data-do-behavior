/* Given Code, don't edit */

document.querySelector("button").addEventListener("click", handleClick);

function handleClick(e) {
  const timeString = document.getElementById('time').value
  displayMessage(greet(timeString))
}

/* End Given Code, don't edit above here...*/

/* Write your implementation of greet() */
/* Write your implementation of displayMessage() */

function greet(string){

  // let time = new Date()

  // let hours = time.getHours()

  let hours = parseInt(string, 10)

  if (hours < 12){
    return "Good Morning"
  } else if ( hours < 15) {
    return "Good Afternoon"
  } else {
    return "Good Evening"
  }

}

function displayMessage(msg) {

  document.getElementById("greeting").innerText = msg

}