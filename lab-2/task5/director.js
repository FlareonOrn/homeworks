class Director {
    constructHero(builder) {
        return builder
            .setHeight('6 feet')
            .setBuild('Muscular')
            .setHairColor('Black')
            .setEyeColor('Blue')
            .setClothes('Armor')
            .setEquipment(['Sword', 'Shield'])
            .setGoodDeeds(['Saved the village', 'Rescued the princess'])
            .build();
    }

    constructEnemy(builder) {
        return builder
            .setHeight('5 feet 10 inches')
            .setBuild('Slim')
            .setHairColor('Red')
            .setEyeColor('Green')
            .setClothes('Dark Cloak')
            .setEquipment(['Dagger', 'Poison'])
            .setEvilDeeds(['Burned the village', 'Kidnapped the princess'])
            .build();
    }
}

module.exports = Director;
