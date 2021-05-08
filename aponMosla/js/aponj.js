var bool = false;



function refreshVisible(){
  var visibleHandler = document.getElementById('refreshVsi') ;
  var calculateVisble = document.getElementById('calculateId');
   if( calculateVisble.style.visibility === 'visible' && bool){
       calculateVisble.style.visibility = "hidden";
       visibleHandler.style.background = "#fff";
   }else {
     calculateVisble.style.visibility = "visible";

   }
};

function handleSubmit(){
//  var d = document.getElementById("dor1").value;
  //document.getElementById("taka1").innerHTML= d;

///calculation

 var x="taka";
 var y=1;

 var ph = x+""+y;

var countTaka = 0;
 for(i=1 ; i<34; i++){
   var takaStg="taka"+i;
   var dorStg = "dor"+i;
   var quantityStg = "quantity" +i;
   var quantity =  document.getElementById(quantityStg).value;
   var dor = document.getElementById(dorStg).value;

   if(dor !="" && quantity !=""){
     var dorOfst = "dorOf"+i;
     var quantityOfst = "quantityOf" +i;
      var takaOfStg="takaOf"+i;

     document.getElementById(dorOfst).value = dor;
    document.getElementById(quantityOfst).value = quantity;


     dor = dor* quantity;
     document.getElementById(takaStg).innerHTML = dor;
      document.getElementById(takaOfStg).innerHTML = dor;
     countTaka += dor;
   }


 }


 document.getElementById("totalTaka").innerHTML = countTaka;
  document.getElementById("totalTakaOf").innerHTML = countTaka;

 var joma =0;
   joma = document.getElementById("jomaTaka").value;
    document.getElementById("jomaTakaOf").value = joma;
 if(joma!="" && joma!=0){
     document.getElementById("bakiTaka").innerHTML = countTaka - joma;
       document.getElementById("bakiTakaOf").innerHTML = countTaka - joma;
 }





    document.getElementById("grahkNmOffId").value = document.getElementById("grahokNmGraId").value;
    document.getElementById("grahkThikanaOffId").value = document.getElementById("grahkThikanaGraId").value;
    document.getElementById("grahkPhnOffId").value = document.getElementById("grahkPhnGraId").value;
      document.getElementById("grohonerTarikOffId").value = document.getElementById("grohonerTarikId").value;

}



//  var date_st = new Date();



 refreshVisible();
 handleSubmit();

 bool = true;

 var bar = new Date().getDay();
 var mas = new Date().getMonth();
 var yer= new Date().getYear();
    yer = Number(yer)+1900;
 var barArr = ["Sun","Mon","Tue","Wed","Thu","Fri","Sat"];
 var Month =["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"];
 var finalStg = barArr[Number(bar)]+" "+new Date().getDate()+" "+Month[Number(mas)]+" "+yer;
 var date = new Date().getDate();

 document.getElementById("tarikId").value = finalStg;
  document.getElementById("tarikOfId").value = finalStg;
