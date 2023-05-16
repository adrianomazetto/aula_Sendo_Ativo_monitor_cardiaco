passos = 0

def on_forever():
    global passos
    if input.button_is_pressed(Button.A):
        for index in range(4):
            basic.show_icon(IconNames.HEART)
            basic.show_icon(IconNames.SMALL_HEART)
        basic.show_number(randint(80, 100))
    elif input.is_gesture(Gesture.SHAKE):
        passos += 1
        basic.show_number(passos)
basic.forever(on_forever)
