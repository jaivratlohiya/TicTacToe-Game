
let isFilled=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
let current=1;
let resultStatus=false;
let count=0;
let resultContainer=document.getElementById('resultContainer');
let line=document.getElementById('line');
function choose(choosen){
    current=choosen;
    document.getElementById('options').style.display='none';
    document.getElementById('board').style.display='grid';
}



function clickFunction(element,num){
    if(count==8){
        console.log("over");
        resultContainer.style.display='block';

    }
    
    if(isFilled[num]==-1)
    {
        count++;
        if(current==0){
            element.innerHTML=0;
            isFilled[num]=0;
            current=1;
        }
        else{
            element.innerHTML="x";
            isFilled[num]=1;
            current=0;
        }
    }
    
}
function drawVerticalLines(num){
    line.style.display='inline-block';
    line.style.position='absolute';
    num=32+num*18;
    line.style.left=`${num}%`;    
}
function drawHorizontalLines(num){
    line.style.display='block';
    line.style.position='relative';
    num=(num+1)*10;
    line.style.left=`${num}%`;
}
function drawRightDiagonal(num){

}
function drawLeftDiagonal(num){

}
function checkUpDown(num){
    if(isFilled[num]==isFilled[num+3] && isFilled[num+3]==isFilled[num+6])
    {
        drawVerticalLines(num);
        return true;
    }
    return false;
    
}
function checkLeftRight(num){
    if(isFilled[num]==isFilled[num+1] && isFilled[num+1]==isFilled[num+2])
    {
        return true;
    }
    return false;

}
function checkRightDiagonal(){
    if(isFilled[0]==isFilled[4] && isFilled[4]==isFilled[8]){
        return true;
    }
    return false;
}
function checkLeftDiagonal(){
    if(isFilled[2]==isFilled[4] && isFilled[4]==isFilled[6]){
        return true;
    }
    return false;
}

function checkWin(num){
    
    

    if(num==0 || num==3 || num==6){
        if(checkUpDown(0)){
            resultStatus=true;
        }
    }
    else if(num==1 || num==4 || num==7){
        if(checkUpDown(1)){
            resultStatus=true;
        }
    }
    else{
        if(checkUpDown(2)){
            resultStatus=true;
        }
    }
    if(num==0 || num==1 || num==2){
        if(checkLeftRight(0)){
            resultStatus=true;
        }
    }
    else if(num==3 || num==4 || num==5){
        if(checkLeftRight(3)){
            resultStatus=true;
        }
    }
    else{
        if(checkLeftRight(6)){
            resultStatus=true;
        }
    }
    if(num==4){
        if(checkLeftDiagonal()){
            resultStatus=true;
        }
        if(checkRightDiagonal()){
            resultStatus=true;
        }
    }
    else if(num==0 || num==8){
        if(checkRightDiagonal()){
            resultStatus=true;
        }
    }
    else if(num==2 || num==6){
        if(checkLeftDiagonal()){
            resultStatus=true;
        }
    }

    if(resultStatus){
        console.log("over");
        let winner;
        if(current==1){
            winner="0";
        } 
        else{
            winner="X";
        }
        document.getElementById('resultBlock').innerHTML=`${winner} Won`;
        resultContainer.style.display='flex';
    }
    if(count==9){
        resultContainer.style.display='flex';
        document.getElementById('resultBlock').innerHTML='OVER';


    }   


}

function reset(){
    isFilled=[-1,-1,-1,-1,-1,-1,-1,-1,-1];
    current=1;
    resultStatus=false;
    count=0;
    resultContainer.style.display='none';
    line.style.display='none';
    document.getElementById('options').style.display='flex';
    document.getElementById('board').style.display='none';
    document.getElementById('box1').innerHTML='';
    document.getElementById('box2').innerHTML='';
    document.getElementById('box3').innerHTML='';
    document.getElementById('box4').innerHTML='';
    document.getElementById('box5').innerHTML='';
    document.getElementById('box6').innerHTML='';
    document.getElementById('box7').innerHTML='';
    document.getElementById('box8').innerHTML='';
    document.getElementById('box9').innerHTML='';

}
