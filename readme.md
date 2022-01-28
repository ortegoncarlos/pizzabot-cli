# PizzaBot Documentation

This project was build for the slice pizzeria, where they need a program that can run their pizzabot.

We decide to bring him alive, to install it first, install the repository globally, so you can use our CLI.

then run:
```
npm i -g
```

to start the bot use pizzabot, and then put the canvas size you would like the pizzabot to live, plus the coordinates separated by space and inside parentheses e.g:

```
pizzabot "10x10 (1,2) (2,3) (4,3)" 
pizzabot "5x5 (0, 0) (1, 3) (4, 4) (4, 2) (4, 2) (0, 1) (3, 2) (2, 3) (4, 1)." 

```

Some examples with errors
```
pizzabot "10x10" 
pizzabot "10x10 (1,2) " 
pizzabot "10xA (1,2) " 
pizzabot "5x5 (100, 0) " 
pizzabot "5x5 (10) " 

```

To run test use:

```
npm test
```

