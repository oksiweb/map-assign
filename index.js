export default (map, ...sources) => {
  if (typeof map.set != "function") throw new TypeError

  for (let source of sources) {
    if (source == null) continue

    let entries = typeof source.entries == "function"
      ? source.entries()
      : Object.entries(source)

    for (let entry of entries) map.set(...entry)
  }

  return map
}
