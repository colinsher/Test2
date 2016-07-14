/**
 * Created by colinjsherman on 7/14/16.
 */
//alert("test 2 success!");

//Test 2
    //Problem 1:

var search = function(s,c){
    s=s.toLowerCase();
    c=c.toLowerCase();
    var count = 0;
    for(i=0;i<s.length;i++){
        if(s.charAt(i)===c.charAt(0)){
            var same = true;
            for(j=0;j<c.length;j++){
                if(s.charAt(i+j)!==c.charAt(j)){
                    same = false;
                }
            }
            if(same){
                count ++;
                console.log("found "+count+" "+c);
            }
        }
    }
    return count;
}

var runSearch = function(){
    var string = document.getElementById("string").value;
    var character = document.getElementById("search").value;
    var num = search(string,character);
    var HTMLstring = "There are "+num+" "+character+"'s in "+string+".";
    document.getElementById("results").innerHTML = HTMLstring;
}

document.getElementById("run").addEventListener("click",runSearch);