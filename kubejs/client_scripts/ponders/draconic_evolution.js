Ponder.registry((event) => {
    event.create("draconicevolution:crafting_core")
        .scene("kubejs:crafting_core_scene",
            "聚合装置的搭建",
            (scene, util) => {
            scene.showStructure()
            scene.idle(20)

            scene.text(40, "聚合装置是DE中一个重要的多方块结构")
            scene.idle(60)
            scene.text(30, "它用于DE中一些物品的合成")
            scene.idle(30)

            scene.world.setBlock([2, 1, 2], "minecraft:smooth_stone", false)
            scene.world.showSection([2, 1, 2], Direction.DOWN)
            scene.idle(20)

            scene.addKeyframe()
            scene.world.setBlock([2, 2, 2], "draconicevolution:crafting_core", false)
            scene.world.showSection([2, 2, 2], Direction.DOWN)
            scene.text(40, "它的核心是聚合核心，通常要垫高1格", [2.5, 2.5, 2])
            scene.idle(40)

            scene.addKeyframe()
            scene.world.setBlocks([3, 1, 4, 1, 3, 4],
                Block.id("draconicevolution:basic_crafting_injector")
                    .with("facing", "north"), false)
            scene.world.showSection([3, 1, 4, 1, 3, 4], Direction.WEST)
            scene.idle(20)

            scene.world.setBlocks([3, 1, 0, 1, 3, 0],
                Block.id("draconicevolution:basic_crafting_injector")
                    .with("facing", "south"), false)
            scene.world.showSection([3, 1, 4, 1, 3, 4], Direction.WEST)
            scene.idle(20)

            scene.text(40, "聚合核心的每个方向都可以放置聚合注入器，范围最多 3x3")
            scene.idle(60)
            scene.text(40, "聚合注入器需要面朝聚合核心，且相隔1格")
            scene.idle(60)

            scene.text(20, "聚合注入器需要供电")
            scene.idle(20)
            })
})