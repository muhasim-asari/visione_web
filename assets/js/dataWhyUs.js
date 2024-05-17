// Fetch data from JSON file
fetch("./assets/img/icons/dataWhyUs.json")
  .then((response) => response.json())
  .then((data) => {
    // Render Why Us sections
    const whyUsContainer = document.getElementById("why-us-container");
    data.forEach((item) => {
      whyUsContainer.innerHTML += createWhyUsItem(item);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to create Why Us section
function createWhyUsItem(item) {
  return `
  <div class="col-xl-3 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
    <div class="icon-box d-flex flex-column gap-2 rounded-3 px-3 py-5 h-100">
      <img src="${item.icon}" width="64" height="64" alt="${item.title}">
      <h4 class="title">${item.title}</h4>
      <p>${item.description}</p>
    </div>
  </div>
`;
}
