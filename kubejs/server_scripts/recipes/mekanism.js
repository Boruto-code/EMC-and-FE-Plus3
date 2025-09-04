ServerEvents.recipes(event => {
    const mekanism = event.recipes.mekanism

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "chemical_input": {
            "amount": 2,
            "chemical": "mekanism:antimatter"
        },
        "duration": 600,
        "item_input": {
            "count": 5,
            "item": "draconicevolution:draconium_ingot"
        },
        "output": {
            "count": 1,
            "id": "draconicevolution:awakened_draconium_ingot"
        },
        "per_tick_usage": false
    })

    mekanism.enriching(
        "create_enchantment_industry:super_experience_nugget",
        Item.of("create:experience_block", 16)
    )
})