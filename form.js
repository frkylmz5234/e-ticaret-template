$(document).ready(function(){
    
    $("#kaydet").click(function()
        {
        var sayac=0;
        var kullanici=$("#ad").val();
        var parola =$("#sifre").val();
        var email=$("#mail").val();
        var telefon=$("#tel").val();
        var adress=$("#adres").val();       
         if(kullanici.length ==0 ||  kullanici==" " || kullanici==null){
            document.getElementById("dvad").innerHTML='Kullanıcı adını giriniz.';
            sayac++;
        }
         if(parola.length ==0  || parola==" " || parola==null){
           document.getElementById("dvsifre").innerHTML="Şifreyi giriniz.";
           sayac++;
        }
         if(email.length ==0  || email==" " || email==null  ){
             document.getElementById("dvmail").innerHTML="Maili giriniz.";
             sayac++;
        }
        if( email.indexOf("@")==-1 || email.indexOf(".com")==-1){
            document.getElementById("dvmail").innerHTML="Mail adresini doğru giriniz.";
             sayac++;

        }
          if(telefon.length!=10 || telefon==" " || telefon==null){
             document.getElementById("dvtel").innerHTML="Telefon numarasını giriniz.";
             sayac++;
        }
         if(adress.length ==0  || adress==" " || adress==null){
            document.getElementById("dvadres").innerHTML="Boş alan bırakmayınız.";
            sayac++;
        }
         if(parola.length<7){
            document.getElementById("dvsifre").innerHTML="Parola 7karakterden az olamaz.";
            sayac++;
        }
        if(sayac==0) {
         document.getElementById("kayitOnay").innerHTML='  <div class="kutu"> <img id="tik" src="./resimler/tik.jpg" width="25" ><h2>KAYDINIZ TAMAMLANDI!</h2></div>';
            $("#ad").val("");
            $("#sifre").val("");
            $("#mail").val("");
            $("#tel").val("");
            $("#adres").val("");
            document.getElementById("dvsifre").innerHTML="";
            document.getElementById("dvadres").innerHTML="";
            document.getElementById("dvtel").innerHTML="";
            document.getElementById("dvmail").innerHTML="";
            document.getElementById("dvad").innerHTML='';
            // gelen değerleri başka bir foncyona yönlendirip kayıt işlemi yapılacak
        }
   })
})