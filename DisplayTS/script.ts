interface TripDay {
    day: number;
    content: string[];
  }
  
  const tripDays: TripDay[] = [
    { day: 1, content: ["Reach the destination"] },
    { day: 2, content: ["City Tour in a company tourist bus", "Breakfast & Dinner"] },
    { day: 3, content: ["Visit Chang-La"] },
    { day: 4, content: ["Back to your home"] },
  ];
  
  function createDropdownOptions(): void {
    const dropdown = document.getElementById("days-dropdown");
  
    tripDays.forEach((tripDay) => {
      const option = document.createElement("option");
      option.value = tripDay.day.toString();
      option.text = `Day ${tripDay.day}`;
      dropdown?.appendChild(option);
    });
  }
  
  function displayDayContent(selectedDay: number): void {
    const contentDiv = document.getElementById("content-div");
    contentDiv!.innerHTML = "";
  
    const selectedTripDay = tripDays.find((tripDay) => tripDay.day === selectedDay);
  
    if (selectedTripDay) {
      selectedTripDay.content.forEach((content) => {
        const contentElement = document.createElement("p");
        contentElement.textContent = content;
        contentDiv!.appendChild(contentElement);
      });
    }
  }
  
  function handleDropdownChange(): void {
    const dropdown = document.getElementById("days-dropdown") as HTMLSelectElement;
    const selectedDay = parseInt(dropdown.value);
    displayDayContent(selectedDay);
  }
  
  // Create the dropdown options on page load
  window.onload = function () {
    createDropdownOptions();
  };
  
  // Add event listener to the dropdown
  const dropdown = document.getElementById("days-dropdown") as HTMLSelectElement;
  dropdown.addEventListener("change", handleDropdownChange);
  