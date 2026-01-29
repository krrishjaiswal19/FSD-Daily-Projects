// Promise ka basic syntax
let promise = new Promise(function (resolve, reject) {
let success = true;

if (success) {
    resolve("Kaam ho gaya ✅");
} else {
    reject("Error aa gaya ❌");
}
});
// resolve() = success case
// reject() = failure case

// then() aur catch()
promise
.then(function (result) {
console.log(result); // success
})
.catch(function (error) {
console.log(error); // error
});
/*
📌 Rule yaad rakho:
then() → resolve handle karta hai
catch() → reject handle karta 
*/