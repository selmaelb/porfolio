

//let burger = document.querySelector('.header .fixation-header .navbar .burger');
//console.log(burger);

//burger.addEventListener('click', (e) => {
  //  console.log(e)
//})

function menuMobile() {
    var liste = document.getElementById("listeMobile");
    console.log(liste);
    const element = document.getElementById("burgerid");
    const element2 = document.getElementById("burgerid2");
    const linksParcours = document.getElementById("lienPageParcours")
    const linksComp = document.getElementById("lienPageComp")
    const linksCentre = document.getElementById("lienPageCentre")
    const linksProjets = document.getElementById("lienPageProjets")

    element.addEventListener("click", () => {
        liste.classList.remove("liste");
        liste.classList.add("liste", "show-liste");
     
        //liste.classList.toggle("show-liste");
        element.style.display = "none"
        element2.style.display = "block"
    });

    element2.addEventListener("click", () => {
        liste.classList.remove("show-liste");
        liste.classList.add("liste");
        // liste.classList.toggle("liste");
        element.style.display = "block"
        element2.style.display = "none"
    });


    linksParcours.addEventListener('click', () => {
            liste.classList.remove('show-liste');
        });
    
        lienPageComp.addEventListener('click', () => {
            liste.classList.remove('show-liste');
        });
        lienPageCentre.addEventListener('click', () => {
            liste.classList.remove('show-liste');
        });
        lienPageProjets.addEventListener('click', () => {
            liste.classList.remove('show-liste');
        });
  

}

menuMobile();