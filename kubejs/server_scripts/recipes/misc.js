ServerEvents.recipes(event => {
    event.shapeless(
        Item.of("kubejs:awakened_scrap", 16),
        "draconicevolution:awakened_draconium_ingot"
    )

    event.shapeless(
        "kubejs:compressed_awakened_draconium_block",
        [
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block", 
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block", 
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block", 
            "draconicevolution:awakened_draconium_block",
            "draconicevolution:awakened_draconium_block"
        ]
    )

    event.shapeless(
        "kubejs:iron_coin",
        [
            "kubejs:copper_coin", "kubejs:copper_coin", "kubejs:copper_coin",
            "kubejs:copper_coin", "kubejs:copper_coin", "kubejs:copper_coin",
            "kubejs:copper_coin", "kubejs:copper_coin",  "kubejs:copper_coin"
        ]
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

    event.shapeless(
        Item.of("kubejs:copper_coin", 9),
        "kubejs:iron_coin"
    )

    event.shapeless(
        Item.of("kubejs:iron_coin", 9),
        "kubejs:gold_coin"
    )

    event.shapeless(
        Item.of("kubejs:gold_coin", 9),
        "kubejs:diamond_coin"
    )

    event.shapeless(
        Item.of("kubejs:diamond_coin", 9),
        "kubejs:netherite_coin"
    )

    event.shaped(
        "integrateddynamics:energy_battery_creative",
        [
            "AAA",
            "ABA",
            "AAA"
        ],
        {
            "A": "integrateddynamics:energy_battery",
            "B": "draconicevolution:creative_op_capacitor"
        }
    )

    event.remove("immersiveengineering:crafting/rs_engineering")
    event.remove("immersiveengineering:crafting/light_engineering")
    event.remove("immersiveengineering:crafting/heavy_engineering")
})