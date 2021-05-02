let values=[A , B , C, D];

  

function getSumMon() {

  let val1=document.getElementById("A").value;
  let val2=document.getElementById("B").value;
  let val3=document.getElementById("C").value;
  let val4=document.getElementById("D").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultMon").innerHTML=sumResult;
}
function getSumTue() {

  let val1=document.getElementById("A2").value;
  let val2=document.getElementById("B2").value;
  let val3=document.getElementById("C2").value;
  let val4=document.getElementById("D2").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultTue").innerHTML=sumResult;
}
function getSumWed() {

  let val1=document.getElementById("A3").value;
  let val2=document.getElementById("B3").value;
  let val3=document.getElementById("C3").value;
  let val4=document.getElementById("D3").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultWed").innerHTML=sumResult;
}

function getSumThur() {

  let val1=document.getElementById("A4").value;
  let val2=document.getElementById("B4").value;
  let val3=document.getElementById("C4").value;
  let val4=document.getElementById("D4").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultThur").innerHTML=sumResult;
}

function getSumFri() {

  let val1=document.getElementById("A5").value;
  let val2=document.getElementById("B5").value;
  let val3=document.getElementById("C5").value;
  let val4=document.getElementById("D5").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultFri").innerHTML=sumResult;
}

function getSumSat() {

  let val1=document.getElementById("A6").value;
  let val2=document.getElementById("B6").value;
  let val3=document.getElementById("C6").value;
  let val4=document.getElementById("D6").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultSat").innerHTML=sumResult;
}

function getSumSun() {

  let val1=document.getElementById("A7").value;
  let val2=document.getElementById("B7").value;
  let val3=document.getElementById("C7").value;
  let val4=document.getElementById("D7").value;
  
  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);
    
sumResult=A+B+C+D;
   
return document.getElementById("sumResultSun").innerHTML=sumResult;
}






function getMinPerDay(){
  return document.getElementById("minPerDayResult").innerHTML = Math.min(A, B , C , D);
}

function getMaxPerDay(){
  return document.getElementById("maxPerDayResult").innerHTML = Math.max(A, B , C , D);
}

function getAvgPerDay(){
  
  let total = 0;

   for ( let i = 0; i < values.length; i++) {
        total += values[i].values;     }
      
        let getAvgPerDayResult = total / values.length;
          
  return document.getElementById("avgPerDayResult").innerHTML =avgPerDayResult;
}


function getMinPerWeek(){
  minPerWeekResult
}

function getMaxPerWeek(){
  maxPerWeekResult
}

function getAvgPerWeek(){
  avgPerWeekResult
}

function getMinPerMonth(){
  minPerMonthResult
}

function getMaxPerMonth(){
  maxPerMonthResult
}

function getAvgPerMonth(){
  avgPerMonthResult
}

function getMinPerYear(){
  minPerYearResult
}

function getMaxPerYear(){
  maxPerYearResult
}

function getAvgPerYear(){
  avgPerYearResult
}

