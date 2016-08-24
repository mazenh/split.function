var find=function(){
	var quantity=document.getElementById("quantity");
	var count=0;
	var word=document.getElementById("word").value;
	var letter=document.getElementById("letter").value;
    var x=word.split("");
    for(i=0;i<=x.length;i++){
    	if(x[i]==letter){
    		count++;
    	}
    }
    quantity.innerHTML=count;
};

















/**
 * @author mazen hosaisy
 */
