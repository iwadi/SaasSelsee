/* ===========  бургер меню на js без jquery ============ */
/* ===========  бургер меню на js без jquery ============ */

document.addEventListener("DOMContentLoaded", function() {
    document.getElementById("burger").addEventListener("click", function() {
        document.querySelector("header").classList.toggle("open")
    })
})