# advance Topice with ES6

## basic working of promices

fetch use prority queue in node Runtime where it also have chance to use it's browser implementation if use in browser

it always retuen a string also remember if rejected when network request not fullfield, not at

```javascript
res.status == 404;
```

it use some private field called as data:null, onFullfield , onRejection for updating data value, which direct not assigned by user (these are array fields)

when network request got fullfield then (onFullfield , onRejection ) have function to push data in data veriable

when data variable got updated then it's data(variable) responsiblity to change itsglobal memeory response

## syntex

```javascript
//   m-1
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));

//   m-2
async function getTodo() {
  try {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );
    const data = await response.json();
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}
getToDo();
```

## basic initial use as promices

```javascript
new Promise((res, rej) => {
  setTimeout(() => {
    console.log("promise 2 resolve");
    res();
  }, 1500);
}).then((res, rej) => {
  console.log("promise 2 consumed");
});
// prmices come with default args resolve and reject when res(args) called then it iniciate .then block with args as perimeter
// if reject then same with .catch block
```

## old school code

````javascript
const reqURL = "https://api.github.com/users/roushan-kr";
    const xhr = new XMLHttpRequest();
    let data ={}
    xhr.open("GET", reqURL); // when used it not called to call this
    xhr.send(); // call .open method
    xhr.onreadystatechange = function() {
      console.log(xhr.readyState); // for tracking status
      if (xhr.readyState == 4) {
        console.log(this.responseText);
        }}
````
