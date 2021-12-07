

var flag=1;
function dark(){
  flag=0;
  document.getElementById("mode").innerHTML='<i class="las la-sun" title="Light-Mode"></i>';
  var ar=document.getElementsByClassName("back");
  document.getElementById("nav").style.background="#3F3F3F";
  document.getElementById("menu").style.background="#3F3F3F";
  var arr2=document.getElementsByClassName("text1");
  for(var j=0;j<arr2.length;j++){
    arr2[j].style.color="#ffff"
  }
  for(var i=0;i<ar.length;i++){
    ar[i].style.background="#3F3F3F"
  }
 document.body.style.background="#3F3F3F"
 var table=document.getElementById("x");
 var rows = table.getElementsByTagName("tr");

for(i = 0; i < rows.length; i++){
  if(i % 2 == 0){

       rows[i].style.background="#4a4646";
rows[i].style.color="#ffff";
     }else{

       rows[i].style.background="#3F3F3F";
       rows[i].style.color="#ffff";

     }
}
document.getElementById("box").className=document.getElementById("box").className.replace(" light_selected","");

document.getElementById("box").className+=" dark_selected";
}

function light(){
  flag=1
  document.getElementById("mode").innerHTML='<i class="las la-moon" title="Dark-Mode"></i>';

  var arr=document.getElementsByClassName("back");
  document.getElementById("nav").style.background="#f7f7f5";
  document.getElementById("menu").style.background="#f7f7f5";
  var arr2=document.getElementsByClassName("text1");
  for(var j=0;j<arr2.length;j++){
    arr2[j].style.color="#2a2b2a"
  }
  for(var j=0;j<arr.length;j++){
    arr[j].style.background="#ffff"
  }
 document.body.style.background="#ffff";
 var ltable=document.getElementById("x");
 var lrows = ltable.getElementsByTagName("tr");

for(i = 0; i < lrows.length; i++){
  if(i % 2 == 0){

       lrows[i].style.background="rgb(237,237,237)";
      lrows[i].style.color="#2a2b2a";
     }else{

       lrows[i].style.background="#ffff";
       lrows[i].style.color="#2a2b2a";

     }
}
document.getElementById("box").className=document.getElementById("box").className.replace(" dark_selected","");
document.getElementById("box").className+=" light_selected";
}
dark()
function modes(){
  if(flag==1){
    dark();

  }
  else{
    light();
  }
}
