const getProductsButton = document.getElementById('btn');


const productsContainer = document.getElementById('container');


getProductsButton.addEventListener('click', async () => {

    try {
        const data = await fetch('https://makeup-api.herokuapp.com/api/v1/products.json?product_tags=Vegan&product_type=nail_polish');
        const response = await data.json();

        console.log(response);


        response.forEach((product) => {
           
            productsContainer.innerHTML += 
                    `
                    <div class='w-25 shadow-lg p-5 border m-3' >
                        <div class='text-center mb-5' >
                            <img height='200px' src="${product.image_link}"  alt='product-image'/>
                            <h2 class='rounded mt-2 bg-yellow text-dark' >Price : $${product.price} </h2>
                        </div>
                        <div>
                            <h4class='rounded text-dark'Category : ${product.category} </h4>
                            <h4 class = "${product.rating >= 3 ? 'good' : 'bad'}" >Rating : ${product.rating} </h4>
                        </div>
                        <div>
                            <p> About : ${product.description} </p>
                        </div>
                    </div>`

        })

        

    } catch (error) {
        console.log(error);
    }


 
})