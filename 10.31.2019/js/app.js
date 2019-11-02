var Section = document.getElementsByClassName("Section");
var i;

for (i = 0; i < Section.length; i++) {
    Section[i].addEventListener("click", function () {

        var panel = this.nextElementSibling;
        if (panel.style.display === "none") {
            panel.style.display = "block";
        } else {
            panel.style.display = "none";
        }
    })
}


var Sector=document.getElementsByClassName('Sector');
var a;

for(a=0; a<Sector.length; a++){
    Sector[a].addEventListener('click',function(){
        this.classList.toggle('')
    } )
}