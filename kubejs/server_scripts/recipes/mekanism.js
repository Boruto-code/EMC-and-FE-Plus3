ServerEvents.recipes(event => {
    const mekanism = event.recipes.mekanism

    mekanism.metallurgic_infusing(
        "evolvedmekanism:alloy_hypercharged",
        "mekanism:alloy_atomic",
        "20x kubejs:insanite"
    )

    mekanism.compressing(
        "kubejs:1x_compressed_refined_obsidian_ingot",
        "mekanism:ingot_refined_obsidian",
        "200x mekanism:osmium"
    )

    mekanism.compressing(
        "kubejs:2x_compressed_refined_obsidian_ingot",
        "kubejs:1x_compressed_refined_obsidian_ingot",
        "200x mekanism:osmium"
    )

    mekanism.compressing(
        "kubejs:3x_compressed_refined_obsidian_ingot",
        "kubejs:2x_compressed_refined_obsidian_ingot",
        "200x mekanism:osmium"
    )

    mekanism.compressing(
        "kubejs:4x_compressed_refined_obsidian_ingot",
        "kubejs:3x_compressed_refined_obsidian_ingot",
        "200x mekanism:osmium"
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

    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "count": 1,
            "item": "kubejs:pellet_spent_nuclear_waste"
        },
        "output": {
            "amount": 1000,
            "id": "mekanism:spent_nuclear_waste"
        }
    })

    event.custom({
        "type": "mekanism:chemical_conversion",
        "input": {
            "count": 1,
            "item": "bigreactors:insanite_ingot"
        },
        "output": {
            "amount": 10,
            "id": "kubejs:insanite"
        }
    })

    event.custom({
        "type": "evolvedmekanism:chemixing",
        "extra_input": {
            "amount": 3,
            "item": "kubejs:rainbow_compound"
        },
        "chemical_input": {
            "amount": 1000,
            "chemical": "mekanism:antimatter"
        },
        "main_input": {
            "item": "evolvedmekanism:alloy_exoversal"
        },
        "output": {
            "id": "evolvedmekanism:alloy_creative"
        }
    })

    event.custom({
        "type": "evolvedmekanism:chemixing",
        "extra_input": {
            "amount": 3,
            "item": "kubejs:pellet_spent_nuclear_waste"
        },
        "chemical_input": {
            "amount": 1,
            "chemical": "mekanism:antimatter"
        },
        "main_input": {
            "item": "kubejs:4x_compressed_refined_obsidian_ingot"
        },
        "output": {
            "id": "mekanism:pellet_antimatter"
        }
    })

    event.custom({
        "type": "evolvedmekanism:solidifying",
        "duration": 60,
        "item_input": {
            "item": "evolvedmekanism:mold_ingot"
        },
        "fluid_input": {
            "fluid": "bigreactors:magentite",
            "amount": 90
        },
        "extra_input": {
            "fluid": "mekanism:oxygen",
            "amount": 90
        },
        "output": {
            "item": "bigreactors:magentite_ingot"
        }
    })

    event.custom({
        "type": "evolvedmekanism:solidifying",
        "duration": 540,
        "item_input": {
            "item": "evolvedmekanism:mold_storage_block"
        },
        "fluid_input": {
            "fluid": "bigreactors:magentite",
            "amount": 810
        },
        "extra_input": {
            "fluid": "mekanism:oxygen",
            "amount": 810
        },
        "output": {
            "item": "bigreactors:magentite_block"
        }
    })

    event.remove("evolvedmekanism:metallurgic_infusing/alloy/hypercharged")
    event.remove("evolvedmekanism:energy_cube/creative")
    event.remove("evolvedmekanism:fluid_tank/creative")
    event.remove("evolvedmekanism:chemical_tank/creative")
})