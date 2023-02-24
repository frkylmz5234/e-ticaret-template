$(document).ready(function(){
    $.sepetAktar=function() {
        var elements=JSON.parse(sessionStorage.getItem("urun"));
        var html='';
        var sayac=0;
        let toplamfiyat=0;
        html+='<table align="center">';
        elements.forEach(function(item){
        sayac++;
        toplamfiyat+=item.price;
        html+='<tr> <td>  <image style="width: 100px;margin-right: 50px" src="resimler/'+item.image+'" width="150px"/> </td><td> '+item.name+'<br><br> '+item.price+'.00 TL </td><td><button id="buttondelete" data-key="'+item.ID+'">Sil</button></td></tr>';
        })
        if(sayac!=0)
            {
            html+='<a href="hesap.html"><button id="button_siparis" style="width:600px" >Ödeme yap / Toplam Fiyat: '+toplamfiyat+'.00 TL</button></a>';}
        html+='</table>';
        document.getElementById("sepettekiurunler").innerHTML=html;
    }
 })
