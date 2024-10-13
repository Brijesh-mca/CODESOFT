let result = document.getElementById('result');



try {
    function display(value){
        result.value += value;
    }
    
    
        function Equal(){
            result.value  = eval(result.value)
        }
        
    
    
    
    
    function Clear(){
        result.value= "";
    }
    function Delete(){
        result.value= result.value.toString().slice(0,-1);
    }
} catch (error) {
    result.value= "Error";
}