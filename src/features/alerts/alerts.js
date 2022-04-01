import swal from 'sweetalert';

const subscribeSuccess = () => {
    swal({
        title: "Now you are subscribe!",
        text: "Thank you, for singin up, stay tune for news on your inbox",
        icon: "success",
    });
}

const confirmAlert = (title, message, buttonMessage) => {
    swal({
        title: (title),
        text: (message),
        icon: "success",
        button: (buttonMessage)
    })
}

const errorAlert = (title, message, buttonMessage) => {
    swal({
        title: (title),
        text: (message),
        icon: "error",
        button: {
            text: (buttonMessage)
        }
    })
}

const infoAlert = (title, message, buttonMessage) => {
    swal({
        title: (title),
        text: (message),
        icon: "info",
        button: {
            text: (buttonMessage)
        }
    })
}

export { subscribeSuccess, confirmAlert, errorAlert, infoAlert }