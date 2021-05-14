controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    animation.runImageAnimation(
    linda,
    [],
    104,
    true
    )
})
function player2 (speed: number) {
    linda = sprites.create(, SpriteKind.Player)
    linda.setPosition(16, 88)
    controller.moveSprite(linda, speed, 0)
    scene.cameraFollowSprite(linda)
}
function realWalk (px: number, seconds: number) {
    speed = px / seconds
    player2(speed)
}
let speed = 0
let linda: Sprite = null
OptoWorld()
realWalk(512, 10)
