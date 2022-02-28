const drivers = ['Antonia', 'Nuru', 'Amari', 'Mo'];
const returnFirstTwoDrivers = function (drivers) {
    return drivers.slice(0, 2);
}
const returnLastTwoDrivers = function (drivers) {
    return drivers.slice(2);
}
const selectingDrivers = [returnFirstTwoDrivers, returnLastTwoDrivers];
selectingDrivers;
function createFareMultiplier(distance) {
    return function (fare) { return distance * fare };
};
const fareDoubler = createFareMultiplier(2);
const fareTripler = createFareMultiplier(3);

const selectDifferentDrivers = function (drivers, x) {
    if (x === returnFirstTwoDrivers) {
        return returnFirstTwoDrivers(drivers);
    }
    else if (x === returnLastTwoDrivers) {
        return returnLastTwoDrivers(drivers);
    }
};
selectDifferentDrivers();

