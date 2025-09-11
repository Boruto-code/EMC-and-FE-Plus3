ServerEvents.recipes(event => {
    event.custom({
        "type": "advanced_ae:reaction",
        "input_energy": 640000,
        "input_fluid": {
            "amount": 1000,
            "ingredient": {
                "fluid": "advanced_ae:quantum_infusion_source"
            }
        },
        "input_items": [
            {
                "amount": 4,
                "ingredient": {
                    "item": "immersiveengineering:sheetmetal_iron"
                }
            },
            {
                "amount": 4,
                "ingredient": {
                    "item": "minecraft:redstone"
                }
            },
            {
                "amount": 1,
                "ingredient": {
                    "item": "minecraft:copper_ingot"
                }
            }
        ],
        "output": {
            "#": 1,
            "id": "immersiveengineering:rs_engineering"
        }
    })
})