let outputScreen= document.getElementById('text')
function display(num){
    outputScreen.value+=num
}
function clearOnechar(){
 outputScreen.value=outputScreen.value.slice(0,-1)
}
function clearScreen(){
    outputScreen.value=""
}
function calculation(){
    outputScreen.value=eval(outputScreen.value)
}
