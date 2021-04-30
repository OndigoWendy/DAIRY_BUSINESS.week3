let A , B , C, D;
function getSum() {
  let val1=document.getElementById("A").value;
  let val2=document.getElementById("B").value;
  let val3=document.getElementById("C").value;
  let val4=document.getElementById("D").value;

  A=Number(val1);
  B=Number(val2);
  C=Number(val3);
  D=Number(val4);

sumResult=A+B+C+D;
   
  return document.getElementById("sumResult").innerHTML=sumResult;
}


