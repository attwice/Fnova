export const getDateTimeFormat = (date) => {
  let formatedDate

  const theDay = new Date(date)
  //theDay.setDate(date.getDate() + 1)
  theDay.setDate(date.getDate())
  const dayOfWeek = theDay.toUTCString().split(",")[0]
  const MONTHS = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ]

  formatedDate = `${MONTHS[date.getMonth()]} ${date.getDate()} (${dayOfWeek})`

  return formatedDate
}
