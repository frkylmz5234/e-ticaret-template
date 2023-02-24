$(document).ready(function(){
    $.multiply=function(ürünName,ürünPrice,image) {
          $("#uruncoluns").on("click","button",function(){
   let datakey=parseInt($(this).data("key").split(".")[1]);

       let product={
    name:ürünName[datakey],
   price:ürünPrice[datakey],
    image:image[datakey],
    ID:$(this).data("key")
};
var sepet = [];
sepet.push(product);
if(sessionStorage.getItem("urun")!=null){
      JSON.parse(sessionStorage.getItem("urun")).forEach(
          item => {
          let localProduct={
          name:item.name,
          price:item.price,
          image:item.image,
           ID:item.ID
          };
          sepet.push(localProduct);
          }                                             
      );
   sessionStorage.setItem("urun",JSON.stringify(sepet));
}
else{
    sessionStorage.setItem("urun",JSON.stringify(sepet));
}

document.getElementById(datakey).innerHTML='<div id="'+datakey+'">Eklendi</div>';
setTimeout(function() { $("#"+datakey).hide(); }, 3000); /*1000 milisaniye = 1 saniye*/

   
})
    }
    
  
   })     
       