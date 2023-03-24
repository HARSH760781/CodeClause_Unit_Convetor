let unit = document.getElementById('Unit');
let num = document.getElementById('number');
let from = document.getElementById('From');
let to = document.getElementById('To');


function calculate(){
    if(unit.value == "Length")
    {   
        
        if(from.value === "KiloMeter")
        {
            if(to.value == "KiloMeter")
            res = num.value;
            else if(to.value == "Meter")
            res = (num.value)*1000;
            else if(to.value == "Centimeter")
            {
                res = (num.value)*100000;
            }
        }
        else if(from.value == "Meter")
        {
            if(to.value == "KiloMeter")
                res = (num.value)*0.001;
            else if(to.value == "Meter")
                res = (num.value)*1;
            else if(to.value == "Centimeter")
                res = (num.value)*100;
        }
        else if(from.value == "Centimeter")
        {
            if(to.value == "KiloMeter")
                res = (num.value)/100000;
            else if(to.value == "Meter")
                res = (num.value)*0.01;
            else if(to.value == "Centimeter")
                res = (num.value)*1;
        }
    }
    num.value += " = "+res;
};