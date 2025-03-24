const form = document.getElementById("despesa-form");
const lista = document.getElementById("lista-despesas");
const totalSpan = document.getElementById("total");
const resetBtn = document.getElementById("resetar");

let total = 0;

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const descricao = document.getElementById("descricao").value;
  const valor = parseFloat(document.getElementById("valor").value);
  const categoria = document.getElementById("categoria").value;

  if (!descricao || !valor || !categoria) {
    alert("Preencha todos os campos!");
    return;
  }

  const item = document.createElement("li");
  item.className = "item-despesa";
  item.innerHTML = `
    <span>${descricao}</span>
    <span>R$ ${valor.toFixed(2)}</span>
    <span class="categoria">${categoria}</span>
  `;

  lista.appendChild(item);
  total += valor;
  totalSpan.textContent = total.toFixed(2);

  form.reset();
});

resetBtn.addEventListener("click", () => {
  if (confirm("Tem certeza que deseja limpar todas as despesas?")) {
    lista.innerHTML = "";
    total = 0;
    totalSpan.textContent = "0.00";
  }
});
