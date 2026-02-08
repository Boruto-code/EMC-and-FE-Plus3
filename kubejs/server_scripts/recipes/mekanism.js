ServerEvents.recipes(event => {
    const mekanism = event.recipes.mekanism

    mekanism.combining(
        "mekanism:creative_chemical_tank",
        "mekanism:ultimate_chemical_tank",
        "functionalstorage:creative_vending_upgrade"
    )

    mekanism.combining(
        "mekanism:creative_fluid_tank",
        "mekanism:ultimate_fluid_tank",
        "functionalstorage:creative_vending_upgrade"
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
            "amount": 100,
            "chemical": "mekanism:antimatter"
        },
        "main_input": {
            "item": "evolvedmekanism:alloy_exoversal"
        },
        "output": {
            "id": "evolvedmekanism:alloy_creative"
        }
    })

    event.remove("evolvedmekanism:metallurgic_infusing/alloy/hypercharged")
})