//  Description recieved accordding API specs

const ActivityContent = (description) => {
    let HTMLString = description

    if(HTMLString.value !== undefined){
        function createMarkup(){
            return{__html: (HTMLString)}
        }
        return(
            <div dangerouslySetInnerHTML={createMarkup()}/>
        )
    }else{
        return(
            <h3>Here well be display a selected activity</h3>
        )
    }
}

export default ActivityContent