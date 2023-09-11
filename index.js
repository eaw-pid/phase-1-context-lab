/* Your Code Here */
function createEmployeeRecord(array) {
    return {
        firstName: array[0],
        familyName: array[1],
        title: array[2],
        payPerHour: array[3],
        timeInEvents: [],
        timeOutEvents: []
    }
}

function createEmployeeRecords(arrays) {
    //use .map()
    return arrays.map(array => createEmployeeRecord(array))

}

function createTimeInEvent(date) {
    
    let newTimeInEvent = {
        type: "TimeIn",
        hour:  parseInt(date.slice(-4)),
        date: date.slice(0,10)
    }

    this.timeInEvents.push(newTimeInEvent)
    return this
}

function createTimeOutEvent(date) {
    let newTimeOutEvent = {
        type: "TimeOut",
        hour:  parseInt(date.slice(-4)),
        date: date.slice(0,10)
    }

    this.timeOutEvents.push(newTimeOutEvent)
    return this
}

function hoursWorkedOnDate(date) {
  
    const timeIn = this.timeInEvents.find(event => event.date === date);
    const timeOut = this.timeOutEvents.find(event => event.date === date);

  
    return (timeOut.hour - timeIn.hour)/100 //divide by 100 beause the return is in 0800 time to remove the minutes
  }


  function wagesEarnedOnDate(date) { 

    return (hoursWorkedOnDate.call(this, date) * this.payPerHour)
}

function findEmployeeByFirstName(array, firstName) {
    return array.find(element => firstName === element.firstName)

}

function calculatePayroll(array) {
    let totalWages = array.map(item => allWagesFor.call(item))
    return totalWages.reduce((a, b) => a + b)
}



/*
 We're giving you this function. Take a look at it, you might see some usage
 that's new and different. That's because we're avoiding a well-known, but
 sneaky bug that we'll cover in the next few lessons!

 As a result, the lessons for this function will pass *and* it will be available
 for you to use if you need it!
 */

const allWagesFor = function () {
    const eligibleDates = this.timeInEvents.map(function (e) {
        return e.date
    })

    const payable = eligibleDates.reduce(function (memo, d) {
        return memo + wagesEarnedOnDate.call(this, d)
    }.bind(this), 0) // <== Hm, why did we need to add bind() there? We'll discuss soon!

    return payable
}

