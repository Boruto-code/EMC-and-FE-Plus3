ServerEvents.recipes(event => {
    const enderio = event.recipes.enderio

    enderio.alloy_smelting(
        "create_enchantment_industry:super_experience_nugget",
        Item.of("create:experience_block", 16),
        64000,
        3
    )
})