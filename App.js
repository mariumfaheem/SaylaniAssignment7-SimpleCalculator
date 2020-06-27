function getHistory(){
    return document.getElementById("history-value").innerText;
}
function printToHistory(num)
{
    document.getElementById("history-value").innerText=num;
}
function getOutput()
{
    return document.getElementById("output-value").innerText;
}
function printOuput(num)
{

    if(num=="")
    {
        document.getElementById("output-value").innerText=num;
    }
    else{

        document.getElementById("output-value").innerText=getFormattedNumber(num);
    }

}
function getFormattedNumber(num)
{
    if(num=="-")
    {
        return " ";
    }
    var n = Number(num);
    var value = n.toLocaleString("en")
    return value;
}
function reverseNumber(num)

{
    return Number(num.replace(/,/g,''));
}

var operator = document.getElementsByClassName("operator");
for(var i = 0 ;i<operator.length;i++)
{
    operator[i].addEventListener('click',function()
    {
       if(this.id=="clear")
       {
           printToHistory("");
           printOuput("");
       }
       else if(this.id=="backspace")
       {
           var output = reverseNumber(getOutput()).toString();
           if(output)
           {
               output = output.substr(0,output.length-1);
               printOuput(output)
           }

       }
       else{
           var output = getOutput()
           var history =getHistory();
           if(output!="")
           {
               output=reverseNumber(output);
               history=history+output;
               if(this.id=="=")
               {
                   var result = eval(history);
                   printOuput(result);
                   printToHistory("")
               }
               else{
                   history= history+this.id;
                   printToHistory(history);
                   printOuput("")
               }

           }
       }
    })
}
var number = document.getElementsByClassName("number");
for(var i = 0 ;i<number.length;i++)
{
    number[i].addEventListener('click',function()
    {
        var output=reverseNumber(getOutput());
       if(output!==NaN){
           output = output+this.id;
           printOuput(output)
       }
    })
}