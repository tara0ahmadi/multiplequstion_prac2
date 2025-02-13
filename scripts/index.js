function check(){
   var c=0;
   var q1=document.quiz.question1.value;
   var q2=document.quiz.question2.value;
   var q3=document.quiz.question3.value;
   var q4=document.quiz.question4.value;
   var result=document.getElementById('result');
   var quiz=document.getElementById("quiz")
   if(q1=="blue"){c++}
   if(q2=="yellow"){c++}
   if(q3=="blue"){c++}
   if(q4=="red"){c++}
   quiz.style.display="none"
  if (c<=3) 
   {
   result.textContent=`Your result is ${c}.It is not good`
  } else {
      result.textContent=`Your result is ${c}.It is awesome,Keep it up`
  }
}
