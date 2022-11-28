const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
})

const prompt = require('prompt-sync')();


// function to calculate tax rate based on gross salary
function taxRate(gross){
    if (gross <= 24000) {
        return 10/100
    }
    else if (gross > 24000 && gross <= 32333) {
        return 25/100
    }
    else {
        return 30/100
    }
}

// function to calculate NHIF deduction
function nhifDeduction(gross){
    if (gross <= 5999) {
        return 150
    }
    else if (gross <= 7999) {
        return 300
    }
    else if (gross <= 11999) {
        return 400
    }
    else if (gross <= 14999) {
        return 500
    }
    else if (gross <= 19999) {
        return 600
    }
    else if (gross <= 24999) {
        return 750
    }
    else if (gross <= 29999) {
        return 850
    }
    else if (gross <= 34999) {
        return 900
    }
    else if (gross <= 39999) {
        return 950
    }
    else if (gross <= 44999) {
        return 1000
    }
    else if (gross <= 49999) {
        return 1100
    }
    else if (gross <= 59999) {
        return 1200
    }
    else if (gross <= 69999) {
        return 1300
    }
    else if (gross <= 79999) {
        return 1400
    }
    else if (gross <= 89999) {
        return 1500
    }
    else if (gross <= 99999) {
        return 1600
    }
    else {
        return 1700
    }
}

// function to calculate NSSF deduction ( we will use the old rates)
const nssfDeduction = 400

// function to calculate net salary
function salary (gross){
    console.log(gross - (gross*taxRate(gross)) - nssfDeduction - nhifDeduction(gross))
}

// get user input
    readline.question('Please enter your gross salary: ', gross => {
    salary(gross)
    readline.close()
})