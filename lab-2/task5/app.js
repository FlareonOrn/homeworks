const HeroBuilder = require('./heroBuilder');
const EnemyBuilder = require('./enemyBuilder');
const Director = require('./director');

function main() {
    const director = new Director();

    const heroBuilder = new HeroBuilder();
    const hero = director.constructHero(heroBuilder);

    const enemyBuilder = new EnemyBuilder();
    const enemy = director.constructEnemy(enemyBuilder);

    console.log('Hero:');
    console.log(hero.getFeatures());

    console.log('\nEnemy:');
    console.log(enemy.getFeatures());
}

main();
