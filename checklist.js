function retrievedata()
{
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState==4&&this.status==200)
{
   console.log("welocome to retrieve data ");
   
var response=JSON.parse(this.responseText);
// console.log(response[0].title);
// var checklist="",compltd="";
console.log("length="+response.length);
let count=0;
for(var j=0;j<response.length;j++)
{
//     checklist+=response[j].title;
  console.log(response[j].title);
// console.log("checklist="+checklist);

// console.log("completed"+response[j].completed);
if(response[j].completed==true)
{
  var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
// checkbox.value = "value";
checkbox.id = "id";
checkbox.checked="true";
 checkbox.class="disabled";
var label = document.createElement('label');
label.htmlFor = "id";


var linebreak = document.createElement("br"); 
// var space = document.createElement("&nbsp;");
// label.style.whiteSpace = "pre-wrap";

label.appendChild(document.createTextNode(response[j].title));
// label.style.whiteSpace = "pre-wrap";
check_box.appendChild(checkbox);
// check_box.appendChild(space);
check_box.appendChild(label);
check_box.appendChild(linebreak);


}


else{
    var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
// checkbox.value = "value";
checkbox.id = "id";
checkbox.checked="";
// checkbox.onclick="taskcompleted(this);"
var label = document.createElement('label')
label.htmlFor = "id";

var linebreak = document.createElement("br");
// var space = document.createElement("&nbsp;");

// label.style.whiteSpace = "pre-wrap";
label.appendChild(document.createTextNode(response[j].title));
// label.style.whiteSpace = "pre-wrap";
check_box.appendChild(checkbox);
// check_box.appendChild(space);

check_box.appendChild(label);
check_box.appendChild(linebreak);
count++;
// function taskcompleted()
// {
//   var chkbox="", ts=0,tc=0,ttc=5;

//     for(var i=0;i<5;i++)
// {
//    chkbox[i]=document.getElementById("#id");
//   var text = document.getElementById("text");
//   if (chkbox[i].checked == true){
//     ts++;
//     tc=tc-ts;
//     ttc--;

//     text.innerHTML("Total task selected:"+ts);
//   } else {
//      text.style.display = "none";
//   }
// }
// }

}


}


}
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}

