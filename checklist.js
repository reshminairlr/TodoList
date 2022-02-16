function retrievedata()
{
var xhttp= new XMLHttpRequest();
xhttp.onreadystatechange = function(){
if(this.readyState==4&&this.status==200)
{
   console.log("welocome to retrieve data ");
   
var response=JSON.parse(this.responseText);
// console.log(response[0].title);
var checklist="",compltd="";

for(var j=0;j<response.length;j++)
{
    checklist+=response[j].title;
// console.log(checklist);
var checkbox = document.createElement('input');
checkbox.type = "checkbox";
checkbox.name = "name";
checkbox.value = "value";
checkbox.id = "id";
var label = document.createElement('label')
label.htmlFor = "id";
label.appendChild(document.createTextNode(checklist));
console.log("label"+label);
console.log("checkbox"+checkbox);

check_list.appendChild(checkbox);
check_list.appendChild(label);



}
}
}

xhttp.open("GET","https://jsonplaceholder.typicode.com/todos",true);
xhttp.send();

}