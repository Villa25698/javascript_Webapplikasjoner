const users = [
  { id: 0, name: "Trude", age: 77 },
  { id: 1, name: "Simen", age: 85 },
  { id: 2, name: "Lars", age: 99 },
  { id: 3, name: "Ali", age: 34 },
  { id: 4, name: "Finn", age: 60 },
  { id: 5, name: "Kåre", age: 70 },
  { id: 6, name: "Hanne", age: 20 },
  { id: 7, name: "Åse", age: 21 },
  { id: 8, name: "Anne", age: 6 },
  { id: 9, name: "Amanda", age: 31 },
  { id: 10, name: "Morgan", age: 87 }
];

// Hente ut HTML #id-er
const userUl = document.getElementById("users");
const searchInput = document.getElementById("name");
const filterInput = document.getElementById("age");
const filterButton = document.getElementById("filter");

// Bruke template literals `` til å lage HTML
const createTableUI = (users) => {
  userUl.innerHTML = null;
  userUl.innerHTML += `<li><span>Id</span><span>Navn</span><span>Alder</span></li>`;
  
  for (const user of users) {
    userUl.innerHTML += `<li>
      <span>${user.id}</span>
      <span>${user.name}</span>
      <span>${user.age}</span>
    </li>`;
  }
};

// Oppdatere grensesnittet basert på endringer i lister
const handleSearch = () => {
  const searchTerm = searchInput.value.toLowerCase();
  
  // Bruke ulike array metoder (.find og .filter) for å søke i en liste
  const filteredUsers = users.filter((user) =>
    user.name.toLowerCase().includes(searchTerm)
  );
  
  createTableUI(filteredUsers); 
};

// Bruke ulike array metoder (.find og .filter) for å søke i en liste
const handleFilter = () => {
  const minAge = parseInt(filterInput.value);
  if (!isNaN(minAge)) {
    const filteredUsers = users.filter((user) => user.age >= minAge);
    createTableUI(filteredUsers); // Oppdaterer grensesnittet
  }
};

// Lytte til ulike eventer (click og keyup)
searchInput.addEventListener("keyup", handleSearch);
filterButton.addEventListener("click", handleFilter);

// Bruk av objekter og lage og kombinere funksjoner
const main = () => {
  createTableUI(users);
};

main();
