

module.exports= {
    chargeData: function(){
        console.log("Ejecutando Services");
        fetch('http://localhost:5000/products')
        .then(response => response.json())
        .then(data => {
            console.log(data)
            let galery = document.querySelector(".galery");
            
            let array = [
                data.map((el)=>{
                    return `
                        <div class="grid-cards">
                            <img src="${el.image}"/>
                            <h3 class="name">${el.name.toUpperCase()}</h3>
                            <h3 class="price">R$ ${el.price}</h3>
                            <h3 class="cuotas">ate ${el.parcelamento[0]}x de R$${el.parcelamento[1]}</h3>
                            <div class="btn-buy">
                                <p>COMPRAR</p>
                            </div>
                        </div>
                    `
                }).join('')
                ]
            
            galery.innerHTML = array;
        });

        
    }, 
    another : function(){
        // console.log("Another function")
    }
}
