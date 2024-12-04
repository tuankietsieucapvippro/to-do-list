const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

var listToDo = [];
function addTask() {
    if (inputBox.value.trim() === "") { // Kiểm tra input rỗng
        alert("You must add text first!");
    } else {
        listToDo.push(inputBox.value); // Thêm task vào mảng
        displayList(); // Cập nhật danh sách hiển thị
    }
    inputBox.value = ""; // Xóa giá trị input
}

function displayList() {
    listContainer.innerHTML = ""; // Xóa nội dung cũ
    listToDo.forEach((task, index) => {
        // Tạo phần tử mới cho mỗi task
        let listItem = document.createElement("li");
        listItem.textContent = task;
        listContainer.appendChild(listItem);
    });
}
