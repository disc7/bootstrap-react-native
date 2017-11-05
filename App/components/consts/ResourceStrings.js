export const resourceStrings = {
  consts: {
    'qaType': "qa",
    'revealType': "reveal",
    'marker1': "{0}",
    'marker2': "{1}"
  },
  lang: {
    'empty': "",
    'question': "Q)",
    'answer': "A)"
  }
}

// export function replaceMarker(str, type, find, replaceWith) {
export function replaceMarker(str, type) {
  rs = resourceStrings;
  if (type === rs.consts.qaType) {
    str = str.replace(rs.consts.marker1, rs.lang.question);
    str = str.replace(rs.consts.marker2, rs.lang.answer);
  } else {
    str = str.replace(rs.consts.marker1, rs.lang.empty);
  }
  return str;
}
