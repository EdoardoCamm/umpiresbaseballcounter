input.onButtonPressed(Button.A, function () {
    basic.showString("Ball")
    Balls += 1
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.AB, function () {
    basic.showString("Ball")
    Balls = 0
    basic.showNumber(Balls)
})
input.onButtonPressed(Button.B, function () {
    basic.showString("Strike")
    Strikes += 1
    basic.showNumber(Strikes)
})
input.onGesture(Gesture.Shake, function () {
    basic.showString("Strike")
    Strikes = 0
    basic.showNumber(Strikes)
})
let Strikes = 0
let Balls = 0
basic.showNumber(0)
