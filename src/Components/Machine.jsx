import React from 'react'


export default function Machine(props) {
    // let x="🥲"
    // let y="🥲"
    // let z="🥲"

    if((props.x===props.y)&&(props.y===props.z))
    {
        return(
            <>
                <div className="slot_inner" style={{textAlign:"center"}}>
                    <h1>
                        {props.x} {props.y} {props.z}
                    </h1>
                    <h1>This is Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
    else{
        return(
            <>
                <div className="slot_inner" style={{textAlign:"center"}}>
                    <h1>
                        {props.x} {props.y} {props.z}
                    </h1>
                    <h1>This is Not Matching</h1>
                    <hr />
                </div>
            </>
        )
    }
}
