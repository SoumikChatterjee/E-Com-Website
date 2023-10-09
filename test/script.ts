const body = document.querySelector('body')!

const getElement = async () => {
    const response =await fetch('https://fakestoreapi.com/products');
    // const res = (await data).json();
    
    const data=await response.json();
    console.log(data);

    const addProduct = (product) => {
        const container = document.createElement('div');
        container.classList.add('pro');
      
        const img = document.createElement('img');
        img.src = product.image;
        container.appendChild(img);
      
        const title = document.createElement('p');
        title.classList.add('title');
        title.textContent = product.title;
        container.appendChild(title);
      
        const price = document.createElement('p');
        price.classList.add('price');
        price.textContent = `$${product.price}`;
        container.appendChild(price);
      
        body.appendChild(container);
      };
      
}
getElement();