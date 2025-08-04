const getPdtFromDB = async()=>{
    const res = await fetch('https://dummyjson.com/products');
    const data = await res.json();
    return data;
}

const ProductsCard = async()=>{
    const {products} =  await getPdtFromDB();

    let res =" ";
    products.forEach((ele)=>{
        let cardString = `
        <div class = 'card'>
            <img src="${ele.thumbnail}" width='200'/>
            <h2>${ele.title}</h2>
            <h2>${ele.price}</h2>
            </div>
        `
        res = res+ "\n" + cardString;
    })
    return res;
}
module.exports={
    ProductsCard,
}