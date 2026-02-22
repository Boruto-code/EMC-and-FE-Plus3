ServerEvents.recipes(event => {
    const draconic = event.recipes.draconicevolution

    draconic.fusion_crafting(
        "draconicevolution:wyvern_core",
        [
            "draconicevolution:draconium_ingot", "draconicevolution:wyvern_energy_core",
            "draconicevolution:draconium_ingot", "draconicevolution:wyvern_energy_core",
            "draconicevolution:wyvern_energy_core", "draconicevolution:draconium_ingot",
            "draconicevolution:wyvern_energy_core", "draconicevolution:draconium_ingot"
        ],
        "kubejs:wyvern_capacitor_core",
        "wyvern",
        8000000
    )

    draconic.fusion_crafting(
        "kubejs:wyvern_capacitor_core",
        [
            "draconicevolution:awakened_draconium_ingot", "draconicevolution:awakened_core",
            "draconicevolution:awakened_draconium_ingot", "draconicevolution:draconic_energy_core",
            "draconicevolution:draconic_energy_core", "draconicevolution:awakened_draconium_ingot",
            "draconicevolution:draconic_energy_core", "draconicevolution:awakened_draconium_ingot"
        ],
        "kubejs:draconic_capacitor_core",
        "draconic",
        32000000
    )

    draconic.fusion_crafting(
        "kubejs:draconic_capacitor_core",
        [
            "draconicevolution:awakened_draconium_ingot", "draconicevolution:chaotic_core",
            "draconicevolution:awakened_draconium_ingot", "draconicevolution:chaotic_energy_core",
            "draconicevolution:chaotic_energy_core", "draconicevolution:awakened_draconium_ingot",
            "draconicevolution:chaotic_energy_core", "draconicevolution:awakened_draconium_ingot"
        ],
        "kubejs:chaotic_capacitor_core",
        "chaotic",
        128000000
    )

    event.shapeless("draconicevolution:wyvern_capacitor", "kubejs:wyvern_capacitor_core")
    event.shapeless("draconicevolution:draconic_capacitor", "kubejs:draconic_capacitor_core")
    event.shapeless("draconicevolution:chaotic_capacitor", "kubejs:chaotic_capacitor_core")
    event.shapeless("draconicevolution:creative_capacitor", "kubejs:creative_capacitor_core")
    event.shapeless("kubejs:wyvern_capacitor_core", "draconicevolution:wyvern_capacitor")
    event.shapeless("kubejs:draconic_capacitor_core", "draconicevolution:draconic_capacitor")
    event.shapeless("kubejs:chaotic_capacitor_core", "draconicevolution:chaotic_capacitor")
    event.shapeless("kubejs:creative_capacitor_core", "draconicevolution:creative_capacitor")

    event.remove("draconicevolution:tools/wyvern_capacitor")
    event.remove("draconicevolution:tools/draconic_capacitor")
    event.remove("draconicevolution:tools/chaotic_capacitor")
})