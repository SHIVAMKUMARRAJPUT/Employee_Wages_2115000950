// UC1 - Check Employee Presence

const IS_PRESENT = 1;
let empCheck = Math.floor(Math.random() * 2);

if (empCheck === IS_PRESENT) {
    console.log("Employee is Present");
} else {
    console.log("Employee is Absent");
}

// UC2 - Calculate Daily Employee Wage using Switch Case

const PART_TIME_HOURS = 4;
const FULL_TIME_HOURS = 8;
const WAGE_PER_HOUR = 20;

function getWorkingHours(empCheck) {
    switch (empCheck) {
        case 1:
            return PART_TIME_HOURS;
        case 2:
            return FULL_TIME_HOURS;
        default:
            return 0;
    }
}
let empHours = getWorkingHours(empCheck);
let empWage = empHours * WAGE_PER_HOUR;
console.log(`Employee Hours: ${empHours} | Employee Wage: Rs. ${empWage}`);

// UC3 - Refactor to Use Function for Daily Wage Calculation

function calculateDailyWage(empHours) {
    return empHours * WAGE_PER_HOUR;
}

empCheck = Math.floor(Math.random() * 3);
empHours = getWorkingHours(empCheck);
empWage = calculateDailyWage(empHours);
console.log(`Employee Hours: ${empHours} | Employee Wage: Rs${empWage}`);

// UC4 - Calculate Wages for a Month Using While Loop

const MAX_WORKING_DAYS = 20;
const MAX_WORKING_HOURS = 160;
let totalEmpHours = 0;
let totalWorkingDays = 0;
let totalEmpWage = 0;

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    let empWage = calculateDailyWage(empHours);
    totalEmpWage += empWage;
    console.log(`Day ${totalWorkingDays}, Hours: ${empHours}, Daily Wage: Rs${empWage}`);
}

console.log(`Total Working Days: ${totalWorkingDays}, Total Hours: ${totalEmpHours}, Total Wage: Rs${totalEmpWage}`);

// UC5 - Calculate Wages Till a Condition of Total Working Hours of 160 or Max Days of 20 is Reached


totalEmpHours = 0;
totalWorkingDays = 0;
totalEmpWage = 0;

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    let empWage = calculateDailyWage(empHours);
    totalEmpWage += empWage;
    console.log(`Day ${totalWorkingDays}, Hours: ${empHours}, Daily Wage: Rs${empWage}`);
}

console.log(`Total Working Days: ${totalWorkingDays}, Total Hours: ${totalEmpHours}, Total Wage: Rs${totalEmpWage}`);
