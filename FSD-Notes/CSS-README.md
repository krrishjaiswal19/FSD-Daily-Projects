# CSS INTRO (FOUNDATION)
## What is CSS?
CSS = Cascading Style Sheets <br>HTML structure deta hai <br>CSS usko design & layout deta hai

## Ways to Add CSS
Inline (avoid) : `<p style="color:red;">Hello</p>`<br> Internal : `<style> p { color: red; } </style>`

External (BEST) : `<link rel="stylesheet" href="style.css">`


## Basic Selectors
Tag Selector <br>
`p { color: blue; }`

Class Selector <br>
`.box { border: 1px solid black;}` <br>
HTML:
`<div class="box"></div>`

ID Selector <br>
`#title {color: green;}`<br>
HTML:
`<h1 id="title">Heading</h1>`

# Colors
3 common ways: <br>
`color: red;` <br>
`color: #ff5733;`        /* HEX */ <br>
`color: rgb(255, 0, 0);` /* RGB */<br>
`color: rgba(0, 0, 0, 0.5); `/* RGBA (opacity) */<br>

👉 RGBA ka last value opacity hota hai (0 = invisible, 1 = solid)

# Font Properties
`font-family: Arial, sans-serif;`<br>
`font-size: 18px;`<br>
`font-weight: bold;`<br>

✔ Best practice: `font-family: 'Segoe UI', Tahoma, sans-serif;`

# Background
`background-color: #f4f4f4;`<br>
`background-image: url('bg.jpg');`<br>
`background-size: cover;`<br>
`background-repeat: no-repeat;`<br>

# Border
`border: 2px solid black;`<br>
`border-radius: 10px;`<br>

# Padding vs Margin (VERY IMPORTANT)
`padding: 20px; `/* inside space */<br>
`margin: 20px;`  /* outside space */<br>

# CSS Box Model (MOST IMPORTANT)
👉 Every HTML element = BOX<br>
| Margin |<br>
| Border |<br>
| Padding |<br>
| Content |<br>

# display property
HTML elements page par kaise behave karenge, ye decide karta hai.

## block
New line se start hota hai<br>
Full width leta hai<br>
`div { display: block; }`<br>
Examples: div, p, h1<br>

## inline
Same line me rehta hai<br>Width / height kaam nahi karta<br>span { display: inline; }<br>Examples: span, a, strong


## inline-block
Inline ki tarah same line<br>Block ki tarah width / height<br>`.box {  display: inline-block; width: 150px; height: 100px; }`<br>👉 Real use: cards, buttons, menu items<br>

# width & height
`.box {
  width: 200px;
  height: 100px;
  background: lightblue;
}`<br>📌 Block & inline-block me kaam karta hai<br>📌 Inline me ignore ho jata hai<br>

# overflow
Content box se bahar nikal jaaye to kya hoga<br>.box {
  width: 150px;
  height: 80px;
  overflow: hidden;
}<br>Values: visible (default), hidden, scroll, auto ✅ most used<br>

# position
Element ko page par exact jagah dene ke liye.

## static (default)
Normal flow, top/left kaam nahi karega

## relative
Khud ki position se move hota hai<br>
`.box {
  position: relative;
  top: 20px;
  left: 30px;
}`

## absolute
Nearest positioned parent ke respect me move hota hai<br>
`.parent {
  position: relative;
}`<br>
`.child {
  position: absolute;
  top: 10px;
  right: 10px;
}`<br>
📌 Parent me position: relative must<br>

# z-index
Kaunsa element upar dikhega<br>
`.box1 { z-index: 1; }`<br>
`.box2 { z-index: 2; }` /* box2 upar */<br>
📌 Sirf positioned elements pe kaam karta hai<br>

# Flexbox kya hota hai?
Flexbox ek layout system hai jisse hum items ko row / column me easily align kar sakte hain.<br>
👉 Flexbox parent (container) aur child (items) pe kaam karta hai.<br>
`.container {  display: flex; }`<br>
🧠 Container vs Items<br>
Container → Parent div jisme display: flex<br>
Items → Container ke andar ke children<br>
<div class="container">
  <div class="card">1</div>
  <div class="card">2</div>
</div>

# flex-direction
Items kis direction me aayenge?<br>
`.container {
  flex-direction: row;      /* default → left to right */<br>
  flex-direction: column;   /* top to bottom */<br>
}`

# justify-content (MAIN AXIS)
Row me → horizontal alignment<br>
Column me → vertical alignment<br>

`justify-content: flex-start;`<br>
`justify-content: center;`<br>
`justify-content: space-between;`<br>
`justify-content: space-around;`<br>
`justify-content: space-evenly;`<br>

🧠 Think: LINE ke along items ko kaise spread karna hai<br>

# align-items (CROSS AXIS)
Row me → vertical alignment<br>
`align-items: stretch;`   /* default */<br>
`align-items: center;`<br>
`align-items: flex-start;`<br>
`align-items: flex-end;`<br>

# flex-wrap
Items ek line me hi rahein ya next line me jayein?<br>
`flex-wrap: nowrap;`  /* default */<br>
`flex-wrap: wrap; `   /* next line me chale jayenge */<br>

# gap
Items ke beech ka space<br>
`gap: 20px;`<br>
👉 margin se better & clean 👍<br>

# align-self (ITEM property)
Sirf ek item ka alignment change karna ho:<br>
`.card-2 {  align-self: center; }`<br>

# Display (deep samjho)
## inline
Same line me aata hai <br>Width/height apply nahi hota <br>👉 span, a <br> `span {  display: inline; }` <br>

## inline-block 
Same line me rahega <br>Width + height apply ho jayega ✅ <br>`.card {  display: inline-block; width: 250px; }` <br>

## none
Element poori tarah gayab <br>Space bhi nahi lega <br>`.hide {  display: none; }` <br>

## visibility: hidden
Element invisible <br>Space lega ❗ <br>`.hidden {  visibility: hidden; }` <br>👉 Interview line: <br> display:none = gayab + no space <br>visibility:hidden = gayab + space rahegi <br>Margin Collapsing (important concept) <br>`div {  margin: 20px; }` <br>Agar do vertical margins milte hain: <br>20px + 30px ❌ <br>sirf bada margin lagega → 30px ✅ <br>👉 Ye sirf top & bottom margins ke saath hota hai <br>

# CSS Units (confusing but simple)
Unit	Meaning <br>px	fixed size <br>%	parent ke respect me <br>em	parent font-size ke hisab se <br>rem	root (html) ke hisab se <br>vh	viewport height <br> vw	viewport width <br>html `{  font-size: 16px; }` <br>`.card {  width: 50vw;  padding: 1rem; }` <br>👉 Best practice: spacing ke liye rem <br>

# Border Radius
`.card {  border-radius: 12px; }`<br> Circle banane ke liye: <br> border-radius: 50%; <br>

# Box Shadow (🔥 stylish look)
`.card {  box-shadow: 0 4px 10px rgba(0,0,0,0.2); }` <br> Format: x-axis | y-axis | blur | color

# Text Shadow 
`h2 {  text-shadow: 1px 1px 3px gray; }`

# Transition (smooth animation)
`.card {  transition: 0.3s; }` <br> `.card:hover {  transform: scale(1.05); }` <br>👉 Without transition = jhatka <br>👉 With transition = smooth 😍 <br>