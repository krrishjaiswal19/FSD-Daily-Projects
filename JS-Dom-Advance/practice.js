function addItem() {
    let input = document.getElementById("itemInput");
    let text = input.value;

    let li = document.createElement("li");
    li.innerText = text;

    let btn = document.createElement("button");
    btn.innerText = "Delete";

    btn.onclick = function () {
    li.remove();
};

    li.appendChild(btn);

    document.getElementById("list").appendChild(li);

    input.value = "";
}
