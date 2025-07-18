export const useCalculateYearsSince = (time) => {
  const now = new Date();
  const thisYear = new Date(time);
  let present = now.getFullYear() - thisYear.getFullYear();

  const hasPassedThisYear =
    now.getMonth() > thisYear.getMonth() ||
    (now.getMonth() === thisYear.getMonth() &&
      now.getDate() >= thisYear.getDate());

  if (!hasPassedThisYear) {
    present -= 1;
  }

  return present;
};
