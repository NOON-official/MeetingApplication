export default function isAlreadyCliked(list, value) {
  const isduplicated = list.some((v) => v === value);
  return isduplicated;
}
