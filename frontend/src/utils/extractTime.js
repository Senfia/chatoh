export function extractTime(dateString) {
  const date = new Date(dateString);
  const hours = padZero(date.getHours());
  const minutes = padZero(date.getMinutes());
  return `${hours}:${minutes}`;
}

// Helper function to add a leading zero to single-digit numbers
function padZero(number) {
  return number.toString().padStart(2, "0");
}
