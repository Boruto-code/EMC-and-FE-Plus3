Platform.mods.kubejs.name = "EMC & FE +++"

StartupEvents.registry("item", event => {
    event.create("kubejs:copper_coin")
    event.create("kubejs:iron_coin")
    event.create("kubejs:gold_coin")
    event.create("kubejs:diamond_coin")
    event.create("kubejs:netherite_coin")

    event.create("kubejs:pink_slime")
    event.create("kubejs:awakened_scrap")
    event.create("kubejs:rainbow_compound")
    event.create("kubejs:obsidianite_ingot")
    event.create("kubejs:strange_colored_ingot")
    event.create("kubejs:pellet_spent_nuclear_waste")

    event.create("kubejs:incomplete_pink_slime", "create:sequenced_assembly")
    event.create("kubejs:incomplete_chaos_shard", "create:sequenced_assembly")
    event.create("kubejs:incomplete_creative_blaze_cake", "create:sequenced_assembly")
    event.create("kubejs:incomplete_strange_colored_ingot", "create:sequenced_assembly")
})