function updateText(){
   let text = document.getElementById('text-input').value;
   document.getElementById('text-output').innerText = text
  }
  function makeBold(elem){
    document.getElementById('text-output').classList.toggle('bold')
    // document.getElementById('bold').classList.toggle('active')
    elem.classList.toggle('active')
    
  }
  
  function makeItalic(elem){
      document.getElementById('text-output').classList.toggle('italic')
      document.getElementById('italic').classList.toggle('active')
  }
  
  function makeUnderline(elem){
    //   document.getElementById('text-output').classList.toggle('underline')
    //   document.getElementById('underline').classList.toggle('active')
    elem.classList.toggle('active')
    let underlineText = document.getElementById('text-output')
    if (underlineText.classList.contains('underline')){
        underlineText.classList.remove('underline')
    }
    else{
        underlineText.classList.add('underline')
    }
  }
  

  function alignText(elem, alignType){
    let alignElement = document.getElementById('text-output')
    alignElement.style.textAlign = alignType
    let buttonList = document.getElementsByClassName('align')
    for (let i = 0;i<buttonList.length;i++){
        buttonList[i].classList.remove('active')
    }
    elem.classList.toggle('active')
  }