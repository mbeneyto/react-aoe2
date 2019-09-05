export default function(classes) {
  if (!classes || classes.length <= 0) {
    return '';
  }

  return Object.entries(classes)
    .map(([key, value]) => (value ? key : ''))
    .join(' ');
}
