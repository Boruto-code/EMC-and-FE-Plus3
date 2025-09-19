ServerEvents.recipes(event => {
    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": "immersiveengineering:ingot_steel"
            }
        ],
        "energy": 64000,
        "input": {
            "tag": "c:glass_blocks"
        },
        "results": [
            {
                "item": "kubejs:super_glass",
                "count": 2
            }
        ],
        "time": 1200
    })

    event.custom({
        "type": "immersiveengineering:arc_furnace",
        "additives": [
            {
                "item": "draconicevolution:creative_op_capacitor"
            }
        ],
        "energy": 64000,
        "input": {
            "item": "kubejs:1x_compressed_energy_cell",
            "count": 64
        },
        "results": [
            {
                "item": "kubejs:2x_compressed_energy_cell",
            }
        ],
        "time": 1200
    })

    event.custom({
        "type": "immersiveengineering:mixer",
        "energy": 64000,
        "fluid": {
            "amount": 1000,
            "tag": "minecraft:lava"
        },
        "inputs": [
            {
                "tag": "c:ingots/steel"
            }
        ],
        "result": {
            "amount": 1000,
            "id": "kubejs:steel"
        }
    })

    event.custom({
        "type": "immersiveengineering:bottling_machine",
        "fluid": {
            "amount": 1000,
            "tag": "c:steel"
        },
        "input": {
            "item": "immersiveengineering:blastbrick"
        },
        "results": [
            {
                "id": "immersiveengineering:blastbrick_reinforced"
            }
        ]
    })
})