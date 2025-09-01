ServerEvents.recipes(event => {
    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "count": 1,
            "item": "draconicevolution:draconium_ingot"
        },
        "output": {
            "amount": 100,
            "id": "kubejs:draconium"
        }
    })

    event.custom({
        "type": "mekanism:oxidizing",
        "input": {
            "count": 1,
            "item": "draconicevolution:awakened_draconium_ingot"
        },
        "output": {
            "amount": 100,
            "id": "kubejs:awakened_draconium"
        }
    })

    event.custom({
        "type": "mekanism:nucleosynthesizing",
        "chemical_input": {
            "amount": 2,
            "chemical": "mekanism:antimatter"
        },
        "duration": 600,
        "item_input": {
            "count": 5,
            "item": "draconicevolution:draconium_ingot"
        },
        "output": {
            "count": 1,
            "id": "draconicevolution:awakened_draconium_ingot"
        },
        "per_tick_usage": false
    })
})