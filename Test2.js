// Get the modal
var modal = document.getElementById('myModal');

// Get the button that opens the modal
var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementsByClassName("close")[0];

// When the user clicks the button, open the modal 
btn.onclick = function() {
    modal.style.display = "block";
}

// When the user clicks on <span> (x), close the modal
span.onclick = function() {
    modal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function(event) {
    if (event.target == modal) {
        modal.style.display = "none";
    }
}

// скрол
scrollbar: {
    el: '.swipper-scrollbar',
    // Возможность перетаскивать скрол
    draggable: true
}

// перетаскивания на ПК 
simulateTouch: true,
// Чувствительность свайпа
touchRatio: 1,
// Уголь срабатывания свайпа/перетаскивания
touchAngle: 45,
// Курсор перетаскивания
grabCursor: true,


// Tabs
var iconBx = document.querySelectorAll(' .iconBx');
var contentBx = document.querySelectorAll(' .iconBx');

for(var i = 0, i<iconBx.length; i++){
    iconBx[i].addEventListener('mouseover', function(){
        for (var i=0; i<contentBx.length; i++){
            contentBx[i].className='contentBx';
        }
        document.getElementById(this.dataset.id).className = 'contentBx active'
 
        for (var i=0; i<contentBx.length; i++){
            contentBx[i].className='contentBx';
        }
        this.className= 'iconBx active';
   })
}