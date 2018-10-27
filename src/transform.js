function groupAdultsByAgeRange(people) {
  const overAge18 = people.filter(person => person.age >= 18)

  const groupedByAgeRange = overAge18.reduce(
    (acc, person) => {
      if (person.age <= 20) {
        acc['20 and younger'].push(person)
      } else if (person.age <= 30) {
        acc['21-30'].push(person)
      } else if (person.age <= 40) {
        acc['31-40'].push(person)
      } else if (person.age <= 50) {
        acc['41-50'].push(person)
      } else {
        acc['51 and older'].push(person)
      }
      return acc
    },
    {
      '20 and younger': [],
      '21-30': [],
      '31-40': [],
      '41-50': [],
      '51 and older': []
    })

  const result = Object.keys(groupedByAgeRange).reduce(
    (finalAgeGroup, range) => {
      if (groupedByAgeRange[range].length >= 1) {
        finalAgeGroup[range] = groupedByAgeRange[range]
      }
      return finalAgeGroup
    },
    {})

  return result
}

module.exports.groupAdultsByAgeRange = groupAdultsByAgeRange
