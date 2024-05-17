// Fetch data from JSON file
fetch("./assets/img/industries/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Render industries items
    const industriesContainer = document.getElementById("industries-container");
    data.forEach((item) => {
      industriesContainer.innerHTML += createIndustriesItem(item);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to create industries items
function createIndustriesItem(item) {
  return `
    <div class="col-lg-4 col-md-12 px-0 my-0" data-aos="zoom-in" data-aos-delay="100">
      <a href="${item.url}">
      <div class="image-container" style="background-image: url(${item.image});">
        <div class="overlay d-flex p-3 justify-content-center align-items-center">
          <h3 class="px-3 py-2 text-center">${item.title}</h3>
        </div>
      </div>
      </a>
    </div>
`;
}
