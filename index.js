// 1.*************************PRIME NUMBER*************************
function prime(){
    var arr= [];
    var size = 5; 

    for(var i=0; i<size; i++) {
		arr[i] = prompt('Enter Element ' + (i+1));
    }

    var n=arr[0];
    document.getElementById("disp").innerHTML=("First element of the given array is "+ n +"." +"<br>");
    var n, i, flag = true;
   
    for(i = 2; i <= n - 1; i++) 
        if (n % i == 0) { 
            flag = false; 
            break; 
        } 
        
     if (flag == true) {
      document.getElementById("prim").innerHTML=(n + " is prime"); 
    }
     else{
      document.getElementById("prim").innerHTML=(n + " is not prime"); 
    }
    
  }
    
    // ********************************************************


    // 2.******************MOST FREQUENT ITEM******************
    function frequent(){
      var arr= [];
      var size = 5; 
  
      for(var i=0; i<size; i++) {
      arr[i] = prompt('Enter Element ' + (i+1));
      }
    
     var mf=1;
     var m=0;
     var item;
     for(var i=0;i<arr.length;i++){
        for(var j=i;j<arr.length;j++){
                if (arr[i]==arr[j]){
                  m++;
                }
                if(mf<m){
                  mf=m;
                  item=arr[i];
                }
        }
     m=0;
    }
    document.getElementById("freq").innerHTML=(item+"("+mf+"times)");
    }
    // ***********************************************************

    //3. *******************SWAPPING******************************
    function swap(){
    str = prompt("Enter a sentence");
    var UPPER = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
    var LOWER = 'abcdefghijklmnopqrstuvwxyz';
    var result = [];
      
      for(var x=0; x<str.length; x++)
      {
        if(UPPER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toLowerCase());
        }
        else if(LOWER.indexOf(str[x]) !== -1)
        {
          result.push(str[x].toUpperCase());
        }
        else 
        {
          result.push(str[x]);
        }
      }
    document.getElementById("swapp").innerHTML=(result.join(''));

}
    // ******************************************************

    // 4.*****************SUM OF SQUARES**********************
    function sumsquare(){
      var arr= [];
      var size = 5; 
  
      for(var i=0; i<size; i++) {
      arr[i] = prompt('Enter Element ' + (i+1));
      }
       
        var sum = 0; 
        i = arr.length;
        while (i--){ 
         sum += Math.pow(arr[i], 2);
         }
       
        document.getElementById("sum").innerHTML=("Sum of squares of elements of the given array is "+sum);
}
   //***********************************************************  

    // 5. **********************EVENODD****************************
    function oddeven(){
      var x="";
        for (var i=0; i<=15; i++) {
            if (i === 0) {
              x+= (i +  " is even" +"\n" );
            }
            else if (i%2 === 0) {
              x+= (i + " is even"+"\n"); 
            }
            else {
              x+= (i + " is odd"+"\n");
            }
            document.getElementById("odd").innerText=(x);
        }
       
    }
    

    // *********************************************************

    //6. ********************TRUNCATE********************
     function truncate() {
      var str = prompt("Enter a string");
      var num= prompt("Specify number of characters ");    
    
     if (str.length > num) {
      document.getElementById("trunc").innerHTML= (str.slice(0, num) + "...");
    } 
    else {
      document.getElementById("trunc").innerHTML= (str);
    }
}
    
//   ******************************************************

//7. *****************LARGEST NUMBER***********************

function findLarge(){
    var num1= prompt("Enter the first number");
    var num2=prompt("Enter the second number");

    if(num1>num2){
      document.getElementById("lar").innerHTML=("Larger number is "+ num1);
    }
    else{
      document.getElementById("lar").innerHTML=("Larger number is "+ num2);
    }
}
// *********************************************************

// 8.******************ALPHABETICAL ORDER**************************
function alphabetical(){
 
      let array =[];
      let length = 5;
  
      
      for( i=0; i<length; i++)    
          {
          array[i] = prompt('Enter Element ' + (i+1));
          }
      document.getElementById("alph").innerText = "The Array elements are " + array + '\n' +
      " The Array elements in alphabetical order is " +  array.sort();
  }

// ************************************************************

//9.*********************PATTERN-JAVASCRIPT********************
function printletters(){

  var str = "Javascript";
  var result = " ";
 
  for (var i of str) {
      result +=  i + " "; 
     
  document.getElementById("prin").innerText+=result;
  document.getElementById("prin").innerText +="\n";
   }
  } 


// ************************************************************

// 10. ******************PATTERN-STAR**************************
function pattern(){
    var i,j;
    var result="";
    for(i=1;i<=4;i++){
      for(j=1;j<=i;j++){
        result+=("*");
       }
        result+="\n";
 }
    document.getElementById("patt").innerText=result;
}
// ************************************************************