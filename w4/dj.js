const btn = document.querySelector('button');

function random(number) {
  return Math.floor(Math.random() * (number+1));
}

btn.onmousedown = function() {
  const rndCol = 'red';
  document.body.style.backgroundColor = rndCol;
}

btn.onmouseover = function() {
  const rndCol = 'blue';
  document.body.style.backgroundColor = rndCol;
}

btn.onmouseup = function() {
    const rndCol = 'yellow';
    document.body.style.backgroundColor = rndCol;
}

btn.ondblclick = function() {
    const rndCol = 'green';
    document.body.style.backgroundColor = rndCol;
}

onwheel = function() {
    const rndCol = 'orange';
    document.body.style.backgroundColor = rndCol;
}

onkeypress = function() {
    const rndCol = 'purple';
    document.body.style.backgroundColor = rndCol;
}

//could not quite how to do the individual seperate letter keys to the colors//