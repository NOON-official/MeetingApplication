const SET_Male= "SET_Male";
const SET_FEMALE= "SET_FEMALE";
const NUMBER= "NUMBER";
const AGE="AGE";
const JOBS_CHOOSE="JOBS_CHOOSE";
const JOBS_UNCHOOSE="JOBS_UNCHOOSE";
const UNIVERSITES_CHOOSE="UNIVERSITEIS_CHOOSE";
const UNIVERSITES_UNCHOOSE= "UNIVERSITIES_UNCHOOSE";
const MAJORS_CHOOSE="MAJORS_CHOOSE";
const MAJORS_UNCHOOSE="MAJORS_UNCHOOSE";
const CHARACTERS_CHOOSE="CHARACTERS_CHOOSE";
const CHSRACTER_UNCHOOSE="CHARACTRS_UNCHOOSE";


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
	 majors: [0]*3, // multi choice
	 chatacters:[0]*4, // multi choice
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
    default:
      return state;
  }
};

export default reducer