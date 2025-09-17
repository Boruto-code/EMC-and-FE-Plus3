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
})