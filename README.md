Name : Aaron Robinson
Assignment : Rock Paper Scissor Lizard Spock - Prototype and EndPoint
Date : 1/15/2025
Objective :
You are to design a Rock, Paper, Scissors, Lizard, Spock game.

Create the Prototype to your version of Rock, Paper, Scissors, Lizard Spock.

Create the Endpoint that when called it will give you the CPU response.
---

github [here](https://github.com/wraithio/ARobinsonP3RPSLS)

1.Rock
2.Paper
3.Scissors
4.Lizard
5.Spock
### Peer Review by: David Monterrosa
> Overall the code seems to work as intended. You successfully met the design specifications of the challenge.
Here are some minor things you could improve in my opinion:

1. You could shorten your random number generator logic by initializing randomNum.
// int randomNum = rng.Next(1,5); 

2. You could put the logic for the random number generation into your RPSLSServices, since right now its just returning a slighly more detailed version of the string you are getting from the array in your RPSLSController file. Great work! 