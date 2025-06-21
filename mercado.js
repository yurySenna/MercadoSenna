function adicionarAoCarrinho(nome, preco) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.push({ nome, preco });
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
   atualizarContador();
  alert(`${nome} foi adicionado ao carrinho!`);
 
}

function atualizarContador() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  document.getElementById('contador-carrinho').textContent = carrinho.length;
}

function abrirCarrinho() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const container = document.getElementById('itens-carrinho');
  
  container.innerHTML = carrinho.map((item, index) => `
    <div class="item-carrinho">
      <strong>${item.nome}</strong><br>
      R$ ${item.preco.toFixed(2)}
      <button onclick="removerItem(${index})">X</button>
    </div>
  `).join('');
  
  document.getElementById('carrinho').classList.add('aberto');

}

function fecharCarrinho() {
  document.getElementById('carrinho').classList.remove('aberto');
}

function finalizar() {
  const carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  const tot = document.getElementById('total');

  const total = carrinho.reduce((soma, item) => {
    const preco = parseFloat(item.preco) || 0;
    const quantidade = parseInt(item.quantidade) || 1; 

    return soma + (preco * quantidade);
  }, 0);

  tot.innerHTML = `Total R$ ${total.toFixed(2)}`;



atualizarContador();
}

const toggle = document.getElementById("menu");

const nav = document.getElementById("nav");

toggle.addEventListener("click", () => {
  
  nav.classList.toggle("show");
});

function limparCarrinho() {
  localStorage.removeItem('carrinho'); 
  atualizarContador(); 
  document.getElementById('itens-carrinho').innerHTML = ''; 
  document.getElementById('total').innerHTML = 'R$ 0,00'; 
  
}

function removerItem(index) {
  let carrinho = JSON.parse(localStorage.getItem('carrinho')) || [];
  carrinho.splice(index, 1); 
  localStorage.setItem('carrinho', JSON.stringify(carrinho));
  
  abrirCarrinho();        
  atualizarContador();    
}

function toggleMenu() {
    const menu = document.getElementById("menuLateral");
    menu.classList.toggle("aberto");
  }


