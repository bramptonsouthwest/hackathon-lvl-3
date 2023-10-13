namespace SpriteKind {
    export const life = SpriteKind.create()
    export const exorcism = SpriteKind.create()
}
sprites.onCreated(SpriteKind.Enemy, function (sprite) {
    sprite.follow(player1, 30)
})
sprites.onCreated(SpriteKind.Food, function (sprite) {
    sprite.lifespan = 10000
})
function spawn_mobs () {
	
}
sprites.onCreated(SpriteKind.exorcism, function (sprite) {
    sprite.lifespan = 10000
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Enemy, function (sprite, otherSprite) {
    tiles.placeOnRandomTile(sprite, sprites.dungeon.floorDarkDiamond)
})
sprites.onOverlap(SpriteKind.Enemy, SpriteKind.Player, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.exorcism, SpriteKind.Enemy, function (sprite, otherSprite) {
	
})
sprites.onCreated(SpriteKind.life, function (sprite) {
    sprite.lifespan = 10000
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.exorcism, function (sprite, otherSprite) {
	
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.life, function (sprite, otherSprite) {
    sprites.destroy(otherSprite)
    info.changeLifeBy(1)
})
sprites.onOverlap(SpriteKind.Player, SpriteKind.Food, function (sprite, otherSprite) {
	
})
let player1: Sprite = null
game.splash("You've retrieved the artifact...")
game.splash("But can you survive?")
tiles.setCurrentTilemap(tilemap`level1`)
info.setScore(0)
info.setLife(5)
player1 = sprites.create(img`
    ........................
    .....ffff...............
    ...fff22fff.............
    ..fff2222fff............
    .fffeeeeeefff...........
    .ffe222222eef...........
    .fe2ffffff2ef...........
    .ffffeeeeffff...........
    ffefbf44fbfeff..........
    fee41fddf14eef..........
    .ffffdddddeef...........
    fddddf444eef............
    fbbbbf2222f4e...........
    fbbbbf2222fd4...........
    .fccf45544f44...........
    ..ffffffff..............
    ....ff..ff..............
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    ........................
    `, SpriteKind.Player)
tiles.placeOnTile(player1, tiles.getTileLocation(6, 10))
scene.cameraFollowSprite(player1)
controller.moveSprite(player1)
spawn_mobs()
forever(function () {
    music.play(music.createSong(hex`00a0000408020204001c00100500640000041e000004000000000000000000000000000a040004180020002400011e28002c00012230003400012534003800012a09010e02026400000403780000040a000301000000640001c80000040100000000640001640000040100000000fa0004af00000401c80000040a00019600000414000501006400140005010000002c0104dc00000401fa0000040a0001c8000004140005d0076400140005d0070000c800029001f40105c201f4010a0005900114001400039001000005c201f4010500058403050032000584030000fa00049001000005c201f4010500058403c80032000584030500640005840300009001049001000005c201f4010500058403c80064000584030500c8000584030000f40105ac0d000404a00f00000a0004ac0d2003010004a00f0000280004ac0d9001010004a00f0000280002d00700040408070f0064000408070000c80003c800c8000e7d00c80019000e64000f0032000e78000000fa00032c01c8000ee100c80019000ec8000f0032000edc000000fa0003f401c8000ea901c80019000e90010f0032000ea4010000fa0001c8000004014b000000c800012c01000401c8000000c8000190010004012c010000c80002c800000404c8000f0064000496000000c80002c2010004045e010f006400042c010000640002c409000404c4096400960004f6090000f40102b80b000404b80b64002c0104f40b0000f401022003000004200300040a000420030000ea01029001000004900100040a000490010000900102d007000410d0076400960010d0070000c800180000000100010b080009000109100011000106180019000104`), music.PlaybackMode.UntilDone)
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
forever(function () {
	
})
