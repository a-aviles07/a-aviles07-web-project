console.log("GreenTech Solutions website has been loaded successfully.");

const searchInput = document.getElementById("productSearch");
const products = document.querySelectorAll(".feature-content");
    if (searchInput) {
        searchInput.addEventListener("keyup", function() {
            const searchText = searchInput.value.toLowerCase();
            products.forEach(function(product) {
                const productText = product.textContent.toLowerCase();
                if(productText.includes(searchText)){
                    product.style.display = "block";
                }
                else {
                    product.style.display = "none";
                }
            });
        
        });
    }
    const contactUsForm = document.getElementById("contactUsForm");
    const messageForm = document.getElementById("messageForm");

    if (contactUsForm) {
        contactUsForm.addEventListener("submit", function(event) {
            event.preventDefault();
            messageForm.textContent =
            `Your message has been submitted. Someone from our team will reach out to you as soon as possible.`;
            contactUsForm.reset();
        });
    }