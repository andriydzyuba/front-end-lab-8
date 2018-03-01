var rootNode = document.getElementById("root");

var mainNode = document.createElement("div");
rootNode.appendChild(mainNode);

var hNode = document.createElement("h1");
hNode.innerHTML = "Most popular tanks";
mainNode.appendChild(hNode);

var boardNode = document.createElement("div");
boardNode.classList.add("board");
mainNode.appendChild(boardNode);

function createNode() {
  for (var i = 0; i < tanks.length; i++) {
    var divNode = document.createElement("div");
    divNode.classList.add("boardTanks");
    divNode.addEventListener("click", function() {location.hash = tanks.model});
    boardNode.appendChild(divNode);

    var imgTanks = document.createElement("img");
    imgTanks.classList.add("boardimg");
    imgTanks.setAttribute("src", tanks[i].preview);
    divNode.appendChild(imgTanks);

    var divTanks = document.createElement('div');
    divTanks.classList.add("boarddiv");
    divNode.appendChild(divTanks);

    var imgDivTanks = document.createElement("img");
    imgDivTanks.classList.add("boardelem");
    imgDivTanks.setAttribute("src", tanks[i].country_image);
    divTanks.appendChild(imgDivTanks);

    var levelDivTanks = document.createElement("p");
    levelDivTanks.classList.add("boardelem");
    divTanks.appendChild(levelDivTanks);
    levelDivTanks.append(tanks[i].level);

    var modelDivTanks = document.createElement("p");
    modelDivTanks.classList.add("boardelem");
    divTanks.appendChild(modelDivTanks);
    modelDivTanks.append(tanks[i].model.toUpperCase());
  }
}

createNode(tanks);

var detailsNode = document.createElement("div");
function detailsTank() {
  

  var exitDetails = document.createElement("a");
  exitDetails.innerHTML = "Back to list view";
  exitDetails.setAttribute("href", "");
  detailsNode.appendChild(exitDetails);

  rootNode.replaceChild(detailsNode, mainNode);
}

window.addEventListener('hashchange', function() {
  if (location.hash) {
    detailsTank()
  } else {
    rootNode.replaceChild(mainNode, detailsNode)
  }
});
