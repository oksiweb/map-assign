export default (map, ...sources) => {
  for (let source of sources) {
    let entries = typeof source.entries == "function"
      ? source.entries()
      : Object.entries(source)

    for (let entry of entries) map.set(...entry)
  }

  return map
}
