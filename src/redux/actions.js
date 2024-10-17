
export const increament = ()=> (action)=>{
    action({
        type: 'actionIncreament',
    });
}


export const decreament = ()=> (action)=>{
    action({
        type: 'actionDecreament',
    });
}

export const reset = ()=>(action)=>{
    action({
        type: 'actionReset',
    });
}
