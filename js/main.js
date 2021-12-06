/*document refers to the current page
& find all the elements which have 
COLLAPSIBLE CLASS 
*/
const collapsible = 
document.querySelectorAll(".collapsible");

collapsible.forEach((item) =>
    item.addEventListener("click", function(){
        this.classList.toggle("collapsible--expanded");
    })
);