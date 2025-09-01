Platform.mods.kubejs.name = "EMC & FE +++"

StartupEvents.registry("item", event => {
    event.create("kubejs:copper_coin")
    event.create("kubejs:iron_coin")
    event.create("kubejs:gold_coin")
    event.create("kubejs:diamond_coin")
    event.create("kubejs:netherite_coin")

    event.create("kubejs:awakened_scrap")
    event.create("kubejs:rainbow_compound")
    event.create("kubejs:obsidianite_ingot")
    event.create("kubejs:strange_colored_ingot")

    event.create("kubejs:incomplete_chaos_shard")
    event.create("kubejs:incomplete_creative_blaze_cake")
    event.create("kubejs:incomplete_strange_colored_ingot")
})