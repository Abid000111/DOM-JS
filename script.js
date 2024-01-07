// window.alert("hello");
// window.console.log("hello");
// console.log(window);
// console.dir(window);
// console.dir(window.document);
// console.dir(document);
// console.dir(document.body);
// console.log(document.body);
// console.dir(document.head);
// console.dir(document.body.childNodes[1]);




// // choosing theme
// let theme = prompt("Choose a theme: 1) Hacker, 2)White");
// if(theme == "Hacker"){
//     document.body.style.background = "black";
//     document.body.style.color = "green";
// } else{
//     document.body.style.background = "white";
// }




// // changing heading
// document.body.childNodes[1].innerText = "New heading";
// document.getElementsByTagName("h1")[0].textContent = "New heading";

// console.dir(document.body.childNodes[1]);
// console.log(document.body.childNodes[1].childNodes[0]);
// console.log(document.body.childNodes[1].childNodes[1]);
// document.body.childNodes[1].childNodes[1].innerText = "New Heading";




// // accessing elements by id
// console.log(document.getElementById("h1"));
// console.dir(document.getElementById("h1"));




// // accessing elements by class
// console.log(document.getElementsByClassName("heading"));
// console.dir(document.getElementsByClassName("heading"));




// // accessing by tag name
// console.log(document.getElementsByTagName("p"));
// console.dir(document.getElementsByTagName("p"));









// // accessing by id

// // by tag name
// console.log(document.querySelector("p"));        // it will return first matching element
// console.log(document.querySelectorAll("p"));     // it will return all matching elements

// // by class name
// console.log(document.querySelector(".heading"));        // it will return first matching element
// console.log(document.querySelectorAll(".heading"));     // it will return all matching elements

// // by id name
// console.log(document.querySelector("#h1"));
















// // Dom Manipulating





// // properties

// // tagName: it returns the element's tag name
// let firstElement = document.querySelector("#h1");
// console.log(firstElement);
// console.log(firstElement.tagName);
// console.log(document.querySelector("#h1").tagName);

// // inner text: returns the text content of the element and all  its children
// console.dir(document.querySelector("main").innerText);
// console.dir(document.querySelector("main").innerHTML);

// // This code will change all the text of main element
// document.querySelector("main").innerText = "abcd";

// // We can overwrite anything in html by this way through JS
// document.querySelector("body").innerHTML = '<p style="color: red; background-color: rgba(255, 0, 0, 0.219); border: 2px solid red; height: fit-content; width: fit-content; font-size: 5em; position: fixed; top: 40vh; left: 17vw; transform: rotate(-45deg);"><b>Server crashed</b></p>';

// // textContent: returns textual content even for hidden elements
// console.dir(document.querySelector(".heading").textContent);





// // Attributes

// // getAttributes(attr): to get the attribute value
// let div = document.querySelector("div");
// let id = div.getAttribute("id");
// console.log(id);

// let classAttribute = div.getAttribute("class");
// console.log(classAttribute);
// let name = div.getAttribute("name");
// console.log(name);

// // setAttribute(attr, value): to set the attribute value
// let div = document.querySelector("div");
// console.log(div.setAttribute("name", "aboutDOM"));   // this will show undefined in console but the attribute value has changed

// // node.style: to set or change style
// let h2 = document.querySelector("#heading2");
// console.log(h2.style);
// h2.style.textDecoration = "underline";





// // node.classList(): it has many attributes such as add, remove and many more to manipulate DOM
// document.querySelector("#definition").classList.add("newclass");    // It will add new class("newclass") to the element but won't overwrite the existing class





// // insert element

// // node.prepend(el): adds at the start of node (inside)
// let newHeading = document.createElement("h1");
// newHeading.innerHTML = "<i>Hi, I am inserted by JS</i>";
// document.querySelector("body").prepend(newHeading);

// // node.append(el): adds at the end of node (inside)
// let button = document.createElement("button");
// button.innerText = "Subscribe";
// button.style.color = "white";
// button.style.backGroundColor = "red";
// document.querySelector("#definition").append(button);

// // node.before(el): adds before the node (outside)
// let para = document.createElement("p");
// para.innerHTML = "<p><b>## Definition of DOM point by point:</b></p>";
// document.querySelector("#definition").before(para);

// // node.after(el): adds after the node (outside)
// let para = document.createElement("p");
// para.innerHTML = "<p><b>## Definition of DOM point by point:</b></p>";
// document.querySelector("#definition").after(para);

// // node.appendChild(): adds a node as a child
// const newParagraph = document.createElement('p');
// newParagraph.textContent = 'This is a new paragraph';
// const parentElement = document.getElementById('definition');
// parentElement.appendChild(newParagraph);






// // delete element

// // node.remove(): removes the node
// let para = document.createElement("p");
// para.innerHTML = "<p><b>## Definition of DOM point by point:</b></p>";
// document.querySelector("#definition").before(para);
// para.remove()

// // node.removeChild(): removes the node from parent
// // Get the parent element from which you want to remove a child
// const parentElement = document.getElementById('definition');
// // Get the child element that you want to remove
// const childToRemove = document.getElementById('childToRemove');
// // Remove the child element from its parent
// parentElement.removeChild(childToRemove);