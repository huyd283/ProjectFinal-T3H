const Reducer = (state,action)=>{ 
    switch(action.type){
        case "update_cart": {
            return {...state,cart:state.cart,isLoading:true};
        } 
        case "update_products": {
            return {...state,productsCate:state.productsCate,isLoading:true};
        } 
        case "update_order": {
            return {...state,order:state.order,isLoading:true};
        } 
        case "update_guest_order": {
            return {...state,guest_order:state.guest_order,isLoading:true};
        }
        case "update_pay": {
            return {...state,pay:state.pay,isLoading:true};
        }
        case "hide_loading":{
            return {...state,isLoading:false};
        }
        default: return state;


    }
}
export default Reducer;