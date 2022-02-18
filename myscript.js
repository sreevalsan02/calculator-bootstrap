
let a = 0;

let b = 0;

let final = 0;
let i = 0;
let op = 0;
var temp;

let second = 0;

function calc (n){
    if(i==4){
        n=16;
    }
    if(second==0&&n>11){i=1;}
    if(i==2&&n==11){i=3;}
    if(n==16){
        i=0;
        a=0;
        b=0;
        second=0;
        final=0;
        document.getElementById('result').innerHTML=0;
    }
    else if(i==0&&n<10){
        a = (a*10)+n;
        console.log(a);
        document.getElementById('result').innerHTML=a;

    }
    else if(i==1){
        if(n==12)
        {
            op=12;
            console.log('+');
        document.getElementById('result').innerHTML=a +" + ";

        }
        if(n==13)
        {
            op=13;
            console.log('-');
        document.getElementById('result').innerHTML=a +" - ";
        }
        if(n==14)
        {
            op=14;
            console.log('/');
        document.getElementById('result').innerHTML=a +" / ";
        }
        if(n==15)
        {
            op=15;
            console.log('*');
        document.getElementById('result').innerHTML=a +" * ";
        }
        i++;
    }
    else if(i==2&&n<10){
        b= b*10 + n;
        second=1;
        console.log(b);
        temp = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = temp + n;

    }
    else if(i==3){
        if(op==12)
        {
            final=a+b;
            console.log(final);
        }
        if(op==13)
        {
            final=a-b;
            console.log(final);
        }
        if(op==14)
        {
            final=a/b;
            console.log(final);
        }
        if(op==15)
        {
            final=a*b;
            console.log(final);
        }

        i++;
        temp = document.getElementById('result').innerHTML;
        document.getElementById('result').innerHTML = temp +" = " + final;
        
    }
    

}