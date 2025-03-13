// Fetch data from JSON file
fetch("./assets/img/our-solutions/data.json")
  .then((response) => response.json())
  .then((data) => {
    const ourSolutions = document.getElementById("solutions-container");
    data.forEach((item) => {
        ourSolutions.innerHTML += createOurSolutionsItem(item);
    });
  })
  .catch((error) => console.error("Error fetching data:", error));

// Function to create industries items
function createOurSolutionsItem(item) {
  return `
    <div class="col-lg-4 col-md-12" data-aos="fade-up" data-aos-delay="100">
        <div class="solution-card align-items-center pb-3 rounded-3">
        <div class="image-solution position-relative">
            <img src="${item.image}" width="100%" height="230" alt="visione solutions">
            <div class="position-absolute logo-solution">
            <img src="${item.logo}" width="100%" height="25" alt="visione solutions">
            </div>
        </div>
        <div class="px-3 py-2">
            <h3>${item.title}</h3>
            <p>${item.industries}</p>
            ${item.url ? `<a href="${item.url}" target="_blank" class="button arrow">See Detail</a>` : ""}
        </div>
        </div>
    </div>
    <!-- End Service Item -->
`;
}
