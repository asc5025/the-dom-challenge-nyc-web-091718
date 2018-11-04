
let seconds = 0;
let onPause = false;
let counter = document.querySelector('#counter')

 function myTimer (){
  if (!onPause) {
  seconds += 1;
  counter.innerText = `${seconds}`}
}

setInterval(myTimer, 1000);

let pauseButton = document.getElementById('pause')
   pauseButton.addEventListener('click', function () {
  if (onPause) {
    onPause = false
    pauseButton.innerHTML = 'pause'
  } else {
    onPause = true;
    pauseButton.innerHTML = 'resume'
  }
  })

function minusSecond () {
  if (!onPause) {
  seconds -= 1;
  counter.innerText = `${seconds}`}
}

function plusSecond () {
  if (!onPause) {
  seconds += 1;
  counter.innerText = `${seconds}`}
}

 likesStore = {}

function addLike () {
  if (!onPause) {
    let number = parseInt(counter.innerText, 10);
    likesStore[number] = likesStore[number] ? likesStore[number] + 1 : 1;
    if (likesStore[number] === 1) {
      let newLike = document.createElement("li")
      newLike.innerHTML = `${number} has ${likesStore[number]} like`
      newLike.setAttribute("id", `${number}likes`)
      document.querySelector('.likes').appendChild(newLike)
    } else {
      let updateLike = document.getElementById(`${number}likes`)
      updateLike.innerHTML = `${number} has ${likesStore[number]} likes`
    }
  }
}

function addComment () {
  if (!onPause) {
    let newComment= document.createElement("p")
    let text = document.querySelector("input[type=text]").value
    newComment.innerHTML = text
    document.querySelector('#list').appendChild(newComment)
   }
}

let minusButton = document.getElementById('-')

minusButton.addEventListener('click', minusSecond)

let plusButton = document.getElementById('+')

plusButton.addEventListener('click', plusSecond)

let heartButton = document.getElementById('<3')

heartButton.addEventListener('click', addLike)

let form = document.querySelector("form")

form.addEventListener('submit', function (event) {
  event.preventDefault()
  addComment ()
})
