ServerEvents.recipes(event => {
    event.recipes.powah.energizing(
        [
            'minecraft:iron_block', 
            'minecraft:gold_block'
        ], 
        '2x powah:energized_steel_block', 
        90000
    ).id('kubejs:powah/energizing/energized_steel_block')

    event.recipes.powah.energizing(
        [
            'allthecompressed:blaze_rod_block',
        ], 
        'powah:blazing_crystal_block', 
        810000
    ).id('kubejs:powah/energizing/blazing_crystal_block')

    event.recipes.powah.energizing(
        [
            'minecraft:diamond_block'
        ], 
        'powah:niotic_crystal_block', 
        2700000
    ).id('kubejs:powah/energizing/niotic_crystal_block')

    event.recipes.powah.energizing(
        [
            'minecraft:emerald_block'
        ], 
        'powah:spirited_crystal_block', 
        9000000
    ).id('kubejs:powah/energizing/spirited_crystal_block')
})