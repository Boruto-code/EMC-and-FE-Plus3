StartupEvents.registry("block", event => {
    event.create("kubejs:super_glass").defaultTranslucent()

    event.create("kubejs:incomplete_redstone_engineering")
    event.create("kubejs:incomplete_light_engineering")
    event.create("kubejs:incomplete_heavy_engineering")

    event.create("kubejs:compressed_awakened_draconium_block")
    event.create("kubejs:1x_compressed_energy_cell")
    event.create("kubejs:2x_compressed_energy_cell")
})