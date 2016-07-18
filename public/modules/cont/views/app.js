function validNumber(fieldinput){
var unicode=fieldinput.charCode? fieldinput.charCode : fieldinput.keyCode;
if ((unicode!=8) && (unicode!=46)) { //if the key isn't the backspace key (which we should allow)
if (unicode<48||unicode>57) //if not a number
return false; //disable key press
}
}

function fuelSavings()
{
// Reset error messages to blank
document.getElementById('infoMessage').innerHTML = '';
document.getElementById('gasPriceError').innerHTML = '';
document.getElementById('milesError').innerHTML = '';
document.getElementById('mpgCarAError').innerHTML = '';
document.getElementById('mpgCarBError').innerHTML = '';

// Form validation checking
if ((document.mpgfuelsavingscalc.gasPrice.value === null) || (document.mpgfuelsavingscalc.gasPrice.value.length === 0) || (isNaN(document.mpgfuelsavingscalc.gasPrice.value) === true))
{
document.getElementById('infoMessage').innerHTML = 'Please enter the missing information.';
document.getElementById('gasPriceError').innerHTML = '* Example: 3.50';
} else if ((document.mpgfuelsavingscalc.miles.value === null) || (document.mpgfuelsavingscalc.miles.value.length === 0) || (isNaN(document.mpgfuelsavingscalc.miles.value) === true))
{
document.getElementById('infoMessage').innerHTML = 'Please enter the missing information.';
document.getElementById('milesError').innerHTML = '* Example: 15000';
} else if ((document.mpgfuelsavingscalc.mpgCarA.value === null) || (document.mpgfuelsavingscalc.mpgCarA.value.length === 0) || (isNaN(document.mpgfuelsavingscalc.mpgCarA.value) === true))
{
document.getElementById('infoMessage').innerHTML = 'Please enter the missing information.';
document.getElementById('mpgCarAError').innerHTML = '* Example: 20';
} else if ((document.mpgfuelsavingscalc.mpgCarB.value === null) || (document.mpgfuelsavingscalc.mpgCarB.value.length === 0) || (isNaN(document.mpgfuelsavingscalc.mpgCarB.value) === true))
{
document.getElementById('infoMessage').innerHTML = 'Please enter the missing information.';
document.getElementById('mpgCarBError').innerHTML = '* Example: 30';
} else
{
// Set variables from form data
var costperGallon = document.mpgfuelsavingscalc.gasPrice.value;
var milesperyear = document.mpgfuelsavingscalc.miles.value;
var carA = document.mpgfuelsavingscalc.mpgCarA.value;
var carB = document.mpgfuelsavingscalc.mpgCarB.value;

// Perform calculations, set additional variables
var calcannualCostCarA = (costperGallon/carA)*milesperyear;
var calcannualCostCarB = (costperGallon/carB)*milesperyear;
var mile25CarA = (costperGallon/carA) * 25;
var mile25CarB = (costperGallon/carB) * 25;
if (calcannualCostCarA > calcannualCostCarB) {
var calcannualSavings = calcannualCostCarA - calcannualCostCarB;
} else
{ var calcannualSavings = calcannualCostCarB - calcannualCostCarA;
}

// display annual costs, monthly costs, annual savings, and monhtly savings
document.getElementById('mile25CostCarA').innerHTML = '$' + mile25CarA.toFixed(2);
document.getElementById('mile25CostCarB').innerHTML = '$' + mile25CarB.toFixed(2);
document.getElementById('monthlyCostCarA').innerHTML = '$' + (calcannualCostCarA / 12).toFixed(2);
document.getElementById('monthlyCostCarB').innerHTML = '$' + (calcannualCostCarB / 12).toFixed(2);
document.getElementById('annualCostCarA').innerHTML = '$' + calcannualCostCarA.toFixed(2);
document.getElementById('annualCostCarB').innerHTML = '$' + calcannualCostCarB.toFixed(2);
document.getElementById('monthlySavings').innerHTML = '$' + (calcannualSavings / 12).toFixed(2);
document.getElementById('annualSavings').innerHTML = '$' + calcannualSavings.toFixed(2);
document.getElementById('yeartwoSavings').innerHTML = 'Year 2 - $' + (calcannualSavings * 2).toFixed(2);
document.getElementById('yearthreeSavings').innerHTML = 'Year 3 - $' + (calcannualSavings * 3).toFixed(2);
document.getElementById('yearfourSavings').innerHTML = 'Year 4 - $' + (calcannualSavings * 4).toFixed(2);
document.getElementById('yearfiveSavings').innerHTML = 'Year 5 - $' + (calcannualSavings * 5).toFixed(2);
document.getElementById('yeartenSavings').innerHTML = 'Year 10 - $' + (calcannualSavings * 10).toFixed(2);
document.getElementById("pepTalk").style.display = "block";
}

}

function fuelSavingsReset()
{
// Reset everything to default/null/blank
document.getElementById('infoMessage').innerHTML = 'Values reset';
document.getElementById("pepTalk").style.display = "none";
document.getElementById('gasPriceError').innerHTML = '';
document.getElementById('milesError').innerHTML = '';
document.getElementById('mpgCarAError').innerHTML = '';
document.getElementById('mpgCarBError').innerHTML = '';
document.getElementById('mile25CostCarA').innerHTML = '';
document.getElementById('mile25CostCarB').innerHTML = '';
document.getElementById('monthlyCostCarA').innerHTML = '';
document.getElementById('monthlyCostCarB').innerHTML = '';
document.getElementById('annualCostCarA').innerHTML = '';
document.getElementById('annualCostCarB').innerHTML = '';
document.getElementById('monthlySavings').innerHTML = '';
document.getElementById('annualSavings').innerHTML = '';
document.getElementById('yeartwoSavings').innerHTML = '';
document.getElementById('yearthreeSavings').innerHTML = '';
document.getElementById('yearfourSavings').innerHTML = '';
document.getElementById('yearfiveSavings').innerHTML = '';
document.getElementById('yeartenSavings').innerHTML = '';
document.mpgfuelsavingscalc.gasPrice.value = null;
document.mpgfuelsavingscalc.miles.value = null;
document.mpgfuelsavingscalc.mpgCarA.value = null;
document.mpgfuelsavingscalc.mpgCarB.value = null;
}
