const NINE = {
    v: () => {
        console.info("Nine.js version 1.0.0");
    },
    statefulObject: function(initalState) {
        this._state = initalState;
        this._eventListeners = {};
        this._deactivated = new Set();
        this.addListener = (name, eventListener) => {
            this._eventListeners[name] = eventListener;
        };
        this._callListener = (name) => {
            if (!this._deactivated.has(name))
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
        this.deavtivate = (name) => {
            this._deactivated.add(name);
        };
        this.avtivate = (name) => {
            if (this._deactivated.has(name)) {
                this._deactivated.delete(name);
            }
        };
        this.removeListener = (name) => {
            this.avtivateListener(name);
            this._eventListeners[name] = null;
        };
    }
};

export {
    NINE
};

if (window) {
    window.NINE = NINE;
}