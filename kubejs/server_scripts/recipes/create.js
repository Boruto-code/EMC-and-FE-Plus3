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