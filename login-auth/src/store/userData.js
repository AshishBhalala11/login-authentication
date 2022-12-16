export default function userData(
  initialState = {
    isLoading: false,
    permission: false,
  },
  action
) {
  switch (action.type) {

    case 'SET_LOADING':
      return {
        ...initialState,
        isLoading: action.payload
      }

    case 'SET_PERMISSION':
      return {
        ...initialState,
        permission: action.payload
      }

    default:
      return initialState;
  }
}
