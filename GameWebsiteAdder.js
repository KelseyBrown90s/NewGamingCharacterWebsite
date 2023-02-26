
document.getElementById('add').addEventListener('click',() => {
let table=document.getElementById('list');
let row=table.insertRow(1);
row.insertCell(0).innerHTML = document.getElementById('name').value;
row.insertCell(1).innerHTML = document.getElementById('character').value;
row.insertCell(2).innerHTML = document.getElementById('ability').value;
});
//This file allows the user to insert there answers for each ID through inner HTML.