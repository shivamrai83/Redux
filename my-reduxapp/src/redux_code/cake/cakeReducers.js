import {Buy_Cake,Buy_Icecream} from './cakeTypes'

const initalState={
    noOfCakes:10
}

const initialIcecream={
    noOfIcecream:20
}

const CakeReducer=(state=initalState,action)=>{
    switch(action.type){
        case Buy_Cake: return {
            ...state,
            noOfCakes:state.noOfCakes-1
        }
        default:return state;
    }
     
}

const IcecreamReducer=(state=initialIcecream,action)=>{
    switch (action.type) {
        case Buy_Icecream:return {
            ...state,
            noOfIcecream:state.noOfIcecream-1
        }
    
        default:
            return state;
    }
}

export{
    CakeReducer,
    IcecreamReducer
} 