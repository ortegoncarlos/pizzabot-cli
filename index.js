#! /usr/bin/env node

const PizzaService = require('./pizzabot')

const init = ()=>{
    let  args = process.argv.slice(2);
    let input = args[0];
    const pizzabot = new PizzaService(input);
    const result = pizzabot.iterate_over_stops()
    console.log(result)
    return result

}

init()

