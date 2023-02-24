$(document).ready(function(){
    $("#onay").click(function(){
        var name=$(".First_LastName").val(); 
        var ay=$("#selectay").val();
        var cv=$("#CardCv").val();
        var sayac=0;
        try{
            var CardNumber=parseInt($(".CardNumber").val());
            if(CardNumber.toString().length!=16){
              document.getElementById("CardNumbererror").innerHTML="Card numarasını tam doldurunuz";
              sayac++;
              
            }
        }
        catch{
           document.getElementById("CardNumbererror").innerHTML="Card numarasında sadece sayılar olabilir";
           sayac++;
           
        }

        if(name==null || name.length==0){
          sayac++;
          

        }
        
          try{
            var degisim=parseInt($("#CardCv").val());
            if(degisim!=NaN){
                if(degisim.toString().length!=3){
                    document.getElementById("CVError").innerHTML="CV 3 haneli olmalıdır.";
                   
                 }
            }
            else{
                document.getElementById("CVError").innerHTML="CV Hatalı 2";
                sayac++;
            }        
          }
          catch{
            document.getElementById("CVError").innerHTML="CV Hatalı 3";
            sayac++;
          }
          if(sayac==0){
            document.getElementById("odemeonay").innerHTML=' <img id="tik" src="./resimler/tik.jpg" width="25" ><h2>ÖDEME GERÇEKLEŞTİRİLDİ!</h2>';
          }
    })
})