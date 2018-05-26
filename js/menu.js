document.querySelector(".hbg-menu").addEventListener("click", () => {
    document.querySelector(".hbg-menu").classList.toggle("hbg-menu-open")
    document.querySelector(".hbg-menu-contents").classList.toggle("hbg-menu-contents-open")
    document.querySelector(".hbg").classList.toggle("active")
  })

  /*Pour fermer le menu quand on clique sur une rubrique*/ 
$('.hbg-menu-contents a').click(function() {
    $('.hbg-menu').removeClass('hbg-menu-open');
    $('.hbg').removeClass('active');                                /*Effacer les rubriques du menu ouvert pour les fermer*/
    $('.hbg-menu-contents').removeClass('hbg-menu-contents-open');
    });