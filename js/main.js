function closeAllContent(){

    var aAllContents = document.querySelectorAll(".content");
   

    for(var iCount=0;iCount<aAllContents.length;iCount++){

        var content = aAllContents[iCount];
    
            content.className = "content";
        
    }


}

var box1 = document.querySelector("#box1");
    var homeContent = document.querySelector("#homeContent");

        box1.onclick = function(){
            closeAllContent();

            if(homeContent.className == "content"){
                homeContent.className = "content show";
            }else{
                homeContent.className = "content";
            }
	   }
        
var box2 = document.querySelector("#box2");
    var aboutContent = document.querySelector("#aboutContent");

        box2.onclick = function(){
             closeAllContent();
            if(aboutContent.className == "content"){
                aboutContent.className = "content show";
            }else{
                aboutContent.className = "content";
            }
	   }
        
var box3 = document.querySelector("#box3");
    var serviceContent = document.querySelector("#serviceContent");

        box3.onclick = function(){
             closeAllContent();
            if(serviceContent.className == "content"){
                serviceContent.className = "content show";
            }else{
                serviceContent.className = "content";
            }
	   }
        
var box4 = document.querySelector("#box4");
    var workContent = document.querySelector("#workContent");

        box4.onclick = function(){
             closeAllContent();
            if(workContent.className == "content"){
                workContent.className = "content show";
            }else{
                workContent.className = "content";
            }
	   }
        
var box5 = document.querySelector("#box5");
    var formContent = document.querySelector("#formContent");

        box5.onclick = function(){
            closeAllContent();
            if(formContent.className == "content"){
                formContent.className = "content show";
            }else{
                formContent.className = "content";
            }
	   }