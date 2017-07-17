
export function addTag(id, tagName, startTS, diff) {
  return {
    type: 'ADD_Tag',
    id,
    tagName,
    startTS,
    diff
  }
}

