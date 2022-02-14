

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#next-btn");
const book = document.querySelector("#book");
const removes=document.querySelector("#flip_book");
const shows1=document.querySelector("svg");
const paper1 = document.querySelector("#p1");
const paper2 = document.querySelector("#p2");
 var g=document.querySelector(".info");
 var name=document.querySelector('name');
 var text;
var ch=window.location.href;




 window.onload=function(){

for(var  i=0;i<ch.length;i++){
    if(ch.charAt(i)=="v")
    {
        text=ch.substring(i+2,ch.length);
        if(text!=""){
       var svg_con=document.querySelector('#svg_con');
       var moretext="<p style='width:300px'>My love for you is beyond this universe. If the multiverse exists, then I love you on every alternate earth. Happy Valentine’s Day!<p>";
        var firsttext="<h2>"+text+"</h2>";
        var moretext1="<p style='width:300px'>The only thing I am sure about is being with you, now and forever. Happy Valentine’s Day!</p>";
        var moretext2="<p style='width:300px'>I did not believe in love at first sight, but then I saw you. I have never been this happy after being proved wrong. Happy Valentine’s Day!</p>"
        
        $("#buttn").show();
        setTimeout(function(){
            svg_con.innerHTML=firsttext;
        });
        setTimeout(function(){
            svg_con.innerHTML=moretext;
        },5000);
        setTimeout(function(){
            svg_con.innerHTML=moretext1;
        },10000);
        setTimeout(function(){
            svg_con.innerHTML=moretext2;
        },15000);


        g.style.display="none";
    }
    else{
        $("#info").hide();
    }
}
    else{
        // document.getElementById("buttn").style.display="none";
    }
    
}
};


// Event Listener
// prevBtn.addEventListener("click", goPrevPage);
// nextBtn.addEventListener("click", goNextPage);

// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers + 1;

function openBook() {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook(isAtBeginning) {
    if(isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else {
        book.style.transform = "translateX(100%)";
    }
    
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage() {
    if(currentLocation < maxLocation) {
        switch(currentLocation) {
            case 1:
                openBook();
                paper1.classList.add("flipped");
                paper1.style.zIndex = 1;
                // removes.setAttribute("style","animation-name:hidecss; animation-duration:2s; opacity:0");
                setTimeout(function(){removes.style.display="none";},400);
                shows1.setAttribute("style","display:block;");
                // document.getElementById('OBJECTS_1_').innerHTML="<foreignObject width='100' height='50' requiredExtensions='http://example.com/SVGExtensions/EmbeddedXHTML'><div xmlns='http://www.w3.org/1999/xhtml'><a href='www.gmail.com'>Gmail</a> </div></foreignObject>";
                break;
            case 2:
                paper2.classList.add("flipped");
                paper2.style.zIndex = 2;
                break;
            
            default:
                throw new Error("unkown state");
        }
        currentLocation++;
    }
}

function goPrevPage() {
    if(currentLocation > 1) {
        switch(currentLocation) {
            case 2:
                closeBook(true);
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3:
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            
            default:
                throw new Error("unkown state");
        }

        currentLocation--;
    }
}


const aballon1= document.getElementById("left_x5F_heart_x5F_baloon");//left big ballon
const aballon2=document.getElementById("all_x5F_hearts");
const aballon3=document.getElementById("right_x5F_ballon");


setTimeout(function(){
	aballon1.setAttribute("style","animation-name:fly; animation-duration:5s; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-direction:alternate");
		aballon2.setAttribute("style"," animation-name:fly1; animation-duration:5s; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-direction:alternate");
		aballon3.setAttribute("style"," animation-name:fly3; animation-duration:5s; animation-iteration-count: infinite; animation-fill-mode: forwards; animation-direction:alternate");
}

	,2000);


function start(){
    
    goPrevPage();
    goNextPage(); 
    $("#svg_con").show();
}

function generate(){
    var gen=document.querySelector(".generate");
    var n=$("#name").val();
    if(n===""){
        alert("Please enter some text ...");

    }
    else{
    gen.innerHTML="<div style='word-wrap: break-word; width:200px; background-color:white'>"+ch+"?v="+n+"</div>"
}
}


