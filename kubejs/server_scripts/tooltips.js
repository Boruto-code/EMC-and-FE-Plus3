ItemEvents.modifyTooltips(event => {
    event.add([
        "kubejs:incomplete_refined_radiance_casing",
        "kubejs:incomplete_shadow_steel_casing",
        "kubejs:incomplete_redstone_engineering",
        "kubejs:incomplete_light_engineering",
        "kubejs:incomplete_heavy_engineering"
    ], Text.translate("警告：不要将它放置！").red())
})