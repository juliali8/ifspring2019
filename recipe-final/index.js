// function completeIngredient(id) {
//     // if(document.) {
//     //     document.getElementById(id).style.opacity = "1";
//     // }
//     // else {
//     //     document.getElementById(id).style.opacity = "0.5";
//     // }
//     document.getElementById.classList.toggle('ingredientImageFinish');
// }


var currentImage = 'notCollected';

function completeIngredient(id){
    var image = document.getElementById(id);
    
    if(currentImage =='notCollected'){
        image.style.opacity = "0.3";
        currentImage = "collected";
        console.log("collected");
    }
    else{
        image.style.opacity = "1";
        currentImage = 'notCollected';
        console.log("notCOlelcted");
    }
}