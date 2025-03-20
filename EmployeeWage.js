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


// UC6 - Store Daily Wage Along with Total Wage Using Array

let dailyWagesArray = [];

function storeDailyWage(empHours) {
    let empWage = calculateDailyWage(empHours);
    dailyWagesArray.push(empWage);
    return empWage;
}

totalEmpHours = 0;
totalWorkingDays = 0;
totalEmpWage = 0;
dailyWagesArray = [];

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    totalEmpWage += storeDailyWage(empHours);
    console.log(`Day ${totalWorkingDays}, Hours: ${empHours}, Daily Wage: Rs${dailyWagesArray[totalWorkingDays - 1]}`);
}

console.log("Daily Wages: ", dailyWagesArray);
console.log(`Total Working Days: ${totalWorkingDays}, Total Hours: ${totalEmpHours}, Total Wage: Rs${totalEmpWage}`);


// UC7 - Perform Array Operations Using Array Helper Functions

// a. Calculate Total Wage using Reduce
let totalWageUsingReduce = dailyWagesArray.reduce((total, wage) => total + wage, 0);
console.log(`Total Wage using Reduce: Rs${totalWageUsingReduce}`);

// b. Show the Day along with Daily Wage using Map
let dailyWageWithDayArray = dailyWagesArray.map((wage, index) => `Day ${index + 1} - Rs${wage}`);
console.log("Daily Wage with Day: ", dailyWageWithDayArray);

// c. Show Days when Full Time Wage of Rs160 was Earned using Filter
let fullTimeWageDays = dailyWagesArray
    .map((wage, index) => ({ day: index + 1, wage }))
    .filter(dayObj => dayObj.wage === FULL_TIME_HOURS * WAGE_PER_HOUR)
    .map(dayObj => `Day ${dayObj.day}`);
console.log("Full Time Wage Days: ", fullTimeWageDays);

// d. Find the First Occurrence when Full Time Wage was Earned using Find
let firstFullTimeDay = dailyWagesArray.find(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`First Full Time Wage Earned: Rs${firstFullTimeDay}`);

// e. Check if Every Element of Full Time Wage is Truly Holding Full Time Wage using Every
let isAllFullTime = dailyWagesArray.every(wage => wage === FULL_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Is Every Wage a Full Time Wage? ${isAllFullTime}`);

// f. Check if there is Any Part Time Wage using Some
let hasPartTimeWage = dailyWagesArray.some(wage => wage === PART_TIME_HOURS * WAGE_PER_HOUR);
console.log(`Is there Any Part Time Wage? ${hasPartTimeWage}`);

// g. Find the Number of Days the Employee Worked
let workingDaysCount = dailyWagesArray.reduce((count, wage) => (wage > 0 ? count + 1 : count), 0);
console.log(`Total Number of Working Days: ${workingDaysCount}`);

// UC8 - Store Day and Daily Wage Along with Total Wage Using Map

let dayWiseWageMap = new Map();

// Function to Calculate and Store Day Wise Wage
function storeDayWiseWage(day, empHours) {
    let empWage = calculateDailyWage(empHours);
    dayWiseWageMap.set(day, empWage);
}

// Variables Initialize Karna
totalEmpHours = 0;
totalWorkingDays = 0;

while (totalEmpHours < MAX_WORKING_HOURS && totalWorkingDays < MAX_WORKING_DAYS) {
    totalWorkingDays++;
    let empCheck = Math.floor(Math.random() * 3);
    let empHours = getWorkingHours(empCheck);
    totalEmpHours += empHours;
    storeDayWiseWage(totalWorkingDays, empHours);
}

// a. Display Day Wise Wage
console.log("Day Wise Wage:");
dayWiseWageMap.forEach((wage, day) => {
    console.log(`Day ${day}: Wage = Rs${wage}`);
});

// b. Compute Total Wage Using Map
let totalWageUsingMap = Array.from(dayWiseWageMap.values()).reduce((total, wage) => total + wage, 0);
console.log(`Total Wage Computed Using Map: Rs${totalWageUsingMap}`);

