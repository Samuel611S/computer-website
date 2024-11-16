document.addEventListener("DOMContentLoaded", () => {
    console.log("Welcome to Tech World!");
});

document.addEventListener("DOMContentLoaded", () => {
    const backToTop = document.getElementById("backToTop");

    
    window.addEventListener("scroll", () => {
        if (window.scrollY > 200) {
            backToTop.classList.add("visible");
        } else {
            backToTop.classList.remove("visible");
        }
    });

    
    backToTop.addEventListener("click", () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const greeting = document.getElementById("greeting");
    const hour = new Date().getHours();

    if (hour < 12) {
        greeting.textContent = "Good Morning! Welcome to Tech World.";
    } else if (hour < 18) {
        greeting.textContent = "Good Afternoon! Enjoy exploring Tech World.";
    } else {
        greeting.textContent = "Good Evening! Thanks for visiting Tech World.";
    }
});
document.addEventListener("DOMContentLoaded", () => {
    const themeToggle = document.getElementById("themeToggle");
    const body = document.body;
    const nav = document.querySelector("nav");
    const footer = document.querySelector("footer");
    const header = document.querySelector("header"); 

    themeToggle.addEventListener("click", () => {
        body.classList.toggle("dark-mode");
        nav.classList.toggle("dark-mode");
        footer.classList.toggle("dark-mode");
        header.classList.toggle("dark-mode"); 

        
        if (body.classList.contains("dark-mode")) {
            themeToggle.textContent = "Switch to Light Mode";
        } else {
            themeToggle.textContent = "Switch to Dark Mode";
        }
    });
});
function toggleModal() {
    const modal = document.querySelector('.owner-modal');
    const container = document.querySelector('.owner-container');
    
    // Toggle the modal visibility and a "clicked" class on the container
    modal.style.display = (modal.style.display === "block") ? "none" : "block";
    modal.style.opacity = (modal.style.display === "block") ? "1" : "0";
    modal.style.visibility = (modal.style.display === "block") ? "visible" : "hidden";
    
    // Optional: Add a zoom effect to the image when clicked
    container.classList.toggle('clicked');
}



