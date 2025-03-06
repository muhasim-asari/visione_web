// Fetch data from JSON file
fetch("./assets/img/our-clients/data.json")
  .then(response => response.json())
  .then(data => {
    // Render clients
    const clientsContainer = document.getElementById("clients-container");
    data.forEach(client => {
      clientsContainer.innerHTML += createClientItem(client);
    });
  })
  .catch(error => console.error('Error fetching data:', error));

// Function to create client items
function createClientItem(client) {
  return `
    <div class="col-xl-2 col-md-2 col-6 client-logo">
      <img src="${client.image}" class="img-fluid" alt="${client.alt}" />
    </div>
  `;
}
