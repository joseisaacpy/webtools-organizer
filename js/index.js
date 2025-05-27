// ========== UTILITÁRIOS DO LOCALSTORAGE ==========
function getLinksSalvos() {
  return JSON.parse(localStorage.getItem("links")) || {};
}

function salvarLinksAtualizados(data) {
  localStorage.setItem("links", JSON.stringify(data));
}

function removerDoLocalStorage(categoria, urlLink) {
  const dados = getLinksSalvos();
  if (!dados[categoria]) return;

  dados[categoria] = dados[categoria].filter((item) => item.url !== urlLink);
  if (dados[categoria].length === 0) delete dados[categoria];
  salvarLinksAtualizados(dados);
}

function renderizarLinkNaTela(nomeCategoria, nomeLink, urlLink) {
  const areaContainers = document.querySelector("main #categories-container");
  let categoriaExistente = document.getElementById(nomeCategoria);

  if (!categoriaExistente) {
    let tituloContainer = document.createElement("h2");
    tituloContainer.textContent = nomeCategoria;

    categoriaExistente = document.createElement("section");
    categoriaExistente.setAttribute("id", nomeCategoria);
    categoriaExistente.setAttribute("class", "container-links");

    const listaLinks = document.createElement("ul");

    categoriaExistente.appendChild(tituloContainer);
    categoriaExistente.appendChild(listaLinks);
    areaContainers.appendChild(categoriaExistente);
  }

  const listaLinks = categoriaExistente.querySelector("ul");

  const liLink = document.createElement("li");
  const link = document.createElement("a");
  link.href = urlLink;
  link.textContent = nomeLink;
  link.target = "_blank";

  const deleteSpan = document.createElement("span");
  deleteSpan.innerHTML = `<i class="fa-solid fa-trash"></i>`;
  deleteSpan.style.cursor = "pointer";
  deleteSpan.addEventListener("click", () => {
    liLink.remove();
    removerDoLocalStorage(nomeCategoria, urlLink);
  });

  liLink.appendChild(link);
  liLink.appendChild(deleteSpan);
  listaLinks.appendChild(liLink);
}

// ========== INTERAÇÃO COM O FORMULÁRIO ==========
const sectionForm = document.getElementById("form-section");
const btnAddLink = document.getElementById("btn-add-link");
const btnCloseForm = document.getElementById("btn-fechar-form");
const select = document.getElementById("category");
const customInput = document.getElementById("custom-category");
const form = document.getElementById("add-link-form");

btnCloseForm.addEventListener("click", () => {
  sectionForm.classList.remove("active");
});

btnAddLink.addEventListener("click", function () {
  sectionForm.classList.toggle("active");
});

select.addEventListener("change", () => {
  customInput.style.display = select.value === "CUSTOM" ? "block" : "none";
});

form.addEventListener("submit", (event) => {
  event.preventDefault();

  let categoria = document.getElementById("category").value;
  const nomeLink = document.getElementById("link-name").value;
  const urlLink = document.getElementById("link-url").value;

  if (categoria === "CUSTOM") {
    const categoriaCustom = document
      .getElementById("custom-category")
      .value.trim();
    if (!categoriaCustom) {
      alert("Por favor, digite o nome da categoria customizada.");
      return;
    }
    categoria = categoriaCustom;
  }

  // Renderiza na tela
  renderizarLinkNaTela(categoria, nomeLink, urlLink);

  // Salva no localStorage
  const dadosAtuais = getLinksSalvos();
  if (!dadosAtuais[categoria]) {
    dadosAtuais[categoria] = [];
  }
  dadosAtuais[categoria].push({ nome: nomeLink, url: urlLink });
  salvarLinksAtualizados(dadosAtuais);

  form.reset();
  customInput.style.display = "none";
  sectionForm.classList.remove("active");
});

// ========== AO CARREGAR A PÁGINA, RENDERIZA OS LINKS ==========
window.addEventListener("DOMContentLoaded", () => {
  const dados = getLinksSalvos();
  for (let categoria in dados) {
    dados[categoria].forEach((link) => {
      renderizarLinkNaTela(categoria, link.nome, link.url);
    });
  }
});
