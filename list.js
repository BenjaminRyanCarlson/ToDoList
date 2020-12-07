/*jshint esversion: 6 */

//remove function
var close = document.getElementsByClassName("remove");
var i;
for (i = 0; i < close.length; i++) {
  close[i].onclick = function() {
    var div = this.parentElement;
    div.style.display = "none";
  };
}

// complete task
var list = document.querySelector('ul');
list.addEventListener('click', function(ev) {
  if (ev.target.tagName === 'LI') {
    ev.target.classList.toggle('complete');
  }
}, false);


// add task
function newElement() {
  var icon = document.getElementsByClassName("trash");
  var li = document.createElement("li");
  var inputValue = document.getElementById("myInput").value;
  var t = document.createTextNode(inputValue);
  li.appendChild(t);
  if (inputValue === '') {
    alert("Type a Task!");
  } else {
    document.getElementById("todo").appendChild(li);
  }
  document.getElementById("myInput").value = "";

  var btnRem = document.createElement("button");
  var txt = document.createTextNode("remove");
  const img2 = document.createElement("img");
  img2.src = "assets/trash.png";
  img2.className = "trash";
  btnRem.className = "remove";
  btnRem.appendChild(img2);
  li.appendChild(btnRem);




  for (i = 0; i < close.length; i++) {
    close[i].onclick = function() {
      var div = this.parentElement;
      div.style.display = "none";
    };
  }
}
addEventListener("keypress", function(e){
  if(13 === e.keyCode){
    newElement();
  }
});

//test
console.log("this Works at least.");
