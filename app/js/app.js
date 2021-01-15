document.addEventListener("DOMContentLoaded", function () {

  const getMessage = document.querySelector('.btn-buy');

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

});