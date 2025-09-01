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
})