ServerEvents.recipes(event => {
    const create = event.recipes.create

    create.sequenced_assembly(
        "kubejs:strange_colored_ingot",
        "immersiveengineering:ingot_electrum",
        [
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projecte:red_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:orange_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:yellow_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:green_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:cyan_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:blue_matter"]
            ),
            create.deploying(
                "kubejs:incomplete_strange_colored_ingot", 
                ["kubejs:incomplete_strange_colored_ingot", "projectexpansion:purple_matter"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_strange_colored_ingot").loops(5).id("kubejs:strange_colored_ingot")

    create.sequenced_assembly(
        "immersiveengineering:rs_engineering",
        "minecraft:copper_ingot",
        [
            create.deploying(
                "kubejs:incomplete_redstone_engineering",
                ["kubejs:incomplete_redstone_engineering", "minecraft:redstone"]
            ),
            create.deploying(
                "kubejs:incomplete_redstone_engineering",
                ["kubejs:incomplete_redstone_engineering", "immersiveengineering:sheetmetal_iron"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_redstone_engineering").loops(4)

    create.sequenced_assembly(
        "immersiveengineering:light_engineering",
        "minecraft:copper_ingot",
        [
            create.deploying(
                "kubejs:incomplete_light_engineering",
                ["kubejs:incomplete_light_engineering", "immersiveengineering:component_iron"]
            ),
            create.deploying(
                "kubejs:incomplete_light_engineering",
                ["kubejs:incomplete_light_engineering", "immersiveengineering:sheetmetal_iron"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_light_engineering").loops(4)

    create.sequenced_assembly(
        "immersiveengineering:heavy_engineering",
        "immersiveengineering:ingot_electrum",
        [
            create.deploying(
                "kubejs:incomplete_heavy_engineering",
                ["kubejs:incomplete_heavy_engineering", "immersiveengineering:component_steel"]
            ),
            create.deploying(
                "kubejs:incomplete_heavy_engineering",
                ["kubejs:incomplete_heavy_engineering", "immersiveengineering:sheetmetal_steel"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_heavy_engineering").loops(4)

    create.sequenced_assembly(
        "create:refined_radiance_casing",
        "create:refined_radiance",
        [
            create.deploying(
                "kubejs:incomplete_refined_radiance_casing",
                ["kubejs:incomplete_refined_radiance_casing", "create:andesite_casing"]
            ),
            create.deploying(
                "kubejs:incomplete_refined_radiance_casing",
                ["kubejs:incomplete_refined_radiance_casing", "create:copper_casing"]
            ),
            create.deploying(
                "kubejs:incomplete_refined_radiance_casing",
                ["kubejs:incomplete_refined_radiance_casing", "create:brass_casing"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_refined_radiance_casing").loops(5)

    create.sequenced_assembly(
        "create:shadow_steel_casing",
        "create:shadow_steel",
        [
            create.deploying(
                "kubejs:incomplete_shadow_steel_casing",
                ["kubejs:incomplete_shadow_steel_casing", "create:andesite_casing"]
            ),
            create.deploying(
                "kubejs:incomplete_shadow_steel_casing",
                ["kubejs:incomplete_shadow_steel_casing", "create:copper_casing"]
            ),
            create.deploying(
                "kubejs:incomplete_shadow_steel_casing",
                ["kubejs:incomplete_shadow_steel_casing", "create:brass_casing"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_shadow_steel_casing").loops(5)

    create.sequenced_assembly(
        Item.of("draconicevolution:chaos_shard", 2),
        "draconicevolution:chaos_shard",
        [
            create.deploying(
                "kubejs:incomplete_chaos_shard",
                ["kubejs:incomplete_chaos_shard", "create:refined_radiance"]
            ),
            create.deploying(
                "kubejs:incomplete_chaos_shard",
                ["kubejs:incomplete_chaos_shard", "create:shadow_steel"]
            ),
            create.cutting(
                "kubejs:incomplete_chaos_shard", 
                "kubejs:incomplete_chaos_shard"
            ).processingTime(60)
        ]
    ).transitionalItem("kubejs:incomplete_chaos_shard").loops(1)

    create.sequenced_assembly(
        "create:creative_blaze_cake",
        "create:blaze_cake",
        [
            create.filling(
                "kubejs:incomplete_creative_blaze_cake",
                [Fluid.of("kubejs:antimatter"), "kubejs:incomplete_creative_blaze_cake"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_creative_blaze_cake").loops(5)

    create.sequenced_assembly(
        "kubejs:pink_slime",
        "minecraft:slime_ball",
        [
            create.filling(
                "kubejs:incomplete_pink_slime",
                [Fluid.of("mekanism:nutritional_paste"), "kubejs:incomplete_pink_slime"]
            )
        ]
    ).transitionalItem("kubejs:incomplete_pink_slime").loops(1145)

    create.mixing(
        "create:chromatic_compound", 
        [
            "avaritia:infinity_ingot", "mekanism:ingot_refined_obsidian",
            "mekanism:ingot_refined_glowstone", "kubejs:strange_colored_ingot"
        ]
    ).superheated()

    create.mixing(
        "kubejs:rainbow_compound", 
        [
            "kubejs:awakened_scrap", "kubejs:awakened_scrap", "kubejs:super_glass",
            "kubejs:obsidianite_ingot", "create:refined_radiance", "create:refined_radiance",
            "create:shadow_steel", "create:shadow_steel", "evolvedmekanism:alloy_exoversal"
        ]
    ).superheated()

    create.mixing(
        Fluid.of("kubejs:antimatter"), 
        ["mekanism:pellet_antimatter", "kubejs:pellet_spent_nuclear_waste"]
    ).superheated()

    create.compacting(
        "kubejs:obsidianite_ingot", 
        [
            "minecraft:netherite_ingot", "create:sturdy_sheet", "mekanism:ingot_refined_obsidian",
            "mekanism:alloy_atomic", Fluid.of("bigreactors:yellorium")
        ]
    )
})