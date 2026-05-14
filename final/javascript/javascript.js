console.log("GreenTech Solutions website has been loaded successfully.");

const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".feature-content");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const searchText = searchInput.value.toLowerCase();
            products.forEach(function(product) {
                const productText = product.textContent.toLowerCase();
                if(productText.includes(searchText)){
                    product.computedStyleMap.display = "block";
                }
                else {
                    product.computedStyleMap.display = "none";
                }
            });
        
        });
    }
    const contactForm = document.getElementById("contactForm");
    const formMessage = document.getElementById("formMessage");

    if (contactForm) {
        contactForm.addEventListener("submit", function(event) {
            event.preventDefault();
            formMessage.textContent =
            `Your message has been submitted. Someone from our team will reach out to you as soon as possible.`;
            contactForm.reset();
        });
    }