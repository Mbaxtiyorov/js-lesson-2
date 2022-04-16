alert ("hello welcome to js website")

 var pul = parseInt(prompt("qancha pulingiz bor").trim());
 
 console.log("pulingiz"+pul);

 var paragraph = document.createElement("p");
 document.body.append(paragraph);
 if(pul >= 100){
    console.log("marhamat telefon sizniki");
    paragraph.textContent = "sotib olishingiz mumkin";
  }else{
    console.log("sizda pul miqdori yetarli emas!");
    paragraph.textContent = " pulingiz yetmagani sababli siz buni sotib ololmaysiz ";
  }