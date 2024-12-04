const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    //check input có trống ko
    if (inputBox.value.trim() === "") { // Kiểm tra input rỗng
        alert("You must add text first!");
        return;
    } 

    //tạo list item
    const li = document.createElement("li");
    li.innerHTML = inputBox.value;
    listContainer.appendChild(li);

    //tạo nút delete
    const span = document.createElement("span");
    span.innerHTML = "\u00d7";
    span.classList.add("delete-btn");
    li.appendChild(span);   

    inputBox.value = ""; // Xóa giá trị input

    saveData(); //lưu data vào local Storage
}

//thay đổi listContainer mỗi khi click
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") {
        e.target.classList.toggle("checked");
        saveData();
    } else if (e.target.tagName === "SPAN") {
        e.target.parentElement.remove();
        saveData();
    }
}, false);

// Save data to localStorage
function saveData() {
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Load data from localStorage
function loadData() {
    listContainer.innerHTML = localStorage.getItem("todoData") || "";
}

// Load saved data when page loads
loadData();
// localStorage.clear();