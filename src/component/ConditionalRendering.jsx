const ConditionalRendering = () => {

    const isLogin = true;

    return (
       <div>
         { isLogin
            ?<h1>This is HomeScreen</h1>
            :<h1>THis is Login Screen</h1>
        }
       </div>
    )
}

export default ConditionalRendering