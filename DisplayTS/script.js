var tripDays = [
    { day: 1, content: ["Reach the destination"] },
    { day: 2, content: ["City Tour in a company tourist bus", "Breakfast & Dinner"] },
    { day: 3, content: ["Visit Chang-La"] },
    { day: 4, content: ["Back to your home"] },
];
function createDropdownOptions() {
    var dropdown = document.getElementById("days-dropdown");
    tripDays.forEach(function (tripDay) {
        var option = document.createElement("option");
        option.value = tripDay.day.toString();
        option.text = "Day ".concat(tripDay.day);
        dropdown === null || dropdown === void 0 ? void 0 : dropdown.appendChild(option);
    });
}
function displayDayContent(selectedDay) {
    var contentDiv = document.getElementById("content-div");
    contentDiv.innerHTML = "";
    var selectedTripDay = tripDays.find(function (tripDay) { return tripDay.day === selectedDay; });
    if (selectedTripDay) {
        selectedTripDay.content.forEach(function (content) {
            var contentElement = document.createElement("p");
            contentElement.textContent = content;
            contentDiv.appendChild(contentElement);
        });
    }
}
function handleDropdownChange() {
    var dropdown = document.getElementById("days-dropdown");
    var selectedDay = parseInt(dropdown.value);
    displayDayContent(selectedDay);
}
// Create the dropdown options on page load
window.onload = function () {
    createDropdownOptions();
};
// Add event listener to the dropdown
var dropdown = document.getElementById("days-dropdown");
dropdown.addEventListener("change", handleDropdownChange);
