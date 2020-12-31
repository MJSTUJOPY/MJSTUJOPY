basic.forever(function () {
    if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        CruiseE.motorRunComplex(CruiseE.MotorList.all, CruiseE.MotorDirection.forward, 100)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 0 && pins.digitalReadPin(DigitalPin.P14) == 1) {
        CruiseE.motorRun(-50, 50, 1)
    } else if (pins.digitalReadPin(DigitalPin.P13) == 1 && pins.digitalReadPin(DigitalPin.P14) == 0) {
        CruiseE.motorRun(50, -50, 1)
    }
})
