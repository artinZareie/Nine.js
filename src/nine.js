const NINE = {
    v: () => {
        console.info("Nine.js version 1.0.0");
    },
    statefulObject: function(initalState) {
        this._state = initalState;
        this._eventListeners = {};
        this.addListener = (name, eventListener) => {
            this._eventListeners[name] = eventListener;
        };
        this._callListener = (name) => {
            this._eventListeners[name](this._state);
        };
        this._callListeners = () => {
            Object.keys(this._eventListeners).forEach((key, index) => {
                this._callListener(key);
            });
        };
        this.setState = (changedState) => {
            this._state = Object.assign(this._state, changedState);
            this._callListeners();
        };
        this.getState = () => {
            return this._state;
        };
    }
};

export {
    NINE
};

window.NINE = NINE;