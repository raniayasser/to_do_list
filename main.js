var input=document.querySelector("input");
var btn=document.querySelector(".addTask > button");
btn.addEventListener('click',addList)

function addList(e){

    var notComplete=document.querySelector(".notComplete");
    var Complete=document.querySelector(".Complete");
    var newLi=document.createElement("li");
    var checkBtn=document.createElement("button");
    var delBtn=document.createElement("button");
    checkBtn.innerHTML='<i class="fa fa-check"></i>';
    delBtn.innerHTML='<i class="fa fa-trash"></i>';

    if(input.value !==''){
        newLi.textContent = input.value; //add task
        input.value='';
        notComplete.appendChild(newLi);
        newLi.appendChild(checkBtn);
        newLi.appendChild(delBtn);


        checkBtn.addEventListener('click',function(){
            var parent=this.parentNode;
            parent.remove();
            Complete.appendChild(parent);
            checkBtn.style.display='none';
          
        });
        delBtn.addEventListener('click', function(){
            var parent=this.parentNode;
            parent.remove();
    
        });
    }
  



}