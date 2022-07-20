const initialState = {
  user: 'userName',
  phone: '010-1111-1111',
  gender: '남자',
  num: 2,
  age: 20,
  jobs: [],
  university: [], // multi choice
  characters: [],
  area: [],
  day: [],
  apperance: [], // multi choice -> 2 or 3
  height: [], // multi choice
  personality: [], // multi choice
}

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_MALE':
      return { ...state, gender: '남자' }
    case 'SET_FEMALE':
      return { ...state, gender: '여자' }
    case 'NUMBER':
      return { ...state, num: action.payload }
    case 'AGE':
      return { ...state, age: action.payload }

    case 'CHAR_COMED':
      return {
        ...state,
        comedian: action.payload,
      }
    case 'CHAR_FACE':
      return {
        ...state,
        face: action.payload,
      }
    case 'CHAR_MODERA':
      return {
        ...state,
        moderator: action.payload,
      }
    case 'CHAR_NERD':
      return {
        ...state,
        nerd: action.payload,
      }
    case 'JOBS':
      const newJob = action.payload
      return { ...state, jobs: [...state.jobs, newJob] }
    case 'JOBS_DELETE':
      const deleteJob = state.jobs.filter((value) => value !== action.payload)
      return {
        ...state,
        jobs: deleteJob,
      }
    case 'UNIVERSITIES':
      const newUniv = action.payload

      return { ...state, university: [...state.university, newUniv] }

    case 'UNIVERSITIES_DELETE':
      const deleteUniv = state.university.filter(
        (value) => value !== action.payload
      )
      return {
        ...state,
        university: deleteUniv,
      }
    case 'CHARACTERS':
      const newCharacter = action.payload

      return { ...state, characters: [...state.characters, newCharacter] }

    case 'CHARACTERS_DELETE':
      const deleteCharacter = state.characters.filter(
        (value) => value !== action.payload
      )
      return {
        ...state,
        characters: deleteCharacter,
      }
    case 'AREA':
      const newArea = action.payload

      return { ...state, area: [...state.area, newArea] }

    case 'AREA_DELETE':
      const deleteArea = state.area.filter((value) => value !== action.payload)
      return {
        ...state,
        area: deleteArea,
      }
    case 'DAY':
      const newDay = action.payload

      return { ...state, day: [...state.day, newDay] }

    case 'DAY_DELETE':
      const deleteDay = state.day.filter((value) => value !== action.payload)
      return {
        ...state,
        day: deleteDay,
      }
    default:
      return state
  }
}

export default reducer
