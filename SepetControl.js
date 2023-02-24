$(document).ready(function(){
    
    $("#sepettekiurunler").on("click","button",function(){
        var datakey=$(this).data("key");
        var elements=JSON.parse(sessionStorage.getItem("urun"));
        var sepet = [];
        elements.forEach(element => {
            if(element.ID!=datakey){
                let product={
                    name:element.name,
                    price:element.price,
                    image:element.image,
                    ID:element.ID
                };
                sepet.push(product);
               
            }
        });
        sessionStorage.setItem("urun",JSON.stringify(sepet));
        $.sepetAktar();
        
    })
    
})


