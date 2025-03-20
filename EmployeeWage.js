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


