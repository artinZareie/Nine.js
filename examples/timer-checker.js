const nine = require('./src/nine.min.js').NINE;

let state = new nine.StatefulObject({
    name: "Artin",
    age: 14
});

state.addListener('logger', (state) => {
    console.table(state);
});

state.setState({
    age: 16
});

setInterval(() => {
    state.setState({
        age: state.getState().age+ 1 
    });
}, 3000);
