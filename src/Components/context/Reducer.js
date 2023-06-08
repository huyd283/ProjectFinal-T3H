const reducer = (state,action)=>{ 
    switch(action.type){
        case "update_cart": {
            return {...state,cart:state.cart,isLoading:true};
        } 
        case "update_products": {
            return {...state,productsCate:state.productsCate,isLoading:true};
        } 
        case "hide_loading":{
            return {...state,isLoading:false};
        }
        default: return state;


    }
}
export default reducer;