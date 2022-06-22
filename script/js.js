const title = document.getElementById("title");
const content = document.getElementById("content");
const btnDisplay = document.getElementById("btnDisplay");
const disContent = document.getElementById("displayContent");

btnDisplay.addEventListener('click', function() {
    

   // Title
//    let titleNode = document.createElement("h2");
//    let titleText = document.createTextNode("Article Title 2");
//    titleNode.classList.add("blog-title");
//    titleNode.appendChild(titleText);
//    blogNode.appendChild(titleNode);
let titleNode = document.createElement("h2");
let titleText = document.createTextNode(title.value);
titleNode.appendChild(titleText);


    // Append Child
    disContent.appendChild(titleNode);
})