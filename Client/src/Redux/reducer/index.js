const initialState ={
    datas:[]
}


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