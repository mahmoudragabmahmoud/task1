var slides = document.getElementsByClassName("slide");
var slideIndex = 1;

function show(n)
{
    slideIndex +=n;
    slide(slideIndex);
}

function slide(n)
{ 

    
    if(slideIndex > slides.length)
        {
        slideIndex =1;        
        }
    if(slideIndex < 1)
        {
            slideIndex = slides.length
        }
    
    for(var i=0;i<slides.length ; i++)
        {
        slides[i].style.display="none";    
        }
    slides[slideIndex-1].style.display="block";
}

slide(1)

/*ttttttttttttttttttttttttttttttttt8*/

var userName = document.getElementById("uname");
var  userPhone= document.getElementById("uphone");
var userMail = document.getElementById("umail");
var userLocation = document.getElementById("ulocation");
var btnToggle = document.getElementById("btnToggle");
var inps = document.getElementsByTagName("input");
var allData =[];

allData = JSON.parse(localStorage.getItem("clientsPhone"));
        displayData();

function addRecord()
{

    var person = {name:userName.value , phone:userPhone.value , mail:userMail.value , location:userLocation.value}
    
    if(userName.value != '' && userPhone.value !='' &&userLocation.value != '' && userMail.value != '' )
        {
    allData.push(person);
localStorage.setItem("clientsPhone",JSON.stringify(allData));
      
    displayData();
    clearForm();   
        
        }
    else
        {
            alert("all fields required");
        }

    
  
}

function displayData()
{
    var rows="";
    
    for(var i=0;i<allData.length;i++)
        {
    rows +="<tr><td>"+allData[i].name+"</td><td>"+allData[i].phone+"</td><td>"+allData[i].mail+"</td><td>"+allData[i].location+"</td></tr>";        
        }    
document.getElementById("tableResult").innerHTML=rows       
}


function clearForm()
{
    for(var i=0; i<inps.length;i++)
        {
        inps[i].value ='';    
        }
}



function toggleForm()
{
    var div = document.getElementById("form-container");
 
    
    if(div.style.display == "none")
        {
            div.style.display = "block";
            btnToggle.innerHTML='hide <i class="fas fa-arrow-alt-circle-up"></i> ';
        }
    else
        {
            div.style.display = "none";
            btnToggle.innerHTML='show <i class="fas fa-arrow-alt-circle-down"></i>';
            
        }    
}

// JavaScript Document

document.getElementById("demo").innerHTML="hello";
var x=666+"a";
if(isNaN(x)){
	console.log(true)}
	else{
	console.log(false)}
		
		console.log(x)
		function welcomeuser(){
		var user=document.getElementById("username").value;
		alert("welcome:"+user)
		}
		
		function desginHeading(){
			document.getElementById("head").className="test";
		}
		
/*		
		var people =
		[
		{name:"goma", age:25 , sallary: 7000},
		{name:"Ali", age:23 , sallary: 5000},
		{name:"omar", age:35 , sallary: 2000},
		{name:"sayed", age:34 , sallary: 3400},
		{name:"fady", age:56 , sallary: 10000}
		]
		
		var final=""
		for(var i=0;i<people.length;i++){
			final+="<tr><td>"+ people[i].name+"</td><td> "+ people[i].age+"</td><td> "+ people[i].sallary+"</td></tr>"
		}
		
		document.getElementById("tableResult").innerHTML=final 
		*/
