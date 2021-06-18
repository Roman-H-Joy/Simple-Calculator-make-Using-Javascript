                      // ****** Function That Display Values *******

           function dis(value){
    document.getElementById('result').value+=value;
}


                     // ########## For calculation (=) button Works  ###########

         function solve(){   
let x=document.getElementById('result').value;
let y=eval(x);
document.getElementById('result').value=y;
         }
                     // ^^^^^^^ For reset (C) Button Works ^^^^^^^^

         function clr(){
            document.getElementById('result').value="";
         }