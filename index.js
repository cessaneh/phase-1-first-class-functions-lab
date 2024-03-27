// Code your solution in this file!
const drivers = ('Antonia','Nuru','Amari','Mo');

const returnFirstTwoDrivers =(drivers) => drivers.slice(0,2)

const returnLastTwoDrivers =(drivers) => drivers.slice(-2)

let selectingDrivers = [returnFirstTwoDrivers,returnLastTwoDrivers]

let createFareMultiplier = (multiplier) => {
    return function (fare) {
        return fare * multiplier
    }
}
const fareDoubler =(fare) => fare * 2

const fareTripler =(fare) => fare * 3

let selectDifferentDrivers = (drivers,returnFirstTwoDrivers) =>{
    return returnFirstTwoDrivers(drivers)
}

   
    

