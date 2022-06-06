const initialState ={
    datas:[]
}

//GLOBAL STATE 
//managing information across a global state

export default function rootReducer (state= initialState, action){
switch(action.type){
    case 'GET_DATES':
        return{
            ...state,
            datas:action.payload
        }
    case 'GET_NAME_DATA':
            return {
                ...state,
                datas:action.payload
            }
        default :
        return {
            ...state,
        }
}


}