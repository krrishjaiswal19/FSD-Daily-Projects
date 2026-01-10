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

## justify-content (MAIN AXIS control karta hai)
👉 Row (default) me = left ➝ right <br>
👉 Column me = top ➝ bottom <br>
Value	Kya karta hai? 
1. flex-start	(items left se start) <br>
2. flex-end	items (right side) <br>
3. center	(beech me) <br>
4. space-between	(first & last edge pe) <br>
5. space-around	(har item ke around space) <br>
6. space-evenly	(equal space everywhere) <br>
`.container {` <br>
  `display: flex;` <br>
  `justify-content: space-between;` <br>
`}` <br>

## align-items VS align-content (CONFUSION CLEAR)
### align-items 
👉 Single line items ko cross-axis me align karta hai <br> 
align-items: center; <br> 
Value	Meaning<br>
flex-start	(upar) <br>
center	(beech mai)<br>
flex-end	(niche )<br>
stretch	(height full) <br>
### align-content   <br>
👉 Multiple rows/columns ke beech spacing control karta hai  <br>
⚠️ Kaam karega jab:  <br>

`flex-wrap: wrap;`  <br>
`align-content: space-between;`  <br>

📌 Rule yaad rakho <br> 
👉 align-items = items ke liye <br>
👉 align-content = rows ke liye <br>
## flex-basis, grow, shrink (INTERVIEW GOLD 🔥) <br>
`.card {` <br>
  `flex-basis: 200px;` <br>
  `flex-grow: 1;` <br>
  `flex-shrink: 1;` <br>
`}`<br>
🔹 flex-basis <br>
👉 item ka starting width <br>
🔹 flex-grow <br>
👉 extra space mile to kitna badhe <br>
🔹 flex-shrink <br>
👉 space kam ho to kitna sikude <br>
📌 Shortcut: <br>
`flex: grow shrink basis;` <br>
`flex: 1 1 200px;` <br>
 
## PERFECT CENTERING (Most Asked 🔥) <br>
`.container { `<br>
  `display: flex;` <br>
  `justify-content: center;` <br>
  `align-items: center; `<br>
`}`<br>

👉 Vertically + Horizontally center <br>
👉 100% trusted method 💯 <br>
## Flexbox Card Layout (Responsive) <br>
`.cards { `<br>
  `display: flex;` <br>
  `gap: 20px;` <br>
  `flex-wrap: wrap;` <br>
`}` <br>

`.card {` <br>
  `flex: 1 1 250px;` <br>
`}` <br>

👉 Mobile + Desktop dono me kaam karega <br>
# CSS Grid Basics (Easy → Strong)
## Grid Container & Grid Items
👉 Jab kisi element ko display: grid dete ho, wo grid container ban jata hai. <br>
👉 Uske andar ke direct children grid items hote hain.<br>
`.container {` <br>
 ` display: grid;` <br>
`}` <br>

<div class="container">
  <div>Item 1</div>
  <div>Item 2</div>
  <div>Item 3</div>
</div>

## grid-template-columns & grid-template-rows <br>
👉 Batata hai kitne columns / rows aur unka size. <br>
`.container {` <br>
`  display: grid;` <br>
`  grid-template-columns: 200px 200px 200px;` <br>
}` <br>

🔹 3 columns ban gaye, har ek 200px ka. <br>
Rows ke liye: <br>
`grid-template-rows: 150px 150px;` <br>
## gap <br>
👉 Grid items ke beech ka space. <br>
`.container {` <br>
`  gap: 15px;` <br>
`}` <br>
 (Old names: row-gap, column-gap) <br>
## repeat() function <br>
👉 Same size ke columns baar-baar likhne se bachata hai. <br>

`grid-template-columns: repeat(3, 1fr);` <br>

🔹 Matlab: 3 equal columns <br>

## fr unit (🔥 MOST IMPORTANT) <br>
👉 fr = fraction of available space <br>

`grid-template-columns: 1fr 1fr 1fr;` <br>

✔ Screen jitni bhi ho, 3 equal columns <br>
✔ Responsive layouts ke liye best <br>

👀 Visual samajhne ke liye (CSS Grid layouts) <br>4
## Simple Grid Layout Example <br>
`.container {` <br>
  `display: grid;` <br>
  `grid-template-columns: repeat(4, 1fr);` <br>
  `gap: 20px;` <br>
`}` <br>
# CSS GRID ADVANCED — Easy Way
## grid-template-areas (MOST IMPORTANT)
Isse tu layout ko naam dekar design karta hai (super readable).<br>
Example soch: <br>
Header <br>
Sidebar <br>
Main <br>
Footer <br>

`.container {` <br>
  `display: grid;` <br>
  `grid-template-areas:` <br>
    `"header header"` <br>
    `"sidebar main"` <br>
    `"footer footer";` <br>
  `grid-template-columns: 1fr 3fr;` <br>
  `grid-template-rows: auto 1fr auto; `<br>
`}` <br>

`.header { grid-area: header; }` <br>
`.sidebar { grid-area: sidebar; } `<br>
`.main { grid-area: main; }` <br>
`.footer { grid-area: footer; }` <br>

📌 Benefit: <br>
Layout ko dekh kar hi samajh aa jata hai — no maths, no confusion. <br>
## align-content vs justify-content <br>
👉 POORE GRID ko move karta hai, items ko nahi. <br>
Property	Direction <br>
justify-content	horizontal (left–right) <br>
align-content	vertical (top–bottom) <br>
`.container {` <br>
  `justify-content: center;` <br>
  `align-content: space-between;` <br>
`}` <br>

📌 Tab kaam karta hai jab: <br>
grid ki height/width fixed ho <br>
extra space available ho <br>
## Nested Grid (Grid ke andar Grid) <br>
Ek grid item ke andar aur ek grid. <br>

`.main {` <br>
  `display: grid;` <br>
  `grid-template-columns: repeat(2, 1fr);` <br>
  `gap: 10px;` <br>
`}` <br>

🧠 Use case: <br>
cards <br>
image gallery <br>
dashboard sections <br>
## Grid + Flex Combination (REAL WORLD TRICK) <br>
👉 Grid = page layout <br>
👉 Flex = alignment inside sections <br>
 
Example: <br>
Page → Grid <br>
Navbar → Flex <br>

`.header {` <br>
  `display: flex;` <br>
  `justify-content: space-between;` <br>
  `align-items: center;` <br>
`}` <br>

📌 Industry standard approach 👌 <br>
 📱 RESPONSIVE DESIGN (START) <br>
## Media Queries (Game changer) <br>
`@media (max-width: 768px) {` <br>
  `body {`<br>
    `background: lightgray;` <br>
  `}` <br>
`}`<br>

🧠 Matlab: <br>

“Jab screen 768px ya choti ho → ye CSS apply karo” <br>
## Breakpoints (Yaad rakh) <br>
Device	Width <br>
Mobile	0 – 600px <br>
Tablet	601 – 1024px <br>
Desktop	1025px+ <br>

## Mobile-First Design (MOST IMPORTANT)
❌ Galat approach (Desktop first) <br>
/* pehle desktop, baad me mobile */ <br>
✅ Sahi approach (Mobile first) <br> <br>
/* Default = Mobile */ <br>
`body {` <br>
  `font-family: Arial;` <br>
`}` <br> <br>
/* Tablet */ <br>
`@media (min-width: 768px) {` <br>
`}` <br>  <br>
/* Desktop */ <br>
`@media (min-width: 1024px) {` <br>
`}` <br> <br>
📌 Rule: <br>
➡️ Pehle mobile ka CSS <br>
➡️ Phir media queries se badi screens <br> <br>
Soch: <br>
📱 → 💻 (not 💻 → 📱) <br>
## Responsive Navbar (Concept) <br>
Desktop: Links horizontal <br>
Home | About | Services | Contact <br> <br>
Mobile: Links hide <br>
☰ Hamburger menu <br>
☰  <br>
Click → menu open <br>
## Hamburger Menu Concept (Simple Logic) <br>
HTML <br>
class="navbar" <br>
class="logo">MySite <br>
class="menu-icon" onclick="toggleMenu()" <br>
    ☰ <br>
class="nav-links" id="navLinks"<br>
    <li>Home</li> <br>
    <li>About</li> <br>
    <li>Services</li> <br>
    <li>Contact</li> <br>
CSS <br>
(Mobile First) <br>
`.navbar {` <br>
  `display: flex;` <br>
  `justify-content: space-between;` <br>
  `padding: 10px;` <br>
`}` <br>
`.nav-links {` <br>
  `display: none;` <br>
  `flex-direction: column;` <br>
`}` <br>
`.menu-icon {` <br>
  `font-size: 24px;` <br> 
  `cursor: pointer;` <br>
`}`<br>
 /* Desktop */ <br>
`@media (min-width: 768px) {` <br>
  `.menu-icon {` <br>
    `display: none;` <br>
  `}` <br>
  `.nav-links {` <br>
    `display: flex;` <br>
    `flex-direction: row;` <br>
    `gap: 20px;` <br>
  `}`<br>
`}` <br>
JavaScript (VERY SIMPLE) <br>
`function toggleMenu() {` <br>
  `let menu = document.getElementById(" navLinks");`<br>
  `if (menu.style.display === "flex") {` <br>
    `menu.style.display = "none";` <br>
  `} else {` <br>
    `menu.style.display = "flex";` <br>
  `}` <br>
`}` <br>
🧠 Logic samjho: <br>
👉 click → menu hide/show <br>
## Responsive Font Sizing <br>
❌ Fixed (avoid) <br>
`h1 {` <br>
  `font-size: 40px;` <br>
`}` <br>
✅ Responsive (best) <br>
`h1 {` <br>
  `font-size: clamp(24px, 5vw, 40px);` <br>
`}` <br>
📌 clamp(min, preferred, max) <br>
Mobile → small <br>
Desktop → large <br>
## Fluid Images (Image kabhi tootni nahi chahiye) <br>
Rule <br>
`img {` <br>
  `max-width: 100%`;` <br>
  `height: auto;` <br>
``}` <br>
📌 Image parent ke bahar kabhi nahi niklegi <br>
## Hero Section (Responsive) <br>
HTML <br>
`section class="hero"` <br>
  `<h1>Build Modern Websites` <br>
  `<p>Learn responsive design step by step</p> `<br>
  `<button>Get Started</button>` <br>
CSS <br>
`.hero {` <br>
  `padding: 40px 20px;` <br>
  `text-align: center;` <br>
`}` <br>
`.hero h1 {` <br>
  `font-size: clamp(26px, 6vw, 48px);` <br>
`}` <br>
`@media (min-width: 768px) {` <br>
  `.hero {` <br>
    `padding: 80px;` <br>
  `}` <br>
`}`<br>
# CSS Transition Basics (Simple Language) <br>
❓ Transition kya hota hai? <br>
Transition ka matlab hota hai: ek state se dusri state tak smooth animation <br>
Jaise: color achanak change na ho thoda smooth effect ke sath change ho <br>
## transition-property <br>
Batata hai kaunsa CSS property animate hogi <br> 
`transition-property: background-color;` <br> 
👉 Sirf background-color animate hogi <br>
## transition-duration <br>
Batata hai animation kitni der chalegi <br>
`transition-duration: 0.4s;` <br>
👉 0.4 second me animation complete hogi <br>
## transition-delay <br>
Batata hai animation start hone se pehle ka wait time <br>
`transition-delay: 0.1s;` <br> <br>
👉 Hover ke 0.1s baad animation start hogi <br>
✅ Short & Professional Way (Recommended) <br>
`transition: all 0.4s ease;` <br> <br>
Meaning: <br>
all → sab properties <br>
0.4s → duration <br>
ease → smooth feeling <br>
# Button Hover Animations (3 Buttons) <br>
🔘 Button 1 – Color Change Button <br>
HTML <br>
`<button class="btn btn-1">Hover Me</button>` <br>
CSS <br>
`.btn {` <br>
  `padding: 12px 24px;` <br>
  `border: none;` <br>
  `cursor: pointer;` <br>
  `font-size: 16px;` <br>
 `transition: all 0.3s ease;` <br>
`}` <br>
`.btn-1 {` <br>
  `background-color: blue;` <br>
  `color: white;` <br>
`}` <br>
`.btn-1:hover {`<br>
  `background-color: darkblue;` <br>
`}` <br> <br>
## 📌 Logic (Hinglish) <br>
Hover pe background smoothly dark ho raha hai. <br>
🔘 Button 2 – Scale + Shadow Button <br>
HTML <br>
`<button class="btn btn-2">Scale Button</button>` <br>
CSS <br>
`.btn-2 {` <br>
  `background: green;` <br>
  `color: white;` <br>
`}` <br>
`.btn-2:hover {` <br>
  `transform: scale(1.1);` <br>
  `box-shadow: 0 8px 20px rgba(0,0,0,0.3);` <br>
`}` <br>
## 📌 Logic <br>
`scale(1.1)` → button thoda bada <br>
shadow → depth feeling <br>
🔘 Button 3 – Slide Effect Button <br>
HTML <br>
`<button class="btn btn-3">Slide Hover</button>` <br>
CSS <br>
`.btn-3 {` <br>
  `background: black;` <br>
  `color: white;` <br>
`}` <br>
`.btn-3:hover {` <br>
  `transform: translateY(-5px);` <br>
`}` <br>
## 📌 Logic <br>
Hover pe button upar slide karta hai. <br>
# Card Hover Effects (2 Cards) <br>
## Card 1 – Lift Card <br>
HTML <br>
`<div class="card">` <br>
  `<h3>Hover Card</h3>` <br>
  `<p>This is a simple hover card.</p>` <br>
`</div>` <br>
CSS <br>
`.card {` <br>
  `width: 250px;` <br>
  `padding: 20px;` <br>
  `background: #f5f5f5;` <br>
  `border-radius: 10px;`  <br>
 `transition: all 0.4s ease;`  <br>
`}` <br>
`.card:hover {` <br>
  `transform: translateY(-10px);` <br>
  `box-shadow: 0 12px 25px rgba(0,0,0,0.2);` <br>
`}` <br>
 📌 Logic
Card hover pe upar uthta hai + shadow aati hai.  <br>
## Card 2 – Zoom Card <br>
HTML <br>
`<div class="card zoom-card">`<br>
  `h3>Zoom Card</h3>` <br>
  `p>Hover to zoom.</p>` <br>
`</div>` <br>
CSS <br>
`.zoom-card:hover { ` <br>
  `transform: scale(1.05);` <br>
`}` <br>
## 📌 Logic <br>
Card thoda zoom hota hai – modern UI effect. <br>
# CSS Keyframes – Concept Clear Karo
## @keyframes kya hota hai?
@keyframes se hum batate hain: <br>
animation kaise start hogi, beech mein kya hoga, aur end mein kya hoga <br>
Socho jaise movie ke frames 📽️ <br>
har frame = ek step <br>
## from → to syntax (Simple version) <br>
`@keyframes moveBox {` <br>
  `from {` <br>
    `transform: translateX(0);` <br>
  `}`<br>
  `to {` <br>
    `transform: translateX(200px);` <br>
`}` <br>
`}` <br>
📌 Matlab: <br>
from = starting position <br>
to = ending position <br>
## 0% → 100% (Advanced control) <br>
`@keyframes colorChange {` <br>
  `0%   { background: red; }` <br>
  `50%  { background: yellow; }` <br>
  `100% { background: green; }` <br>
`}` <br>
Beech ke steps control kar sakte ho <br>
# Animation Properties (MOST IMPORTANT) <br>
`.box {` <br>
  `animation-name: moveBox;` <br>
  `animation-duration: 2s;` <br>
  `animation-iteration-count: infinite;` <br>
  `animation-timing-function: ease-in-out;` <br>
  `animation-fill-mode: forwards;` <br>
`}` <br> <br>
🔸 Property Explanation (Hinglish) <br>
Property	Matlab <br>
`animation-name`	kaunsa keyframe use hoga <br>
`animation-duration`	kitne time mein complete <br>
`animation-iteration-count`	kitni baar chale (infinite) <br>
`animation-timing-function`	speed curve (ease, linear, etc) <br>
`animation-fill-mode`	animation ke baad state <br>
## animation-timing-function <br>
ease        /* slow → fast → slow */ <br>
linear      /* same speed */ <br>
ease-in     /* slow start */ <br>
ease-out    /* slow end */ <br>
ease-in-out /* smooth */ <br>
5️⃣ animation-fill-mode <br>
`animation-fill-mode: forwards;` <br> <br>
📌 Matlab: <br> 
animation khatam hone ke baad last position pe hi rahe <br>
