/* Copyright (c) 2020 MTHS All rights reserved
 *
 * Created by: Francisco Rocco Allegri
 * Created on: Oct 2024
 * This program senses sonar in centimeters
*/

let distanceToObject: number = 0

basic.showIcon(IconNames.Happy)

input.onButtonPressed(Button.A, function() {
    basic.clearScreen()
    distanceToObject = sonar.ping(
        DigitalPin.P1,
        DigitalPin.P2,
        PingUnit.Centimeters
    )
    
    basic.showNumber(distanceToObject)
    basic.showIcon(IconNames.Happy)
})
