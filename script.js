var button=document.getElementById('toggle');
button.addEventListener('click',function(){
    if(document.body.style.backgroundColor=="white"){
        document.body.style.backgroundColor="black"
        circle.style.left="75%"
        heading.style.color="white"
    }
    else{
        document.body.style.backgroundColor="white"
        circle.style.left='0%'
        heading.style.color="black"
    }
});