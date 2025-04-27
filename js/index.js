// section de adicionar links
const sectionForm = document.getElementById("form-section");
// botão de adicionar links novos
const btnAddLink = document.getElementById("btn-add-link");

// botão recebe evento de clique, onde vai mostrar o form para adicionar links
btnAddLink.addEventListener("click", function () {
  // se o form estiver visivel, ele esconde, se não, ele mostra
  if (sectionForm.style.display == "flex") {
    sectionForm.style.display = "none";
  } else {
    sectionForm.style.display = "flex";
  }
});

// evento de clique fora do form, para esconder o form
