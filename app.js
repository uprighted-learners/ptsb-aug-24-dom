/* 
    ? Document Object Model (DOM)
    * an object comprising the structure and content of an .html file

    ? Basic Structure
    * Document
        * HTML
            * Head
                * Meta tags
                * Link tags
                * Title tag
                * ... and all of its content (text, attribute, comments)
            * Body
                * Nav
                * Header
                * h1's, img's, aside's, div's, and so on...
                * ...and all of their attributes and values
*/

console.log(navigator.language)
console.log(window.innerWidth)

// ? Create our first element using DOM

// use .createELement method on a  document object
let h1 = document.createElement("h1")

// modify .textContent property to change rendered text value
h1.textContent = "Document Object Model Lesson"
console.log(h1)

// append the new element we created & modified (child) to its parent element
document.body.appendChild(h1)

/* 
    ? Challenge
    * create a footer element
    * change its text value to your name
    * append to the bottom of the page
*/

let footer = document.createElement("footer")
footer.textContent = "Paul Niemczyk"
footer.style.backgroundColor = "white"
footer.style.borderTop = "2px solid black"
document.body.appendChild(footer)

/* 
    ? Accessing elements using DOM
    * Elements can be accessed sever different ways. Most common are:
    * getElementById()
    * getElementsByClassName() [HTMLCollection]
    * getElementsByTagName() [HTMLCollection]
    * querySelector()
    * querySelectorAll() [NodeList]
*/

/* 
    ? getElementById()
    * returns the first instance of an id element
*/

let ulToDo = document.getElementById("ulToDo")
console.log(ulToDo)

/* 
    ? getElementsByClassName()
    * returns an HTML Collection of class instances
    * array-like object (cannot use array methods)
    * allows access to index, length, etc.
    * can be looped through
*/

let listItems = document.getElementsByClassName("listItem")
console.log(listItems)
console.log(listItems[0])

for (i of listItems) {
    if (i.textContent[0] === "C") {
        i.style.color = "blue"
    }
}

/* 
    ? getElementsByTagName()
    * just like above but for elements
*/

let allH1 = document.getElementsByTagName("h1")
console.log(allH1)

/* 
    ? .querySelector()
    * returns the first instance of an element
    * access using tag name, id, class name, or even relationship
    * MUST SPECIFY whether it's a tag, ., or #
    * ex: "nav", for element, ".nav" for class, "#nav" for id
*/

let myFooter = document.querySelector("footer")
console.log(myFooter)

let thatBlueLi = document.querySelector("body > .list > #ulToDo > li:nth-of-type(1)")
console.log(thatBlueLi)

/* 
    ? Challenge
    * create another unordered list, called urgent to do
    * you may hardcode this part in or you can create dynamically
    * loop and within that loop, create 5 list items
    * you can have it just say some random text
    * make sure each one says something from an array of random items
    * make sure that each one is colored red
*/

let urgentToDo = document.getElementsByClassName("urgentToDo")[0]
console.log(urgentToDo)

const randomStuff = ["get milk", "wear pants", "go get shwasted", "something else"]

randomStuff.forEach((item, index) => {
    let li = document.createElement("li")
    li.textContent = item
    li.style.color = "red"
    li.className = "urgentItems"
    urgentToDo.appendChild(li)
})

/* 
    ? .querySelectorAll()
    * returns a NodeList of all instances of a class, id, or element(s)
    * allows the use of array methods to iterate over
*/

let newLi = document.querySelectorAll(".urgentItems")
console.log(newLi)

newLi.forEach(i => console.log(i))

/* 
    ? HTMLCollection vs NodeList

    * HTMLCollection  returns a list that is LIVE
    * live lists show newly created elements even after their lookup
    
    * NodeList returns a static list of elements
    * it does NOT show newly created elements
*/

const htmlCollection = document.getElementsByClassName("listItem")
const nodeList = document.querySelectorAll(".listItem")
console.log(htmlCollection, nodeList)

const newItem = document.createElement("li")
newItem.textContent = "new item"
newItem.className = "listItem"
ulToDo.appendChild(newItem)

for (i of nodeList) {
    i.style.color = "rebeccapurple"
}

for (i of htmlCollection) {
    i.style.color = "salmon"
}