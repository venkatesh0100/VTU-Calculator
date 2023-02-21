function Calculate() 
                { 
                
                    const t1 = 7; 
                    const t2 = 7.5; 
                    const t3 = 10;     
                    var a2 = parseInt(document.getElementById("s2").value);
                    var a3 = parseInt(document.getElementById("s3").value);
                    var a4 = parseInt(document.getElementById("s4").value);
                    var a5 = parseInt(document.getElementById("s5").value);
                    var a6 = parseInt(document.getElementById("s6").value);
                    var a7 = parseInt(document.getElementById("s7").value);
                    var a8 = parseInt(document.getElementById("s8").value);
                    var sum = a2 + a3 + a4 + a5 + a6 + a7 + a8;
                    var p = sum / t1;
                    var x = p + t2 ;
                    var sgpa = x / t3;
                    alert( "percentage is ==>" + p + "      sgpa is ==>" + sgpa );

                }  