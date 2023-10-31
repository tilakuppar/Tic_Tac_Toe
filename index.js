var count=0
function tic_tac_toe(value)
{
        switch(value){
        case '0':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b1').value='O';
                document.getElementById('b1').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b1').value='X';
                document.getElementById('b1').innerHTML='X';
                count=count+1;
                break;
            }
        case '1':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b2').value='O';
                document.getElementById('b2').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b2').value='X';
                document.getElementById('b2').innerHTML='X';
                count=count+1;
                break;
            }
        case '2':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b3').value='O';
                document.getElementById('b3').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b3').value='X';
                document.getElementById('b3').innerHTML='X';
                count=count+1;
                break;
            }
        case '3':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b4').value='O';
                document.getElementById('b4').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b4').value='X';
                document.getElementById('b4').innerHTML='X';
                count=count+1;
                break;
            }
        case '4':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b5').value='O';
                document.getElementById('b5').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b5').value='X';
                document.getElementById('b5').innerHTML='X';
                count=count+1;
                break;
            }
        case '5':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b6').value='O';
                document.getElementById('b6').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b6').value='X';
                document.getElementById('b6').innerHTML='X';
                count=count+1;
                break;
            }
        case '6':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b7').value='O';
                document.getElementById('b7').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b7').value='X';
                document.getElementById('b7').innerHTML='X';
                count=count+1;
                break;
            }
        case '7':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b8').value='O';
                document.getElementById('b8').innerHTML='O';
                count=count+1;
                break;
            }
          else if(count==1||count===3||count==5||count==7){
                document.getElementById('b8').value='X';
                document.getElementById('b8').innerHTML='X';
                count=count+1;
                break;
            }
        case '8':
            if(count==0||count==2||count==4||count==6||count==8){
                document.getElementById('b9').value='O';
                document.getElementById('b9').innerHTML='O';
                count=count+1;
                break;
            }
            else if(count==1||count===3||count==5||count==7){
                document.getElementById('b9').value='X';
                document.getElementById('b9').innerHTML='X';
                count=count+1;
                break;
            }
    }   
    var a=document.getElementById('b1').value;
    var b=document.getElementById('b2').value;
    var c=document.getElementById('b3').value;
    var d=document.getElementById('b4').value;
    var e=document.getElementById('b5').value;
    var f=document.getElementById('b6').value;
    var g=document.getElementById('b7').value;
    var h=document.getElementById('b8').value;
    var i=document.getElementById('b9').value;
    if(a=='O'&&b=='O'&&c=='O'||a=='O'&&d=='O'&&g=='O'||g=='O'&&h=='O'&&i=='O'||c=='O'&&f=='O'&&i=='O'||a=='O'&&e=='O'&&i=='O' ||d=='O'&&e=='O'&&f=='O'||b=='O'&&e=='O'&&h=='O'){
        alert("O WINS");
        window.location.reload();
    }
    if(a=='X'&&b=='X'&&c=='X'||a=='X'&&d=='X'&&g=='X'||g=='X'&&h=='X'&&i=='X'||c=='X'&&f=='X'&&i=='X'||a=='X'&&e=='X'&&i=='X'||d=='X'&&e=='X'&&f=='X'||b=='X'&&e=='X'&&h=='X'){
        alert("X WINS");
        window.location.reload();
    }
}
function reset_game(){
    count=0;
    window.location.reload();
}