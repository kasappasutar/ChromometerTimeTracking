
export default function tags(state = [], action) {
  if (action.type !== undefined) {
    if (action.type === 'ADD_Tag') {
      return [...state, {
        id : action.id,
        tagName: action.tagName,
        startTS: action.startTS,
        diff: action.diff
      }]
    }
  }
  return state
}
