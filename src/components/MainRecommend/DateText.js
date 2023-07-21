export default function DateText({ availableDates }) {
  let dates = '';
  if (availableDates.includes(1) && availableDates.includes(2)) {
    dates = '모두 좋아요';
  } else if (availableDates.includes(1)) {
    dates = '평일';
  } else {
    dates = '주말';
  }
  return dates;
}
