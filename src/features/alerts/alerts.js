import swal from 'sweetalert';

export const subscribeSuccess = () => {
    swal({
        title: "Now you are subscribe!",
        text: "Thank you, for singin up, stay tune for news on your inbox",
        icon: "success",
    });
}