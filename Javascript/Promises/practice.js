// Simple Promise Example

let myPromise = new Promise((resolve, reject) => {
  let marks = 70;

  if (marks >= 40) {
    resolve("Pass ho gaye 🎉");
  } else {
    reject("Fail ho gaye 😢");
  }
});

myPromise
  .then(msg => console.log(msg))
  .catch(err => console.log(err));

// promise + setTimeout (Practice #2)

let delayPromise = new Promise((resolve, reject) => {
setTimeout(() => {
    resolve("2 second baad data mila ⏳");
}, 2000);
});

delayPromise.then(data => console.log(data));
// Yaha async kaam ho raha hai
// JS block nahi hota

// Promise Chaining (VERY IMPORTANT 🔥)
// 👉 Ek promise complete → uska result next promise ko
// image_group{"query":["JavaScript promise chaining example","promise chaining then catch flow"]}
new Promise((resolve, reject) => {
    resolve(10);
})
    .then(result => {
    console.log(result); // 10
    return result * 2;
})
    .then(result => {
    console.log(result); // 20
    return result * 3;
})
    .then(result => {
    console.log(result); // 60
})
    .catch(error => console.log(error));
//📌 return karna zaroori hota hai chaining ke liye


// Small Project 🚀
// Fake API Call Simulation (Promise)
    function fakeApiCall() {
        return new Promise((resolve, reject) => {
        console.log("Fetching data...");

        setTimeout(() => {
        let success = true;

        if (success) {
        resolve({
        id: 1,
        name: "Rahul",
        role: "Developer"
        });
        } else {
        reject("Server Error ❌");
        }
       }, 3000);
     });
    }

    fakeApiCall()
     .then(data => {
        console.log("Data received:", data);
        })
     .catch(error => {
        console.log("Error:", error);
        });
/*
🧠 Is project se tumhe ye samajh aayega:
API ka data async aata hai
Promise real backend jaisa behave karta hai
Error handling kaise hoti hai
*/