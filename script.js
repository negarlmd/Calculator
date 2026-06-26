   const inp=document.querySelector('.display')
    const  buttom = document.querySelectorAll('button')
 
 buttom.forEach((btn)=>{
    btn.addEventListener('click',function(){
        let value = this.innerText;
        if (value==='C'){
            inp.value = ""
        }else if(value==='='){
try{
                inp.value=eval(inp.value)

}catch{
    inp.value='Error';
}
        }else{
            inp.value += value;
        }
    })
 })