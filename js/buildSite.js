console.clear();

// ---------------------------------------------
// Task 1
// ---------------------------------------------
var divNode = document.getElementById("fiddle");

// ---------------------------------------------
// Task 2
// ---------------------------------------------
var pNode = document.createElement('p');
var pTextNode = document.createTextNode("CSCI 215: Lab 5 Todo");
pNode.appendChild(pTextNode);
divNode.appendChild(pNode);

// ---------------------------------------------
// Task 3
// ---------------------------------------------
var hrNode = document.createElement('hr');
divNode.appendChild(hrNode);

// ---------------------------------------------
// Task 4
// ---------------------------------------------
var olNode = document.createElement('ol');
var liNode1 = document.createElement('li');
var liNode2 = document.createElement('li');
var liTextNode1 = document.createTextNode("Read Assignment");
var liTextNode2 = document.createTextNode("Code Assignment");

liNode1.appendChild(liTextNode1);
liNode2.appendChild(liTextNode2);
olNode.appendChild(liNode1);
olNode.appendChild(liNode2);
divNode.appendChild(olNode);

// ---------------------------------------------
// Task 5
// ---------------------------------------------
var imgNode = document.createElement('img');
var srcAttr = document.createAttribute("src");

srcAttr.value = 'lab_files/prettypicture.jpg';
imgNode.setAttributeNode(srcAttr);
divNode.appendChild(imgNode);