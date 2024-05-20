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
    <div class="col-lg-4 col-md-6 px-0 my-0" data-aos="fade-up" data-aos-delay="100">
      <a href="${item.url}">
        <div class="image-container position-relative">
          <div class="overlay"></div>
          <img src="${item.image}" width="100%" height="320px"/>
          <div class="d-flex content">
            <h3>${item.title}</h3>
          </div>
        </div>
      </a>
    </div>
`;
}
