// console.dir(document)
//=============== get element by id =================
// const topHeading = document.getElementById("top_heading");

// console.log(topHeading.textContent); 
//-----> read all text <-----

// console.log(topHeading.innerText);
 //-----> read only output ==> we can see on the browser. <-----

// console.log(topHeading.innerHTML); 
//-----> read all text inside tag's include everything <-----




//=============== get element by className =================
// const itemUl = document.getElementById('item_2');
// const classItems = itemUl.getElementsByClassName("item");
// console.log(classItems)

// for(let i=0; i<classItems.length; i++){
//     classItems[i].style.color ='red';
// }




//=============== get element by tagName =================

// console.log(document.getElementsByTagName('ul'));

//=============== Query selector =================

// console.log(document.querySelector(".item").innerText = "hii"); 
// console.log(document.querySelector(".hehehe li").style.color = "red"); 
//-----> select only first item <-----

// const lastChild = document.querySelector(".item:last-child");
// lastChild.style.color = "pink";
//-----> work with last child bt he consider box-1's last child. because it is first box though box-2 has same class name. <-----


// console.log(document.querySelectorAll(".item:last-child"));
//-----> if we use (querySelectorAll), that time we will get both last child <-----

// const lastChild = document.querySelector(".item:nth-child(2)");
// lastChild.style.color = "orange";