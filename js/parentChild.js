//===============  Parents-child relationship in JavaScript =====================

// ==============> html tags formate(index.html) =================
// -> div(container) ===> 
// --> h2,div(box_1),div(box_2) ===> grantParent 
// ---> h4,ul ===> parent(items)
// ----> li ===>  children(item)
// ===================================================
// ===================================================

// start ====>

//-----> select parent element <-----
// const parent = document.querySelector(".items"); //---> (ul)
// console.log(parent.children) 
// console.log(parent.children[1]) 

//-----> select child element <-----
//-----> parent to children <-----
// const grantParent = document.querySelector(".box_1");

// const parent = grantParent.children;
// const child = parent[1].children;

// console.log(parent);
// console.log(child); //---> child elements

// let child_2 = grantParent.querySelectorAll(".item");
// console.log(child_2); //---> child elements


//-----> children to parent <-----
// const child = document.querySelector(".item");

// const parent = child.parentElement;
// console.log(parent)

//-----> children to grantParent <-----
// const grandParent = child.closest(".box_1");
// console.log(grandParent)

//-----> among children(siblings)<------
//---> next element sibling <---
// const childOne = document.querySelector(".item");
// const childRTwo = childOne.nextElementSibling;
// childRTwo.style.color = "skyblue";
// console.log(childRTwo);

//---> previous element sibling <---
// const childRTwo = document.querySelector(".item").nextElementSibling;
// const childOne = childRTwo.previousElementSibling;
// childOne.style.color = "skyblue";
// console.log(childOne);
