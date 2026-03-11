const API_CATEGORY = "http://localhost:8081/api/categories";

async function loadCategories() {

    try {

        const res = await fetch(API_CATEGORY);

        const categories = await res.json();

        const menu = document.getElementById("categoryMenu");

        menu.innerHTML = "";

        categories.forEach(c => {

            menu.innerHTML += `
                <a href="products.html?category=${c.id}">
                    ${c.name}
                </a>
            `;

        });

    } catch (error) {

        console.error("Lỗi load category", error);

    }

}

loadCategories();