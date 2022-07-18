

const initialState = 

    { 
    user: "userName",
	 gender: true,
	 number:2,
	 age: 20,
	 // jobs multi choice
   univ: false,
   busi:false,
   back: false,
   upper:false,
   jobs:{},
	 universities: "userUniversities", // multi choice
	  // multi choice
	 comedian:false,
   face:false,
   moderator:false,
   nerd:false,
   characters:{},
	 apperance: "userAppearance", // multi choice -> 2 or 3
	 height: "userHeight", // multi choice
	 personality: "userPersonality", // multi choice
    };


const reducer=(state = initialState, action)=>{
  switch (action.type) {
    case "SET_MALE":
      return { ...state, 
        gender: true
      };
    case "SET_FEMALE":
      return{ ...state,
        gender: false
      }
    case "NUMBER":
      return{...state,
        number: action.payload
      }
    case "AGE":
      return {...state,
        age: action.payload

    }
    case "JOBS_UNIV":
      return{
        ...state,
        univ :action.payload
      }
 case "JOBS_BUSI":
      return{
        ...state,
       busi:action.payload
      }
       case "JOBS_UPPER":
      return{
        ...state,
        upper:action.payload
      }
       case "JOBS_BACK":
      return{
        ...state,
        back:action.payload
      }
      case "CHAR_COMED":
      return{
        ...state,
        comedian: action.payload
      }
      case "CHAR_FACE":
        return{
          ...state,
          face:action.payload
        }
        case "CHAR_MODERA":
      return{
        ...state,
        moderator: action.payload
      }
      case "CHAR_NERD":
      return{
        ...state,
        nerd: action.payload
      }
    default:
      return state;
  }
};

export default reducer