const title = document.getElementById("title");
const content = document.getElementById("content");
const btnDisplay = document.getElementById("btnDisplay");
const disContent = document.getElementById("displayContent");
const textColor = document.getElementById("textColor");
const backgroundColor = document.getElementById("backgroundColor");

btnDisplay.addEventListener('click', function() {

// Create div
let blogNode = document.createElement("div");
blogNode.classList.add("blog-article");
blogNode.style.color = textColor.value;
blogNode.style.backgroundColor = backgroundColor.value;

   // Title
//    let titleNode = document.createElement("h2");
//    let titleText = document.createTextNode("Article Title 2");
//    titleNode.classList.add("blog-title");
//    titleNode.appendChild(titleText);
//    blogNode.appendChild(titleNode);

// Title
let titleNode = document.createElement("h2");
let titleText = document.createTextNode(title.value);
titleNode.appendChild(titleText);

// Date
let dateNode = document.createElement("p");
let dateText = document.createTextNode(new Date());
dateNode.appendChild(dateText);

// Content
let contentNode = document.createElement("p");
let contentText = document.createTextNode(content.value);
contentNode.appendChild(contentText);

// Adding to blog div
blogNode.appendChild(titleNode);
blogNode.appendChild(dateNode);
blogNode.appendChild(contentNode);

// Adding to parent 
    // Append Child
    disContent.appendChild(blogNode);
})