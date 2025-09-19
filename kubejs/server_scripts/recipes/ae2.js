ServerEvents.recipes(event => {
    event.custom({
        "type": "ae2:inscriber",
        "ingredients": {
            "middle": {
                "item": "ae2:dense_energy_cell"
            },
            "top": {
                "item": "advanced_ae:quantum_processor_press"
            }
        },
        "mode": "inscribe",
        "result": {
            "count": 1,
            "id": "kubejs:1x_compressed_energy_cell"
        }
    })
})