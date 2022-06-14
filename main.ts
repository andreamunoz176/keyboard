basic.forever(function () {
    if (tinkercademy.ADKeyboard(ADKeys.A, AnalogPin.P1)) {
        music.playTone(262, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.B, AnalogPin.P1)) {
        music.playTone(294, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.C, AnalogPin.P1)) {
        music.playTone(330, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.D, AnalogPin.P1)) {
        music.playTone(349, music.beat(BeatFraction.Whole))
    }
    if (tinkercademy.ADKeyboard(ADKeys.E, AnalogPin.P1)) {
        music.playTone(392, music.beat(BeatFraction.Whole))
    }
})
