import {Buy_Cake} from './cakeTypes'
import {Buy_Icecream} from './cakeTypes'

export const buyCake=()=>{
    return {
        type:Buy_Cake
    }
}

export const buyIcecream=()=>{
    return{
        type:Buy_Icecream
    }
}