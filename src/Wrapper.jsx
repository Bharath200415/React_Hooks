function Wrapper(){
    // return <div>
    //     <CardWrapper innercomponent={<TextComponent/>}/>
    // </div>
    return <div>
        <CardWrapper>
            Hi there!
        </CardWrapper>
    </div>
}

function CardWrapper({children}){
    return <div style= {{border:"2px solid black", padding:20}}>
        {children}
    </div>
}

function TextComponent(){
    return <div>
        Hi there!
    </div>
}

export {Wrapper};