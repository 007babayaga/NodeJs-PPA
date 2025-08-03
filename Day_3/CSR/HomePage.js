document.addEventListener("DOMContentLoaded", () => {
    const root = document.getElementById('root');

    const renderUi = (data) => {
        const { products } = data;

        products.forEach((ele) => {
            const newContainer = document.createElement('div');
            newContainer.className = 'card';
            newContainer.innerHTML = `
                <img src="${ele.thumbnail}" width='200'/>
                <h2>${ele.title}</h2>
                <h2>${ele.price}</h2>
            `;
            root.appendChild(newContainer); // moved this inside the loop too
        });
    };

    const getData = async () => {
        const res = await fetch('https://dummyjson.com/products');
        const data = await res.json();
        renderUi(data);
    };
    getData();
});
