ServerEvents.recipes(event => {
    event.shapeless(
        Item.of("kubejs:awakened_scrap", 16),
        "draconicevolution:awakened_draconium_ingot"
    )

    event.shapeless(
        "kubejs:iron_coin",
        [
            "kubejs:copper_coin", "kubejs:copper_coin", "kubejs:copper_coin",
            "kubejs:copper_coin", "kubejs:copper_coin", "kubejs:copper_coin",
            "kubejs:copper_coin", "kubejs:copper_coin",  "kubejs:copper_coin"]
    )

    event.shapeless(
        "kubejs:gold_coin",
        [
            "kubejs:iron_coin", "kubejs:iron_coin", "kubejs:iron_coin",
            "kubejs:iron_coin", "kubejs:iron_coin", "kubejs:iron_coin",
            "kubejs:iron_coin", "kubejs:iron_coin", "kubejs:iron_coin"
        ]
    )

    event.shapeless(
        "kubejs:diamond_coin",
        [
            "kubejs:gold_coin", "kubejs:gold_coin", "kubejs:gold_coin",
            "kubejs:gold_coin", "kubejs:gold_coin", "kubejs:gold_coin",
            "kubejs:gold_coin", "kubejs:gold_coin", "kubejs:gold_coin"
        ]
    )

    event.shapeless(
        "kubejs:netherite_coin",
        [
            "kubejs:diamond_coin", "kubejs:diamond_coin", "kubejs:diamond_coin",
            "kubejs:diamond_coin", "kubejs:diamond_coin", "kubejs:diamond_coin",
            "kubejs:diamond_coin", "kubejs:diamond_coin", "kubejs:diamond_coin"
        ]
    )
})