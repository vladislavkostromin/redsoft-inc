document.addEventListener("DOMContentLoaded", function () {



  fetch('https://reqres.in/api/products/3')
    .then(data => {
      console.log(data)
      return data.text();
    })

    .then(data => {
      console.log(data)
    });


  
    
    

});