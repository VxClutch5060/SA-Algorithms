let progress = 0;
let titlecon = null;
let desccon = null;
const titles = [
  'How To Code A: Dynamic Div Changer',
   "Firstly: Make a div",
  "Then add your div id",
  "After than add your JavaScript",
  "Then the acutal JS",
  "Next add some more JS",
               ];
const descs = [
  "In this tutorial, we'll learn how to create a div that changes its styling dynamically. Make sure you have your IDE of choice open. I recommend VS Code",
  "To make a div in your <body></body> tags add <div></div>",
  'to add an id to your div go into the div tags and add id="" and onmousemove="move()"; Like this <div id="myId" onmousemove="()"></div>',
  "Now we are going to add JavaScript to our project. But make sure you JavaScript file is attached like this: <head></head><body><div onmousemove='move()' id='myId'></div><script src='myJSfile'></script></body>",
  "So First the variables, we are going to have: const box = document.getElementById('myId'); and let x = event.clientX;",
  "Add to your JavaScript file under the variables, function move() {box.style.backgroundColor = rgb(x,x,0);}
  }",
];
const maxprogress = titles.length - 1;
function update() {
  document.getElementById('name').textContent = titlecon;
  document.getElementById('steps').textContent = desccon;
}

function next() {if(progress !== maxprogress) {
  progress++;
  titlecon = titles[progress];
  desccon = descs[progress];
  update()
}}

function back() {
  if(progress > 0)  {
    progress--;
    titlecon = titles[progress];
    desccon = descs[progress];
    update();
 }}
