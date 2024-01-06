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