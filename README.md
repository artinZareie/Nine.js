# Nine.js
A Js Library to make stateful objects

*************************************
INSTALL THIS LIBRARY
*************************************

1. download `dist/nine.min.js`
2. add this part of code : `<script src="/path/to/nine.min.js"></script>` to html file
3. read wiki to know hot to use it!!!


# A Example
How to make an subscriber and an stateful object:



`let stateful = new NINE.StatefulObject({
            name: 'Artin',
            age: 14
        });
        stateful.addListener('loader', function (state) {
            console.log(state.age * 2);
        });
        stateful.addListener('table-states', function (state) {
            console.table(state);
        });
        stateful.deavtivate('loader');
        stateful.setState({
            name: 'Ali'
        });
        stateful.avtivate('loader');
        stateful.setState({
            name: 'Ali',
            age: 19
        });`
        
        `sessionStorage.setItem('i', 0);
        let statist = new NINE.Subscriber(
            () => {
                sessionStorage.setItem('i', parseInt(sessionStorage.getItem('i')) + 1);
                console.log(sessionStorage.getItem('i'));
                return sessionStorage.getItem('i');
            },
            (state, unsubscribe) => {
                console.log(state);
                if (state == 20) {
                    unsubscribe();
                }
            }
        );`
        
That easy! and much easier than RxJS!!!
