# Micro Game Engine

This is two components, the *CLI inputer* and the *Ticker*, when combined they make a micro game engine, as explained below.

## 🖥 node CLI: AKA Inputer

This is a simple CLI interface for node, in just over 60 lines.

Run the example with node inputerUseCase.js

The use case file sets up a couple of example instructions. Note you pass a function to the inputer for later execution.

Instructons take the form { command, function } as {} cmd: command, act: function }

There are 3 built-in commands which can be over ridden when laoding instructions into the run function.

THe cmd functions emulates an input line, allowing the sending of lines programatically. Mainly this is useful for playing with the inputer, since the function is sent to the inputer anyway, it is more efficient to call it directly.

## ⏲ Ticker

A simple ticker, in less than 20 lines.

Run the example with node tickerUseCase.js

Usage: pass an update function to the start method. THe update function is called every tick.

Stop the ticket with the stop function ticker.stop()


## 🏏😲 Micro Game Engine

This combines the inputer and the ticker to make an interactive game engine. 

The use case microGameUseCase.js sends an update function to the ticker and stop, start and report functions to the inputer.

The use case sends the ***h*** instruction to the interpreter (to display the available commands).

After 3 seconds it sends the ***n*** command with a following line *barry*, which creates a new cool thing, called *barry*

It send the ***r*** command after 4 seconds to report on the updates recieved.

After 6 seconds it send the ***t*** command to request a report on all cool things, we can see *barry* has had 3 bites of cheese, well done, you are a winner, game over.

You can use any of the commands listed. Note: the ***x*** command can take upto 2 sconds to complete.
