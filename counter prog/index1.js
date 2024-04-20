const countlab=document.getElementById("mylab");
const dec=document.getElementById("mydec");
const inc=document.getElementById("myinc");
const res=document.getElementById("myres");
let count = 0;

inc.onclick= function(){
    count++;
    countlab.textContent=count;
}
dec.onclick=function(){
    if(count==0){
        console.log("less than zero is not good ma");
    }
    else{
        count--;
        countlab.textContent=count;
    }
}
res.onclick=function(){
    count=0;
    countlab.textContent=count;
}

