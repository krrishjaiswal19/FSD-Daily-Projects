// Create Element
// Make HTML elements from javascript
let li = document.createElement("li");
li.innerText = "Apple";
// understanding 
// Browser mai <li> tag banaa
// Uske under text gaya Apple.
// Abhi DOM mai show nahi hoga Jab tk append na kareu

// append()/appendChild()
// Element ko DOM ke under add krna
let ul = document.getElementById("list");
ul.appendChild(li);
/*
Flow
ul mil gya
li ko uske under chipka diya
abb screen pr dekhne lagega
Difference 
appendChild(): sirf node
append: node+text dono
*/

// removeChild()
// kisi element ko delete krna ho
ul.removeChild(li);
/*
ul parent hai or li child hume batna padta hai
parnet se specific child ko delte krdo
*/

// classList
// Add
li.classList.add("active");
// Remove
li.classList.remove("active");
// toggle
li.classList.toggle("active");
/*
toggle 
class hai so remove neither add
*/