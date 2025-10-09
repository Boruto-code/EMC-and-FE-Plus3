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
})