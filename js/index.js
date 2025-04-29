// section de adicionar links
const sectionForm = document.getElementById("form-section");
// botão de adicionar links novos
const btnAddLink = document.getElementById("btn-add-link");

// botão recebe evento de clique, onde vai mostrar o form para adicionar links
btnAddLink.addEventListener("click", function () {
  // se o form tiver com classe visivel, ele esconde, se não, ele mostra
  if (sectionForm.classList.contains("active")) {
    sectionForm.classList.remove("active");
  } else {
    sectionForm.classList.add("active");
  }
});

// evento de clique fora do form, para esconder o form
