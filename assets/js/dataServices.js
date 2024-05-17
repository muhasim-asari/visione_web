fetch("./assets/img/icons/data.json")
  .then((response) => {
    if (!response.ok) {
      throw new Error("Failed to fetch data");
    }
    return response.json();
  })
  .then((data) => {
    // Lakukan sesuatu dengan data yang diambil
    renderServices(data);
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });

function renderServices(services) {
  const servicesContainer = document.getElementById("service-offers");
  services.forEach((service) => {
    const serviceHTML = `
      <div class="col-xl-4 col-md-12 aos-init aos-animate" data-aos="fade-up" data-aos-delay="100">
        <div class="icon-box d-flex flex-column gap-2">
          <img src="${service.icon}" width="72" height="72" alt="Visione Services">
          <h4 class="title">${service.title}</h4>
          <p>${service.description}</p>
        </div>
      </div>
    `;
    servicesContainer.innerHTML += serviceHTML;
  });
}
