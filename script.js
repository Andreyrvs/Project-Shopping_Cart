function createProductImageElement(imageSource) {
  const img = document.createElement('img');
  img.className = 'item__image';
  img.src = imageSource;
  return img;
}

function createCustomElement(element, className, innerText) {
  const e = document.createElement(element);
  e.className = className;
  e.innerText = innerText;
  return e;
}

// Requisito 01
function createProductItemElement({ id: sku, title: name, thumbnail: image }) {
  const section = document.createElement('section');
  section.className = 'item';

  section.appendChild(createCustomElement('span', 'item__sku', sku));
  section.appendChild(createCustomElement('span', 'item__title', name));
  section.appendChild(createProductImageElement(image));
  section.appendChild(createCustomElement('button', 'item__add', 'Adicionar ao carrinho!'));

  return section;
}

function getSkuFromProductItem(item) {
  return item.querySelector('span.item__sku').innerText;
}
// apagar depois
getSkuFromProductItem();

function cartItemClickListener(event) {
  // coloque seu código aqui
  // apagar deppois
  return event;
}

// Requisito 02
function createCartItemElement({ sku, name, salePrice }) {
  const li = document.createElement('li');
  li.className = 'cart__item';
  li.innerText = `SKU: ${sku} | NAME: ${name} | PRICE: $${salePrice}`;
  li.addEventListener('click', cartItemClickListener);
  return li;
}
// apagar depois
createCartItemElement();

// Requisito 01 - Lista os items no HTML
fetchProducts('computador').then((resposta) => {
  resposta.results.forEach(({ id, title, thumbnail }) => {
    const items = document.querySelector('.items');
    const elementoHTML = createProductItemElement({ id, title, thumbnail });
    items.appendChild(elementoHTML);
  });
});

// Requisito 02 - criar o carrinho
// fetchItem('MLB1341706310')
// .then((respostas) => {

// })

window.onload = () => {
  fetchProducts('computador');
  fetchItem('MLB1341706310');
};
