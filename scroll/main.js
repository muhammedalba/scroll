let stars = document.getElementById("stars");
let moon = document.getElementById("moon");
let mountains3 = document.getElementById("mountains3");
let mountains4= document.getElementById("mountains4");
let river = document.getElementById("river");
let boat = document.getElementById("boat");
let ohaya = document.querySelector(".ohaya")


window.onscroll= function(){
let value = scrollY;
stars.style.left = value + "px";////تحرسك النجوم الى اليمين
///تحريك القمر الى الاسفل اسرع 3 مرات
moon.style.top = value *4 + "px";
mountains3.style.top = value *2 + "px";/// تحريك الجبل
mountains4.style.top = value *1.5 + "px";
river.style.top = value  + "px";
boat.style.top = value  + "px";
boat.style.left = value*3 + "px";
ohaya.style.fontSize = value  + "px";
if(scrollY >= 67){ohaya.style.fontSize = 67  + "px";
ohaya.style.position =  "fixed";////لايقافها في منتصف
}
if(scrollY >= 450){ohaya.style.display ="none";}
else{ohaya.style.display ="block";};
if(scrollY >= 127){
document.querySelector(".main").style.background =" linear-gradient(#376281,#10001f)";

}else{ document.querySelector(".main").style.background ="linear-gradient(#200016,#10001f)";}


}











