import React from 'react'
import {connect} from 'react-redux'
import {buyCake,buyIcecream} from '../redux_code'

function Cakeshop(props) {
    return (
        <div>
            <h2>Total Cakes-{props.noOfCakes}</h2>
            <button onClick={props.buyCake}>Buy Cake</button>
            <h2>sTotal IceCreams-{props.noOfIcecream}</h2>
            <button onClick={props.buyIcecream}>Buy Cake</button>
        </div>
    )
}

//selectors in seperate folder
const mapStateToProps = (state) =>{
    return {
        noOfCakes:state.cake.noOfCakes,
        noOfIcecream:state.icecream.noOfIcecream
    }
} 

const mapDispatchToProps = (dispatch) =>{
    return {
        buyCake:()=>dispatch(buyCake()),
        buyIcecream:()=>dispatch(buyIcecream())
       
    }
}

export default connect(
    mapStateToProps,
    mapDispatchToProps,
    )(Cakeshop)