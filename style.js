const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    //check input có trống ko
    if (inputBox.value.trim() === "") { //trim() loại bỏ khoảng trắng
        alert("You must add text first!");
        return;
    } 

    //tạo list item mới để chứa task
    const li = document.createElement("li");  //chỉ tạo trong mem
    li.innerHTML = inputBox.value; //thêm data từ ô input vào li
    listContainer.appendChild(li); //hiển thị lên html bằng cách gắn vào lisContainer

    //tạo nút delete
    const span = document.createElement("span"); //tạo trong mem
    span.innerHTML = "\u00d7"; //dấu x
    span.classList.add("delete-btn"); //thêm css cho span tên là delete-btn
    li.appendChild(span);    //hiển thị

    inputBox.value = ""; // Xóa giá trị input

    saveData(); //lưu data vào local Storage
}

//thay đổi listContainer mỗi khi click
listContainer.addEventListener("click", function(e) {
    if (e.target.tagName === "LI") { //nếu click vào e là li
        e.target.classList.toggle("checked"); //toggle là chuyển đổi checked của e
        saveData();
    } else if (e.target.tagName === "SPAN") { //nếu click vào e là span
        e.target.parentElement.remove(); //xoá cha của e là li
        saveData();
    }
});

// Save data to localStorage
function saveData() {
    // Lưu toàn bộ HTML của container vào localStorage với key "todoData"
    localStorage.setItem("todoData", listContainer.innerHTML);
}

// Load data from localStorage
function loadData() {
    listContainer.innerHTML = localStorage.getItem("todoData") || "";
}

// Load saved data when page loads
loadData();
