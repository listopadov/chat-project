(function () {
    "use strict";

    class Chat {
        constructor(props) {
            this.chatWrap = props.el;
            this.chatWrap.classList.add("chat");

            this._createTemplateChatMsg = this._createTemplateChatMsg.bind(this);
            this._createMsgComponent = this._createMsgComponent.bind(this);
            this._createChatComponent = this._createChatComponent.bind(this);
        }

        //methods
        _createChatComponent() {
            this.chatWrap.appendChild(this._createMsgComponent());
            this.chatWrap.appendChild(this._createMsgComponent());
            this.chatWrap.appendChild(this._createMsgComponent());
            this.chatWrap.appendChild(this._createMsgComponent());
            this.chatWrap.appendChild(this._createMsgComponent());
            this.chatWrap.appendChild(this._createMsgComponent());

            return this.chatWrap;
        }

        _createMsgComponent() {
            return this._createTemplateChatMsg();
        }

        _createTemplateChatMsg() {
            this.chatMsgWrap = document.createElement("div");
            this.chatImageWrap = document.createElement("div");
            this.chatMsgItem = document.createElement("div");

            this.chatMsgWrap.classList.add("chat-msg__wrap");
            this.chatImageWrap.classList.add("chat-img__wrap");
            this.chatMsgItem.classList.add("chat-text__wrap");

            this.chatImageWrap.innerHTML =
                `<img src="#" 
                     alt="userAvatar" 
                     class="chat-img"
                />`;

            this.chatMsgItem.innerHTML =
                `<div class="chat-text__data">
                    <span class="chat-text__data-name">userName</span>
                    <span class="chat-text__data-time">12:48</span>
                </div>
                <p class="chat-text__text">Hello world!</p>`;

            this.chatMsgWrap.appendChild(this.chatImageWrap);
            this.chatMsgWrap.appendChild(this.chatMsgItem);

            return this.chatMsgWrap;
        }

        renderChat() {
            return this._createChatComponent();
        }
    }

    window.Chat = Chat;

})();