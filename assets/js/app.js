(function () {
    "use strict";
    // Root component

    //Import components
    const Chat = window.Chat;
    const Form = window.Form;

    // Mediator
    class App {
        constructor(props) {
            this.rootEl = props.el;

            this._createComponents();

            this._init();
        }

        //methods
        _createComponents() {
            this.chat = new Chat({
                el: document.createElement("div")
            });

            this.form = new Form({
                el: document.createElement("div")
            });
        }

        _renderApp() {
            this.rootEl.appendChild(this.chat.renderChat());
        }

        _init() {
            this._renderApp();
        }
    }

    window.App = App;

})();