function pagebar()
{
  var links=document.getElementById('navbar').getElementsByTagName("a");
  var current = location.href;
  for (var i=0; i < links.length; i++)
  {
   if(links[i].href == current)
   {
      links[i].href = "";
      links[i].className='grayStyle';
   }
 }
}
var h1 = document.createElement("h1")
document.getElementById('someText')
.innerHTML = 'Basic Wesite in Javascript';

var p = document.createElement("p")
document.getElementById('Text')
.innerHTML = "All of this was created with JavaScript and it is a lot harder than it should be. The main problem that I am having with it is getting the stupid Footer to move down the page. Any input would be greatly appreciated.";


var newLi = document.createElement("li")
newLi.textContent = "Going to figure it out" 
var myList = document.getElementById("my-list")
myList.append(newLi);


var footer = document.getElementById("footer")
.innerHTML = "Nicki Christian WDev 2020"


