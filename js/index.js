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

// se o usuario escolher uma nova categoria, mostrar o input para nome da categoria nova
const select = document.getElementById("category");
const customInput = document.getElementById("custom-category");

select.addEventListener("change", () => {
  if (select.value === "CUSTOM") {
    customInput.style.display = "block";
  } else {
    customInput.style.display = "none";
  }
});

// formulario de adicionar links
const form = document.getElementById("add-link-form");

// função para adicionar o evento de submit no form
form.addEventListener("submit", (event) => {
  // impede o recarregamento da página
  event.preventDefault();

  // valor da categoria escolhida
  const categoria = document.getElementById("category").value;

  // nome do link escolhido
  const nomeLink = document.getElementById("link-name").value;

  // url do link
  const urlLink = document.getElementById("link-url").value;

  // criação do link com o nome e url escolhidos
  const link = document.createElement("a");
  // url do link
  link.href = urlLink;
  // nome do link
  link.textContent = nomeLink;
  // alvo do link
  link.target = "_blank";

  // titulo do container
  const nomeContainer = document.createElement("h2");
  // titulo recebe o nome da categoria escolhida
  nomeContainer.textContent = categoria;

  // nome da categoria
  let nomeCategoria = categoria;

  // se a categoria for customizada, pegar o nome digitado pelo usuario
  if (categoria === "CUSTOM") {
    // nome da categoria customizada
    const categoriaCustom = document
      .getElementById("custom-category")
      .value.trim();

    // se o campo de nova categoria estiver vazio, mostrar alerta
    if (!categoriaCustom) {
      alert("Por favor, digite o nome da categoria customizada.");
      return;
    }
    // se tiver valor, ele usa o valor digitado pelo usuario
    nomeCategoria = categoriaCustom;
  }

  // reseta o form
  form.reset();
});
