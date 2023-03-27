function calculateNetPay(){
    var basicSalary = document.getElementById('salary').value;
    var benefits = document.getElementById('benefits').value;
    var grossPay =  parseInt(basicSalary) + parseInt(benefits)
    let payeeTax = document.getElementById('Payeoutput').value;
    let nhif = document.getElementById('NHIFoutput').value;
    let nssf = document.getElementById('NSSFoutput').value;

    var deductions = payeeTax + nhif + nssf
    var netPay = grossPay - deductions

    // Payee tax calculation
    

		if(grossPay >= 50000){
			payeeTax = (grossPay * 0.3);
		}else if(grossPay >= 40000){
			payeeTax = (grossPay * 0.25);
		}else if(grossPay >= 30000){
			payeeTax = (grossPay * 0.2);
		}else if(grossPay >= 20000){
			payeeTax = (grossPay * 0.15);
		}else if(grossPay>= 10000){
			payeeTax = (grossPay * 0.1);
		}else {
            payeeTax = 0
        }
        // NHIF calculation

        if(grossPay <= 5999){
			nhif = 150;
		}else if(grossPay >= 6000 && grossPay <= 7999){
			nhif = 300;
		}else if(grossPay>= 8000 && grossPay <= 11999){
			nhif = 400;
		}else if(grossPay >= 12000 && grossPay <= 14999){
			nhif = 500;
		}else if(grossPay >= 15000 && grossPay <= 19999){
			nhif = 600;
		}else if(grossPay >= 20000 && grossPay <= 24999){
			nhif = 750;
		}else if(grossPay >= 25000 && grossPay <= 29999){
			nhif = 850;
		}else if(grossPay >= 30000 && grossPay <= 34999){
			nhif = 900;
        }else if(grossPay >= 35000 && grossPay <= 39999){
            nhif = 950;
        } else if(grossPay >= 40000 && grossPay <= 44999){
            nhif = 1000;
        } else if(grossPay >= 45000 && grossPay <= 49999){
            nhif = 1100;
        } else if(grossPay >= 50000 && grossPay <= 59999){
            nhif = 1200;
        } else if(grossPay >= 60000 && grossPay <= 69999){
            nhif = 1300;
        } else if(grossPay >= 70000 && grossPay <= 79999){
            nhif = 1400;
        } else if(grossPay >= 80000 ){
            nhif = 1500;
        }

        if(grossPay <=20000){
            nssf = (grossPay * 0.05);
        }else if(grossPay >= 20001){
            nssf = (grossPay * 0.06)
        }

        

        document.getElementById('Netsalary').innerHTML = netPay;
        document.getElementById('NSSFoutput').innerHTML = nssf;
        document.getElementById('NHIFoutput').innerHTML = nhif;
        document.getElementById('Payeoutput').innerHTML = payeeTax;

        
        function netPay(){
            netPay = grossPay - (payeeTax + nhif + nssf)
            return netPay
        }
}