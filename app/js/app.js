document.addEventListener("DOMContentLoaded", function () {

  const getMessage = document.querySelector('.btn-buy');
  const getBasket = document.querySelector('.btn--basket');


  getMessage.addEventListener('click', () => {
    fetch('https://reqres.in/api/products/3')
      .then(data => {
        console.log(data)
        return data.text();
      })

      .then(data => {
        console.log(data)
      });

  });


  document.querySelector(".btn-buy") ?.addEventListener("click", () =>
    localStorage.setItem("Товар в корзине", "Товар в корзине"));

  getMessage.addEventListener('click', () => {
    if (getMessage) {
      getBasket.style.display = 'flex'
      getMessage.style.display = 'none'
    }

  });

  if (localStorage.getItem("Товар в корзине")) {
    getMessage.style.display = 'none'
    getBasket.style.display = 'flex'
  } else if (localStorage.getItem(!"Товар в корзине")) {
    getMessage.style.display = 'flex'
    getBasket.style.display = 'none'
  }

});



