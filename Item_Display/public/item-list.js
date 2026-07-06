const items = [
  {
    id: 1,
    name: "Mouse",
    category: "IT",
    inventory: 200,
    price: 240,
  },
  {
    id: 2,
    name: "Keyboard",
    category: "IT",
    inventory: 150,
    price: 490,
  },
  {
    id: 3,
    name: "Monitor",
    category: "IT",
    inventory: 75,
    price: 3200,
  },
  {
    id: 4,
    name: "USB Cable",
    category: "IT",
    inventory: 350,
    price: 120,
  },
  {
    id: 5,
    name: "Notebook",
    category: "Stationery",
    inventory: 500,
    price: 55,
  },
  {
    id: 6,
    name: "Pen",
    category: "Stationery",
    inventory: 900,
    price: 15,
  },
  {
    id: 7,
    name: "Desk Lamp",
    category: "Home",
    inventory: 120,
    price: 750,
  },
  {
    id: 8,
    name: "Water Bottle",
    category: "Lifestyle",
    inventory: 260,
    price: 210,
  },
  {
    id: 9,
    name: "Backpack",
    category: "Lifestyle",
    inventory: 95,
    price: 980,
  },
  {
    id: 10,
    name: "Phone Stand",
    category: "IT",
    inventory: 180,
    price: 160,
  },
  {
    id: 11,
    name: "Headphones",
    category: "IT",
    inventory: 130,
    price: 1450,
  },
];

// Execute code once the DOM is fully loaded
document.addEventListener("DOMContentLoaded", () => {
  // Grab HTML elements
  const selectElement = document.getElementById("item-list");
  const displayId = document.getElementById("item-id");
  const displayName = document.getElementById("item-name");
  const displayCategory = document.getElementById("item-category");
  const displayInventory = document.getElementById("item-inventory");
  const displayPrice = document.getElementById("item-price");

  // Create default empty option
  const defalutOption = document.createElement("option");
  defalutOption.value = "";
  defalutOption.textContent = "";
  selectElement.appendChild(defalutOption);

  // 2. Populate the select element with the items array
  items.forEach((item) => {
    const option = document.createElement("option");
    option.value = item.id;
    option.textContent = item.name;
    selectElement.appendChild(option);
  });

  // Helper function to clear the display data
  const clearDisplayData = () => {
    displayId.textContent = "";
    displayName.textContent = "";
    displayCategory.textContent = "";
    displayInventory.textContent = "";
    displayPrice.textContent = "";
  };

  // Helper function to populate display data with the selected item
  const updateDisplayData = (item) => {
    displayId.textContent = item.id;
    displayName.textContent = item.name;
    displayCategory.textContent = item.category;
    displayInventory.textContent = item.inventory;
    // Formatting the price with a currency symbol for a better look
    displayPrice.textContent = `$${item.price.toFixed(2)}`;
  };

  // 3. Add event listener to detect when a user selects an option
  selectElement.addEventListener("change", (event) => {
    const selectedId = event.target.value;

    if (selectedId === "") {
      // If empty option is selected, clear the data
      clearDisplayData();
    } else {
      // Find the item by ID.
      // Note: event.target.value returns a string, so we convert it to number or use ==
      const selectedItem = items.find((item) => item.id == selectedId);
      if (selectedItem) {
        updateDisplayData(selectedItem);
      }
    }
  });
});
