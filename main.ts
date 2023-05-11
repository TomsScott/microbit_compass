input.calibrateCompass()
basic.forever(function () {
    if (input.compassHeading() > 235 && input.compassHeading() < 315) {
        basic.showLeds(`
            . . # . .
            . # . . .
            # . # # #
            . # . . .
            . . # . .
            `)
        basic.pause(100)
        basic.clearScreen()
    } else {
        if (input.compassHeading() > 45 && input.compassHeading() < 135) {
            basic.showLeds(`
                . . # . .
                . . . # .
                # # # . #
                . . . # .
                . . # . .
                `)
            basic.pause(100)
            basic.clearScreen()
        } else {
            basic.clearScreen()
        }
    }
})
