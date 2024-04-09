var trig = document.getElementById('num').addEventListener('keyup',tri);
function tri(){
     var number = document.getElementById('num').value;
   
     var result = '';
     var test = {1:
                  {'0':false ,'1':'one ','2':'two ','3':'three ','4':'four ','5':'five ','6':'six ','7':'seven ','8':'eight ','9':'nine '},
                2:
                  {'0':false ,'1':1 ,'2':'twinty ','3':'thrity ','4':'fourty ','5':'fifty ','6':'sixty ','7':'seventy ','8':'eighty ','9':'ninety ','10':'ten ','11':'eleven ','12':'twelve ','13':'thirteen ','14':'fourteen ','15':'fifteen ','16':'sixteen','17':'seventeen ','18':'eighteen ','19':'nineteen'},
                3:
                  {'0':false ,'1':'one hundred ','2':'two hundred ','3':'three hundred ','4':'four hundred ','5':'five hundred ','6':'six hundred ','7':'seven hundred ','8':'eight hundred ','9':'nine hundred '},
                4:
                  {'0':false ,'1':'one thousand ','2':'two thousand ','3':'three thousand ','4':'four thousand ','5':'five thousand ','6':'six thousand ','7':'seven thousand ','8':'eight thousand ','9':'nine thousand '},
                5:
                  {'0':false ,'1':'one Lakh ','2':'two Lakh ','3':'three Lakh ','4':'four Lakh ','5':'five Lakh ','6':'six Lakh ','7':'seven Lakh ','8':'eight Lakh ','9':'nine Lakh '}
                };
    if( number.length !== 1 ){

        for (let index = 0; index < number.length ; index++) {

            str = number.substring(index,number.length);

            if(str.length == 2 && test[str.length][str[0]] == 1){
                result += test[str.length][str];
                break;
            }
            else if(test[str.length][str[0]]){
                result += test[str.length][str[0]];
            }
       }
    }
    else{
        result += test[number.length][number];     
    }
    
     document.getElementById('result').innerHTML = result
     document.getElementById('result').style.color = 'rgb(82, 255, 47)';

    }
