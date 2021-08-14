const YEAR_JOINED = 2019;
const MONTH_JOINED = 5;
const TODAY_DATE = new Date();
const CURRENT_YEAR = TODAY_DATE.getFullYear();
const CURRENT_MONTH = TODAY_DATE.getMonth() + 1; // getMonth starts from 0.

export default function ProfExp(attrs) {
  let calculatedYears, calculatedMonths;
  calculatedMonths = Math.abs(CURRENT_MONTH - MONTH_JOINED);
  if (CURRENT_MONTH > MONTH_JOINED) {
    calculatedYears = CURRENT_YEAR - YEAR_JOINED;
  } else {
    calculatedYears = CURRENT_MONTH - 1 - YEAR_JOINED;
    calculatedMonths = 12 - calculatedMonths;
  }
  return <span {...attrs}>{`${calculatedYears} Years ${calculatedMonths} Months`}</span>;
}