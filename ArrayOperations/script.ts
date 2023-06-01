let array: number[] = [];

function insertElements(): void {
  const insertCountInput: HTMLInputElement = document.getElementById("insertCount") as HTMLInputElement;
  const insertCount: number = parseInt(insertCountInput.value);

  for (let i = 0; i < insertCount; i++) {
    const element: number = parseInt(prompt("Enter element:"));
    array.push(element);
  }

  displayArray();
}

function deleteElements(): void {
  const deleteCountInput: HTMLInputElement = document.getElementById("deleteCount") as HTMLInputElement;
  const deleteCount: number = parseInt(deleteCountInput.value);

  for (let i = 0; i < deleteCount; i++) {
    const element: number = parseInt(prompt("Enter element to delete:"));
    array = array.filter((num) => num !== element);
  }

  displayArray();
}

function displayArray(): void {
  const arrayElementsDiv: HTMLDivElement = document.getElementById("arrayElements") as HTMLDivElement;
  arrayElementsDiv.textContent = array.join(", ");
}
