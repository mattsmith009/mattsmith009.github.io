// Open the navigation 
function openNav() {
    document.getElementById("Sidenav").style.width = "250px";
    document.getElementById("myChart").style.width = "80%";
    document.getElementById("myChart").style.float = "right";
  }

  
// Close the navigation 
function closeNav() {
  document.getElementById("Sidenav").style.width = "0";
  document.getElementById("myChart").style.width = "100%";
  }

function isChecked(name_list) {
  for (let i = 0; i < name_list.length; i++) {
    if (document.getElemenentById(name_list[i]).checked) {
      alert("checked");
    }
  }
}





