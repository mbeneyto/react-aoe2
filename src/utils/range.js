export default function(start, stop, step) {
  return Array.from({ length: (stop - start) / step + 1 }, (_, i) => start + i * step);
}
