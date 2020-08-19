# Neural Network Library

This is just a basic neural network I coded for myself to learn how a neural network works.

## How to use this neural network ->

* Create an instance of the neural network as follows </br>
   `let nn = new NeuralNetwork(2, [2], 1);`</br>
   Here the first argument is the number of neurons in the input layer, 2nd argument is an array (size >0) describing the number of neurons in the ith hidden layer   and the third argument is the number of neurons in the output layer.
   
* To trains the model use `.train()` function it takes 2 arguments input and expected output.

* To predict use `predict()` function with the input as argument.
