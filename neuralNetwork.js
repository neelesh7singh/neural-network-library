function activationFunction(x) {
  return 1 / (1 + Math.exp(-x));
}
class NeuralNetwork {
  constructor(input_nurons, hidden_nurons, output_nurons) {
    this.input_nurons = input_nurons;
    this.hidden_nurons = hidden_nurons;
    this.hidden_layers = hidden_nurons.length;
    this.output_nurons = output_nurons;
    this.weights_ih = new Matrix(this.hidden_nurons[0], this.input_nurons);
    this.weights_ih.randomize();

    this.weightsHidden = [];
    for (let i = 0; i < this.hidden_layers; i++) {
      if (i !== this.hidden_layers - 1) {
        this.weightsHidden.push(
          new Matrix(this.hidden_nurons[i + 1], this.hidden_nurons[i])
        );
      } else
        this.weightsHidden.push(
          new Matrix(this.output_nurons, this.hidden_nurons[i])
        );
      this.weightsHidden[i].randomize();
    }

    this.biase_i = new Matrix(this.hidden_nurons[0], 1);
    this.biase_i.randomize();

    this.biase_h = [];
    for (let i = 0; i < this.hidden_layers; i++) {
      if (i !== this.hidden_layers - 1) {
        this.biase_h.push(new Matrix(this.hidden_nurons[i + 1], 1));
      } else this.biase_h.push(new Matrix(this.output_nurons, 1));
      this.biase_h[i].randomize();
    }
  }
  pridict(input_array) {
    let inputs = Matrix.fromArray(input_array);
    let hidden_output = this.weights_ih.multiply(inputs);
    hidden_output.add(this.biase_i);
    hidden_output.map(activationFunction);
    for (let i = 0; i < this.hidden_layers; i++) {
      hidden_output = this.weightsHidden[i].multiply(hidden_output);
      hidden_output.add(this.biase_h[i]);
      hidden_output.map(activationFunction);
    }
    return hidden_output.toArray();
  }
}

let nn = new NeuralNetwork(2, [2, 4, 8], 2);
console.log(nn.pridict([1, 0]));
