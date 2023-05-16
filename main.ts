let passos = 0
basic.forever(function () {
    if (input.buttonIsPressed(Button.A)) {
        for (let index = 0; index < 4; index++) {
            basic.showIcon(IconNames.Heart)
            basic.showIcon(IconNames.SmallHeart)
        }
        basic.showNumber(randint(80, 100))
    } else if (input.isGesture(Gesture.Shake)) {
        passos += 1
        basic.showNumber(passos)
    }
})
