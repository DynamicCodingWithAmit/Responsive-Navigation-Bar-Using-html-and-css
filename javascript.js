let changes = document.getElementById('change');
let Navbars = document.getElementById('Navbar');

changes.addEventListener('click',()=>{
    if(changes.checked == true){
        Navbars.style.display="flex";
    }
    else{
        Navbars.style.display="none";
    }
})