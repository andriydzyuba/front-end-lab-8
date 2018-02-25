var rootNode = document.getElementById("root");

var mainNode = document.createElement("div");

function createNode(structure, node) {
  var ulNode = document.createElement("ul");
  node.appendChild(ulNode);

  for (var i = 0; i < structure.length; i++) {
    var liNode = document.createElement("li");
    ulNode.appendChild(liNode);
    var divNode = document.createElement("div");
    liNode.appendChild(divNode);
    var iNode = document.createElement('i');
    iNode.classList.add("material-icons");
    divNode.appendChild(iNode);
    divNode.append(structure[i].title);

    if (structure[i].folder) {
      divNode.setAttribute("onclick","openNode(this)");
      iNode.innerHTML = "folder";
      iNode.classList.add("folder");

      if (structure[i].children) {
        createNode(structure[i].children, liNode);
      } else {
        var emtyUlNode = document.createElement('ul');
        liNode.appendChild(emtyUlNode);
        var emtyLiNode = document.createElement('li');
        emtyLiNode.innerHTML = "Folder is empty";
        emtyLiNode.classList.add("empty");
        emtyUlNode.appendChild(emtyLiNode);
      }
    } else {
      iNode.innerHTML = "insert_drive_file";
    }
  }
}

function openNode(param){
  param.parentElement.childNodes[1].classList.toggle("open");
  var folder = param.childNodes[0];

  if (folder.innerHTML === "folder") {
    folder.innerHTML = "folder_open";
  } else {
    folder.innerHTML = "folder";
  }
}

createNode(structure, mainNode);
rootNode.appendChild(mainNode);
