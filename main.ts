input.onButtonPressed(Button.A, function () {
    pausa = 1000
})
input.onButtonPressed(Button.B, function () {
    pausa = 50
})
let pausa = 0
DFRobotMaqueenPlus.I2CInit()
basic.forever(function () {
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.BLUE)
    pausa = pausa
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBL, Color.OFF)
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.PINK)
    pausa = pausa
    DFRobotMaqueenPlus.setRGBLight(RGBLight.RGBR, Color.OFF)
})
