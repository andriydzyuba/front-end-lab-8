let rootNode = document.getElementById("root");

let mainNode = document.createElement("div");
rootNode.appendChild(mainNode);

let hNode = document.createElement("h1");
hNode.innerHTML = "Most popular tanks";
mainNode.appendChild(hNode);

let boardNode = document.createElement("div");
boardNode.classList.add("board");
mainNode.appendChild(boardNode);

function createNode() {

  for (let i in tanks) {
    let a = document.createElement("a");
    a.setAttribute("href", ('#' + tanks[i].model.replace(/ /gi, "-").toLowerCase()));
    boardNode.appendChild(a);

    let divNode = document.createElement("div");
    divNode.classList.add("boardTanks");
    divNode.setAttribute('title', "Click to details");
    a.appendChild(divNode);

    let imgTanks = document.createElement("img");
    imgTanks.classList.add("boardimg");
    imgTanks.setAttribute("title", tanks[i].model);
    imgTanks.setAttribute("src", tanks[i].preview);
    divNode.appendChild(imgTanks);

    let divTanks = document.createElement('div');
    divTanks.classList.add("boarddiv");
    divNode.appendChild(divTanks);

    let imgDivTanks = document.createElement("img");
    imgDivTanks.classList.add("boardelem");
    imgDivTanks.setAttribute("title", tanks[i].country);
    imgDivTanks.setAttribute("src", tanks[i].country_image);
    divTanks.appendChild(imgDivTanks);

    let levelDivTanks = document.createElement("p");
    levelDivTanks.classList.add("boardelem");
    divTanks.appendChild(levelDivTanks);
    levelDivTanks.append(tanks[i].level);

    let modelDivTanks = document.createElement("p");
    modelDivTanks.classList.add("boardelem");
    divTanks.appendChild(modelDivTanks);
    modelDivTanks.append(tanks[i].model.toUpperCase());
  }
}

const detailsTank = document.createElement("div");

function detailsNode(){

  detailsTank.childNodes[0] ? detailsTank.removeChild(detailsTank.childNodes[0]) : null

  const model = location.hash.slice(1);

  const tankNode = tanks.find((item) => item.model.replace(/ /gi, "-").toLowerCase() === model ? item : null);

  const containerNode = document.createElement("div");
  detailsTank.appendChild(containerNode);

  const descriptionNode = document.createElement("div");
  descriptionNode.classList = "description";
  containerNode.appendChild(descriptionNode);

  const flagTank = document.createElement("img");
  flagTank.setAttribute("title", tankNode.country);
  flagTank.setAttribute("src", tankNode.country_image);
  descriptionNode.appendChild(flagTank);

  const mainTank = document.createElement("h1");
  mainTank.innerHTML = `${tankNode.model.toUpperCase()} (level ${tankNode.level})`;
  descriptionNode.appendChild(mainTank);

  const gridTank = document.createElement("div");
  gridTank.classList = "container-grid";
  containerNode.appendChild(gridTank);

  const blockTank = document.createElement("div");
  gridTank.appendChild(blockTank);

  const previewTank = document.createElement("h2");
  previewTank.innerHTML = "Preview";
  blockTank.appendChild(previewTank);

  const imgTankNode = document.createElement("img");
  imgTankNode.setAttribute('src', tankNode.preview);
  blockTank.appendChild(imgTankNode);

  const backNode = document.createElement("a");
  backNode.classList = "back";
  backNode.innerHTML = "Back to list view";
  backNode.setAttribute("href", "");
  blockTank.appendChild(backNode);

  const table = document.createElement("table");

  const caption = document.createElement("caption");
  caption.innerHTML = "Characteristic";
  table.appendChild(caption);

  for (let prop in tankNode.details){
    const tr = document.createElement("tr");
    table.appendChild(tr);

    const tdProp = document.createElement("td");
    tdProp.innerHTML = prop.replace(/_/gi, " ");
    tr.appendChild(tdProp);

    const tdValue = document.createElement("td");
    tdValue.innerHTML = tankNode.details[prop];
    tr.appendChild(tdValue);
  }
  gridTank.appendChild(table);

  rootNode.replaceChild(detailsTank, mainNode);
}

!location.hash ? createNode(tanks) : detailsNode()

window.addEventListener('hashchange',
  () => {
  	if(location.hash){
      detailsNode();
    } else {
      !boardNode.childNodes[0] ? createNode(tanks) : false
      rootNode.replaceChild(mainNode, detailsTank);
    }
  }
);
