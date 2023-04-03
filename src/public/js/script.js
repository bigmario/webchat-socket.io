const socket = io();

const send = document.querySelector('#send-message');
const allMessages = document.querySelector('#all-messages');

send.addEventListener('click', () => {
    const message = document.querySelector('#message');
    socket.emit('message', message.value);
    message.value = '';
});

socket.on('message', ({ user, message }) => {
    const msg = document.createRange().createContextualFragment(
        `<div class="message">
        <div class="image-container">
            <img src="/images/pic.jpeg">
        </div>
        <div class="message-body">
            <div class="user-info">
                <span class="username">${user}</span>
                <span class="time">${new Date()}</span>
                <p>${message}</p>

            </div>
        </div>
    </div>`);
    allMessages.append(msg)
});