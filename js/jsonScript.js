let blogContainer = document.querySelector("#blogContainer");

fetch("../json/blog.json")
  .then((response) => response.json())
  .then((data) => {
    data.map((items, index) => {
      blogContainer.innerHTML += `
      <div class="blogCard" id="blogCard">
        <div class="cardContainer">
        <h3 class="blogTitle">${items.title}</h3>
        <p class="blogDate">${items.date}</p>
        <p class="blogDescription">${items.desc}</p>
        <div class="blogLinksContainer">
          <a href="#" class="blogLinks">${items.links}</a>
        </div>
      </div>
      <div class="imageSection">
        <img class="blogImage" src="${items.image}">
      </div>
      </div>
        `;
    });
  })
  .catch((error) => {
    console.error("Error fetching data:", error);
  });
