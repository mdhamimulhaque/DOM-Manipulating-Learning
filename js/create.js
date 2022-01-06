//-----> create element <-----
const createDiv = document.createElement("div"); 
createDiv.className = "createClass"; //---> create class
createDiv.setAttribute("id", "createId"); //--->create id(attribute)
createDiv.setAttribute("title", "new div"); //--->create id(attribute)
// console.log(createDiv);

//----> select place where i want to add this <-----
const box1 = document.querySelector(".box_1");
// const box1_h4 = box1.querySelector(".box_h4");
// box1.insertBefore(createDiv, box1_h4)

//----> add as a last elements <-----
// box1.appendChild(createDiv);
// box1.append(createDiv);

//----> different between append and appendChid <-----
//====>(1)
// box1.appendChild("hello word"); //---> error(only allow element)
// box1.append("hello word"); //--->add text(allow element and text both)

//====> (2)
// const x = box1.appendChild(createDiv);
// console.log(x) //---> return element as output
// const y = box1.append(createDiv);
// console.log(y) //---> return undefine

//====> (3)
 const z = box1.append(createDiv, document.createElement('p'),"hello word"); //---> word with multiple items but append child work with only one item


