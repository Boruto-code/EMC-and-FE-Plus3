ServerEvents.recipes(event => {
    event.custom({
        "type": "avaritia:extreme_shaped",
        "result": {
            "id": "draconicevolution:creative_capacitor"
        },
        "pattern": [
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
        "key": {
            "A": {
                "item": "kubejs:compressed_awakened_draconium_block"
            },
            "B": {
                "item": "draconicevolution:chaotic_crafting_injector"
            },
            "C": {
                "item": "draconicevolution:reactor_stabilizer"
            },
            "D": {
                "item": "draconicevolution:reactor_core"
            },
            "E": {
                "item": "draconicevolution:chaotic_core"
            },
            "F": {
                "item": "draconicevolution:chaotic_capacitor"
            }
        }
    })

    event.custom({
        "type": "avaritia:extreme_shaped",
        "result": {
            "id": "draconicevolution:creative_op_capacitor"
        },
        "pattern": [
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
        "key": {
            "A": {
                "item": "draconicevolution:awakened_draconium_block"
            },
            "B": {
                "item": "kubejs:compressed_awakened_draconium_block"
            },
            "C": {
                "item": "draconicevolution:reactor_stabilizer"
            },
            "D": {
                "item": "draconicevolution:reactor_core"
            },
            "E": {
                "item": "draconicevolution:creative_capacitor"
            }
        }
    })
})