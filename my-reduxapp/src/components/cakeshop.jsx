import React from 'react'
import {connect} from 'react-redux'
import {useSelector,useDispatch} from 'react-redux'
import {buyCake,buyIcecream} from '../redux_code'

export default function Cakeshop(props) {
    const cakes=useSelector((state)=>state.cake.noOfCakes);
    const icecream=useSelector((state)=>state.icecream.noOfIcecream);
    const dispatch=useDispatch();
    return (
        <div>
            <h2>Total Cakes {cakes}</h2>
            <button onClick={()=>dispatch(buyCake())}>Buy Cake</button>
            <h2>Total IceCreams {icecream}</h2>
            <button onClick={()=>{dispatch(buyIcecream())}}>Buy Cake</button>
        </div>
    )
}

//selectors in seperate folder
// const mapStateToProps = (state) =>{
//     return {
//         noOfCakes:state.cake.noOfCakes,
//         noOfIcecream:state.icecream.noOfIcecream
//     }
// } 
// //dispatcher
// const mapDispatchToProps = (dispatch) =>{
//     return {
//         buyCake:()=>dispatch(buyCake()),
//         buyIcecream:()=>dispatch(buyIcecream())
       
//     }
// }

// export default connect(
//     mapStateToProps,
//     mapDispatchToProps,
//     )(Cakeshop)