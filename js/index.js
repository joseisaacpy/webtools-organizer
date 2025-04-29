// section de adicionar links
const sectionForm = document.getElementById("form-section");

// botão de adicionar links novos
const btnAddLink = document.getElementById("btn-add-link");

// botão de fechar o form
const btnCloseForm = document.getElementById("btn-fechar-form");
// adiciona evento de fechar form
btnCloseForm.addEventListener("click", () => {
  sectionForm.classList.remove("active");
});

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

  // criação do container para os links
  const container = document.createElement("section");
  container.setAttribute("class", "container-links");

  // verifica se o container já existe, se não existir, cria um novo
  let categoriaExistente = document.getElementById(nomeCategoria);

  // se a categoria não existir
  if (!categoriaExistente) {
    // cria o título do container
    let tituloContainer = document.createElement("h2");
    tituloContainer.textContent = nomeCategoria;

    // cria uma novo container e define o id para o nome da categoria
    categoriaExistente = document.createElement("section");
    categoriaExistente.setAttribute("id", nomeCategoria);
    categoriaExistente.setAttribute("class", "container-links");

    // coloca o título da categoria dentro do container
    categoriaExistente.appendChild(tituloContainer);
    categoriaExistente.appendChild(link);

    // adiciona o container na página
    const areaContainers = document.querySelector("main #categories-container");
    areaContainers.appendChild(categoriaExistente);
  } else {
    // se a categoria já existir, adicionar os novos links dentro do container existente
    categoriaExistente.appendChild(link);
  }

  // reseta o form
  form.reset();
});
