ServerEvents.recipes(event => {
    const avaritia = event.recipes.avaritia

    avaritia.extreme_shaped(
        [
            "AAAACAAAA",
            "AEEBCBEEA",
            "AEBFCFBEA",
            "ABFFCFFBA",
            "CCCCDCCCC",
            "ABFFCFFBA",
            "AEBFCFBEA",
            "AEEBCBEEA",
            "AAAACAAAA"
        ],
        {
            A: "kubejs:compressed_awakened_draconium_block",
            B: "draconicevolution:chaotic_crafting_injector",
            C: "draconicevolution:reactor_stabilizer",
            D: "draconicevolution:reactor_core",
            E: "draconicevolution:chaotic_core",
            F: "draconicevolution:chaotic_capacitor"
        },
        "draconicevolution:creative_capacitor"
    )

    avaritia.extreme_shaped(
        [
            "BBCCCCCBB",
            "BBBBBBBBB",
            "CBAAAAABC",
            "CBACECABC",
            "CBAEDEABC",
            "CBACECABC",
            "CBAAAAABC",
            "BBBBBBBBB",
            "BBCCCCCBB"
        ],
        {
            A: "draconicevolution:awakened_draconium_block",
            B: "kubejs:compressed_awakened_draconium_block",
            C: "draconicevolution:reactor_stabilizer",
            D: "draconicevolution:reactor_core",
            E: "draconicevolution:creative_capacitor"
        },
        "draconicevolution:creative_op_capacitor"
    )

    avaritia.compressor(
        ["projecte:watch_of_flowing_time"], 
        "tiab:time_in_a_bottle[tiab:stored_time={total: 360000000,stored: 360000000}]",
        128
    )

    avaritia.compressor(["kubejs:2x_compressed_energy_cell"], "ae2:creative_energy_cell", 128)
})