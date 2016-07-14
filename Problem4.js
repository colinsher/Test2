/**
 * Created by colinjsherman on 7/14/16.
 */
//Test 2
//Problem 4

var larger = function(first,second){
    if(isNaN(first)){
        if(isNaN(second)){
            alert("No numbers submitted");
        }else{
            return second;
        }
    }else if(isNaN(second)){
        return first;
    }else{
        if(first>second){
            return first;
        }else{
            return second;
        }
    }

}