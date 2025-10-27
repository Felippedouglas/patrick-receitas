const container = document.getElementById("receitas-container");
const tags = document.querySelectorAll(".tag");

function exibirReceitas(filtro = "todas") {
  container.innerHTML = "";

  // Filtra receitas que NÃO tenham a tag 'especiais'
  let lista = receitas.filter(r => !r.tags.includes("especial"));

  // Aplica filtro de tag, se for diferente de 'todas'
  if (filtro !== "todas") {
    lista = lista.filter(r => r.tags.includes(filtro));
  }

  lista.forEach(r => {
    const card = document.createElement("div");
    card.className = "receita-card";
    card.innerHTML = `
      <img src="${r.imagem}" alt="${r.titulo}">
      <h3>${r.titulo}</h3>
      <div class="receita-info">
        <span>⏱ ${r.tempoPreparo}</span>
        <span>🍽 ${r.porcao}</span>
      </div>
    `;
    card.onclick = () => {
      window.location.href = `receita.html?id=${r.id}`;
    };
    container.appendChild(card);
  });
}

tags.forEach(tag => {
  tag.addEventListener("click", () => {
    document.querySelector(".tag.active").classList.remove("active");
    tag.classList.add("active");
    exibirReceitas(tag.dataset.tag);
  });
});

// Exibe todas ao carregar
exibirReceitas();
