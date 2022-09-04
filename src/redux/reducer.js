const initialState = {
  user: 'userName',
  phone: '',
  gender: '남자',
  num: 2,
  age: 20,
  drink:0,
  height:170,
  jobs: [],
  university: [], // multi choice
  characters: [],
  area: [],
  day: [],
  appearance: [], // multi choice -> 2 or 3
  mbti: [], // multi choice
  fashion: [], // multi choice
  introduction: '',
  kakaoid: '',
  prefferedjobs: [],
  prefferedage: [20, 25],
  preffereduniversity: 1,
  prefferedthing: [],
  prefferedheight:[165, 175],
  signin: false, // 핸드폰 인증 여부
  privateinfoconfirm: false, // 이용 약관 동의 여부
  isMatching: false, // 매칭 진행중 여부

  ourTeamInfo:{},
  prefferedTeamInfo:{}
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MALE':
      return { ...state, gender: '남자' };
    case 'SET_FEMALE':
      return { ...state, gender: '여자' };
    case 'NUMBER':
      return { ...state, num: action.payload };
    case 'AGE':
      return { ...state, age: action.payload };
      case 'DRINK':
      return { ...state, drink: action.payload };
      case 'HEIGHT':
      return { ...state, height: action.payload };
    case 'JOBS':
      const newJob = action.payload;
      return { ...state, jobs: [...state.jobs, newJob] };
    case 'JOBS_DELETE':
      const deleteJob = state.jobs.filter((value) => value !== action.payload);
      return { ...state, jobs: deleteJob };
    case 'UNIVERSITIES':
      const newUniv = action.payload;
      return { ...state, university: [...state.university, newUniv] };
    case 'UNIVERSITIES_DELETE':
      const deleteUniv = state.university.filter((value) => value !== action.payload);
      return { ...state, university: deleteUniv };
    case 'CHARACTERS':
      const newCharacter = action.payload;
      return { ...state, characters: [...state.characters, newCharacter] };
    case 'CHARACTERS_DELETE':
      const deleteCharacter = state.characters.filter((value) => value !== action.payload);
      return { ...state, characters: deleteCharacter };
    case 'AREA':
      const newArea = action.payload;
      return { ...state, area: [...state.area, newArea] };
    case 'AREA_DELETE':
      const deleteArea = state.area.filter((value) => value !== action.payload);
      return { ...state, area: deleteArea };
    case 'DAY':
      const newDay = action.payload;
      return { ...state, day: [...state.day, newDay] };
    case 'DAY_DELETE':
      const deleteDay = state.day.filter((value) => value !== action.payload);
      return { ...state, day: deleteDay };
    case 'APPEARANCE':
      const newAppearance = action.payload;
      return { ...state, appearance: [...state.appearance, newAppearance] };
    case 'APPEARANCE_DELETE':
      const deleteAppearance = state.appearance.filter((value) => value !== action.payload);
      return { ...state, appearance: deleteAppearance };
    case 'MBTI':
      const newMbti = action.payload;
      return { ...state, mbti: [...state.mbti, newMbti] };
    case 'MBTI_DELETE':
      const deleteMbti = state.mbti.filter((value) => value !== action.payload);
      return { ...state, mbti: deleteMbti };
    case 'FASHION':
      const newFashion = action.payload;
      return { ...state, fashion: [...state.fashion, newFashion] };
    case 'FASHION_DELETE':
      const deleteFashion = state.fashion.filter((value) => value !== action.payload);
      return { ...state, fashion: deleteFashion };
    case 'PREFFEREDJOBS':
      const newPrefferedJob = action.payload;
      return { ...state, prefferedjobs: [...state.prefferedjobs, newPrefferedJob] };
    case 'PREFFEREDJOBS_DELETE':
      const deletePrefferedJob = state.prefferedjobs.filter((value) => value !== action.payload);
      return { ...state, prefferedjobs: deletePrefferedJob };
    case 'PREFFEREDAGE':
      return { ...state, prefferedage: action.payload };
      case 'PREFFEREDHEIGHT':
      return{...state, prefferedheight: action.payload};
    case 'PREFFEREDUNIVERSITIES':
      return { ...state, preffereduniversity: action.payload };

    case 'SET_PHONE':
      return { ...state, phone: action.payload };
    case 'SET_INTRODUCTION':
      return { ...state, introduction: action.payload };
    case 'SET_KAKAOID':
      return { ...state, kakaoid: action.payload };
    case 'SET_SIGNIN':
      return { ...state, signin: action.payload };
    case 'SET_PRIVATEINFOCONFIRM':
      return { ...state, privateinfoconfirm: action.payload };
    case 'SET_PREFFEREDTHING':
      const newPrefferedthing = action.payload;
      return { ...state, prefferedthing: [...state.prefferedthing, newPrefferedthing] };
    case 'DELETE_PREFFEREDTHING':
      const deletePrefferedThing = state.prefferedthing.filter((value) => value !== action.payload);
      return { ...state, prefferedthing: deletePrefferedThing };
    case 'SET_IS_MATCHING':
      return { ...state, isMatching: action.payload };
    case 'SET_OURTEAMINFO':
      return{...state, ourTeamInfo: action.payload};
    case 'SET_PREFFEREDTEAMINFO':
        return{...state, prefferedTeamInfo: action.payload};
    default:
      return state;
  }
};

export default reducer;
