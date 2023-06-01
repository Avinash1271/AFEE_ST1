var array = [];
function insertElements() {
    var insertCountInput = document.getElementById("insertCount");
    var insertCount = parseInt(insertCountInput.value);
    for (var i = 0; i < insertCount; i++) {
        var element = parseInt(prompt("Enter element:"));
        array.push(element);
    }
    displayArray();
}
function deleteElements() {
    var deleteCountInput = document.getElementById("deleteCount");
    var deleteCount = parseInt(deleteCountInput.value);
    var _loop_1 = function (i) {
        var element = parseInt(prompt("Enter element to delete:"));
        array = array.filter(function (num) { return num !== element; });
    };
    for (var i = 0; i < deleteCount; i++) {
        _loop_1(i);
    }
    displayArray();
}
function displayArray() {
    var arrayElementsDiv = document.getElementById("arrayElements");
    arrayElementsDiv.textContent = array.join(", ");
}
