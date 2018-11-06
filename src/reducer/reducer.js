const initialState = {
  selections:[],
  color:'#fad0c3',
}

export default function reducer(state = initialState, action) {
  switch (action.type) {
    case 'ADD-SELECTION':{
      let newSelection = state.selections.slice();  
      newSelection.push(action.data);
      return {
        ...state,
        selections:[...newSelection],
      }
    }
    case 'DELETE':{
      let newSelection = state.selections.slice(); 
      newSelection.splice(newSelection.indexOf(action.data),1);        
      return { 
        ...state,
        selections:[...newSelection], 
      }
    }
    case 'CHANGE-COLOR': {
      const color = action.data.color.hex;
      return { ...state, color }
    }
    case 'RESET': {
      return initialState
    }    
    default:
      return state
  }
}
