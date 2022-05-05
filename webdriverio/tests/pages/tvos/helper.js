export function fuzzyMatchHour (hour, text) {
  return [0,-1,1]
    .map(offset => (offset+hour) % 24)
    .map(hour => text.includes(hour))
    .reduce((a,b) => a || b)
}
