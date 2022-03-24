const TestType = "<h1>String de prueba</h1><br/><p>Parrafo de prueba</p>"

const ActivityContent = () => {
    console.log(TestType)
    if(TestType !== {}){
        function createMarkup(){
            return{__html: (TestType)}
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