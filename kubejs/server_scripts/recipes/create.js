ServerEvents.recipes(event => {
    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "immersiveengineering:ingot_electrum"
        },
        "loops": 5,
        "results": [
            {
                "id": "kubejs:strange_colored_ingot"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projecte:red_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:orange_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:yellow_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:green_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:cyan_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:blue_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_strange_colored_ingot"
                    },
                    {
                        "item": "projectexpansion:purple_matter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_strange_colored_ingot"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_strange_colored_ingot"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "minecraft:copper_ingot"
        },
        "loops": 4,
        "results": [
            {
                "id": "immersiveengineering:rs_engineering"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_redstone_engineering"
                    },
                    {
                        "item": "minecraft:redstone"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_redstone_engineering"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_redstone_engineering"
                    },
                    {
                        "item": "immersiveengineering:sheetmetal_iron"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_redstone_engineering"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_redstone_engineering"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "minecraft:copper_ingot"
        },
        "loops": 4,
        "results": [
            {
                "id": "immersiveengineering:light_engineering"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_light_engineering"
                    },
                    {
                        "item": "immersiveengineering:component_iron"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_light_engineering"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_light_engineering"
                    },
                    {
                        "item": "immersiveengineering:sheetmetal_iron"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_light_engineering"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_light_engineering"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "immersiveengineering:ingot_electrum"
        },
        "loops": 4,
        "results": [
            {
                "id": "immersiveengineering:heavy_engineering"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_heavy_engineering"
                    },
                    {
                        "item": "immersiveengineering:component_steel"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_heavy_engineering"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_heavy_engineering"
                    },
                    {
                        "item": "immersiveengineering:sheetmetal_steel"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_heavy_engineering"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_heavy_engineering"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:refined_radiance"
        },
        "loops": 5,
        "results": [
            {
                "id": "create:refined_radiance_casing"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_refined_radiance_casing"
                    },
                    {
                        "item": "create:andesite_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_refined_radiance_casing"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_refined_radiance_casing"
                    },
                    {
                        "item": "create:copper_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_refined_radiance_casing"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_refined_radiance_casing"
                    },
                    {
                        "item": "create:railway_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_refined_radiance_casing"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_refined_radiance_casing"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:shadow_steel"
        },
        "loops": 5,
        "results": [
            {
                "id": "create:shadow_steel_casing"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_shadow_steel_casing"
                    },
                    {
                        "item": "create:andesite_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_shadow_steel_casing"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_shadow_steel_casing"
                    },
                    {
                        "item": "create:copper_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_shadow_steel_casing"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_shadow_steel_casing"
                    },
                    {
                        "item": "create:railway_casing"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_shadow_steel_casing"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_shadow_steel_casing"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "draconicevolution:chaos_shard"
        },
        "loops": 1,
        "results": [
            {
                "count": 2,
                "id": "draconicevolution:chaos_shard"
            }
        ],
        "sequence": [
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_chaos_shard"
                    },
                    {
                        "item": "create:refined_radiance"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_chaos_shard"
                    }
                ]
            },
            {
                "type": "create:deploying",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_chaos_shard"
                    },
                    {
                        "item": "create:shadow_steel"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_chaos_shard"
                    }
                ]
            },
            {
                "type": "create:cutting",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_chaos_shard"
                    }
                ],
                "processing_time": 20,
                "results": [
                    {
                        "id": "kubejs:incomplete_chaos_shard"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_chaos_shard"
        }
    })

    event.custom({
        "type": "create:sequenced_assembly",
        "ingredient": {
            "item": "create:blaze_cake"
        },
        "loops": 5,
        "results": [
            {
                "id": "create:creative_blaze_cake"
            }
        ],
        "sequence": [
            {
                "type": "create:filling",
                "ingredients": [
                    {
                        "item": "kubejs:incomplete_creative_blaze_cake"
                    },
                    {
                        "type": "fluid_stack",
                        "amount": 1000,
                        "fluid": "kubejs:antimatter"
                    }
                ],
                "results": [
                    {
                        "id": "kubejs:incomplete_creative_blaze_cake"
                    }
                ]
            }
        ],
        "transitional_item": {
            "id": "kubejs:incomplete_creative_blaze_cake"
        }
    })

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "avaritia:infinity_ingot"
            },
            {
                "item": "mekanism:ingot_refined_obsidian"
            },
            {
                "item": "mekanism:ingot_refined_glowstone"
            },
            {
                "item": "kubejs:strange_colored_ingot"
            }
        ],
        "results": [
            {
                "id": "create:chromatic_compound"
            }
        ]
    })

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "kubejs:awakened_scrap"
            },
            {
                "item": "kubejs:awakened_scrap"
            },
            {
                "item": "kubejs:super_glass"
            },
            {
                "item": "kubejs:obsidianite_ingot"
            },
            {
                "item": "create:refined_radiance"
            },
            {
                "item": "create:refined_radiance"
            },
            {
                "item": "create:shadow_steel"
            },
            {
                "item": "create:shadow_steel"
            }
        ],
        "results": [
            {
                "id": "kubejs:rainbow_compound"
            }
        ]
    })

    event.custom({
        "type": "create:mixing",
        "heat_requirement": "superheated",
        "ingredients": [
            {
                "item": "mekanism:pellet_antimatter"
            }
        ],
        "results": [
            {
                "amount": 1000,
                "id": "kubejs:antimatter"
            }
        ]
    })

    event.custom({
        "type": "create_dragons_plus:ending",
        "ingredients": [
            {
                "tag": "c:ingots"
            }
        ],
        "results": [
            {
                "id": "draconicevolution:draconium_ingot"
            }
        ]
    })

    event.custom({
        "type": "create:compacting",
        "ingredients": [
            {
                "item": "minecraft:netherite_ingot"
            },
            {
                "item": "create:sturdy_sheet"
            },
            {
                "item": "mekanism:ingot_refined_obsidian"
            },
            {
                "item": "mekanism:alloy_atomic"
            },
            {
                "type": "fluid_stack",
                "fluid": "bigreactors:yellorium",
                "amount": 1000
            }
        ],
        "results": [
            {
                "id": "kubejs:obsidianite_ingot"
            }
        ]
    })
})