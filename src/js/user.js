export default function sort(arr) {
  return arr.sort((a, b) => a.health - b.health);
}
