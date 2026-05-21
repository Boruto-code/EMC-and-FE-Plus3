ServerEvents.recipes(event => {
    const mekanism = event.recipes.mekanism
    const evolvedmekanism = event.recipes.evolvedmekanism

    mekanism.crushing(
        "draconicevolution:draconium_dust",
        "draconicevolution:draconium_ingot"
    )

    mekanism.metallurgic_infusing(
        "evolvedmekanism:alloy_hypercharged",
        "mekanism:alloy_atomic",
        "20x kubejs:insanite"
    )

    event.custom({
        "type": "mekanism:reaction",
        "chemical_input": {
            "amount": 1000,
            "chemical": "mekanism:spent_nuclear_waste"
        },
        "chemical_output": {
            "amount": 1000,
            "id": "mekanism:steam"
        },
        "duration": 100,
        "fluid_input": {
            "amount": 1000,
            "fluid": "mekanism:steam"
        },
        "item_input": {
            "count": 1,
            "tag": "c:dusts/fluorite"
        },
        "item_output": {
            "count": 1,
            "id": "kubejs:pellet_spent_nuclear_waste"
        }
    })

    mekanism.oxidizing(
        "1000x mekanism:spent_nuclear_waste",
        "kubejs:pellet_spent_nuclear_waste"
    )

    mekanism.oxidizing(
        "1000x kubejs:refined_redstone",
        "evolvedmekanism:ingot_refined_redstone"
    )

    mekanism.chemical_conversion(
        "10x kubejs:insanite",
        "bigreactors:insanite_ingot"
    )

    evolvedmekanism.chemixing(
        "evolvedmekanism:alloy_creative",
        "evolvedmekanism:alloy_exoversal",
        "kubejs:rainbow_compound",
        "1000x mekanism:antimatter"
    )

    evolvedmekanism.chemixing(
        "bigreactors:insanite_ingot",
        Item.of("bigreactors:benitoite_crystal", 16),
        "evolvedmekanism:ingot_refined_redstone",
        "1000x kubejs:refined_redstone"
    )

    evolvedmekanism.apt(
        Item.of("mekanism:pellet_antimatter", 2),
        "projectexpansion:final_star",
        "1000x mekanism:antimatter"
    )

    event.remove("evolvedmekanism:metallurgic_infusing/alloy/hypercharged")
    event.remove("evolvedmekanism:energy_cube/creative")
    event.remove("evolvedmekanism:fluid_tank/creative")
    event.remove("evolvedmekanism:chemical_tank/creative")
    event.remove("evolvedmekanism:bin/creative")
})