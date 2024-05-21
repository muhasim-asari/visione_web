// Fetch data from JSON file
fetch("./assets/img/success-stories/data.json")
  .then((response) => response.json())
  .then((data) => {
    // Create grid items
    const grid = document.querySelector(".success-stories-list");
    data.forEach((item) => {
      const gridItem = document.createElement("div");
      gridItem.className = `col-lg-12 grid-item ${item.category}`;
      gridItem.innerHTML = `
          <div class="stories-item isotope-item">
              <div class="row gy-4 d-flex align-items-center">
                  <div class="col-xl-3 px-0">
                      <img src="${item.image}" width="100%" height="275" alt="${item.title}">
                  </div>
                  <div class="col-xl-9">
                      <div class="content-info px-3 py-4">
                          <h3>${item.title}</h3>
                          <div class="divide-line my-2"></div>
                          <p class="mb-2">${item.description}</p>
                          <a href="${item.link}" class="read-more">Read More...</a>
                      </div>
                  </div>
              </div>
          </div>
      `;
      grid.appendChild(gridItem);
    });

    // Initialize Isotope
    const iso = new Isotope(grid, {
      itemSelector: ".grid-item",
      layoutMode: "fitRows",
    });

    // Get the filter buttons
    const filterBtns = document.querySelectorAll(".filter-btns button");

    // Add event listener to each filter button
    filterBtns.forEach((button) => {
      button.addEventListener("click", (event) => {
        // Remove active class from all filter buttons
        filterBtns.forEach((btn) => btn.classList.remove("filter-active"));

        // Add active class to the clicked filter button
        event.target.classList.add("filter-active");

        // Get the filter value from the button's data-filter attribute
        const filterValue = event.target.getAttribute("data-filter");

        // Update the Isotope layout with the new filter value
        iso.arrange({
          filter: filterValue,
        });
      });
    });
  });
