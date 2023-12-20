const promise1 = new Promise(function (res, rej) {
  setTimeout(() => {
    console.log("Async promise is resolved");
    res("Done");
  }, 1000);
});
promise1.then((res, rej) => {
  console.log("promise consumed");
  console.log(res);
});

new Promise((res, rej) => {
  setTimeout(() => {
    console.log("promise 2 resolve");
    res();
  }, 1500);
}).then((res, rej) => {
  console.log("promise 2 consumed");
});

const promise2 = new Promise((res, rej) => {
  const error = false;
  if (!error) {
    res({ userName: "roushan", sem: "5th" });
  } else {
    rej({ ERROR: "Somthing went worng" });
  }
});

// chaining of promises
promise2
  .then((user) => {
    console.log(user);
    return user.userName; // work
  })
  .then((uName) => {
    // catch value returned by upper .then block
    console.log(uName); //roushan
  })
  .catch((e) => {
    console.log(e);
  })
  .finally(() => {
    console.log("Prmise2 do somthing");
  });

// promices also did not have ultimate time to resolve or reject

/* 
// This not work 
const somting =promise2
.then((user) => {
  console.log(user, "this1");
  return user.userName; // work
})
console.log(somting, "this2"); // Promise { <pending> } this2
// thatWhy we use .then after that
*/

// method 2 to handel promices

const promise3 = new Promise((res, rej) => {
  const error = true;
  if (!error) {
    res({ userName: "java", sem: null });
  } else {
    rej({ ERROR: "Somthing went worng" });
  }
});

(async () => {
  try {
    const res = await promise3;
    console.log(res);
  } catch (error) {
    console.log(error);
  } finally {
    console.log("Finally block executed");
  }
})();

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
getTodo();

// anothher way
fetch("https://jsonplaceholder.typicode.com/todos/2")
  .then((res) => res.json())
  .then((data) => console.log(data))
  .catch((err) => console.log(err));


// fetch use prority queue in node Runtime where it also have chance to use it's browser implementation if use in browser

// it always retuen a string also remember if rejected when netwirk request not fullfield not at res 404

// it use some private field called as data:null,  onFullfield , onRejection which direct not assigned by user (these are array fields)

// when network request got fullfield then (onFullfield , onRejection ) have function to push data in data veriable 
// when data variable got updated then it's data responsiblity to change itsglobal memeory response
