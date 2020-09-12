btn = document.querySelector('button');
allBoxes = document.querySelectorAll('td');



function clearBoxes()
{
  for (var i = 0; i < allBoxes.length; i++)
  {
    allBoxes[i].textContent = "";
  }
}
btn.addEventListener('click', clearBoxes)

function makeTurn()
{
  if (this.textContent === "") {
      this.textContent = "X";
  } else if (this.textContent === "X") {
      this.textContent = "O";
  } else {
      this.textContent = "";
  }
}

for (var i = 0; i < allBoxes.length; i++) {
  allBoxes[i].addEventListener('click', makeTurn);
}
