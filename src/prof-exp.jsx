import differenceInYears from "date-fns/differenceInYears";
import differenceInMonths from "date-fns/differenceInMonths";

const START_DATE = new Date("2019-05-01");
const TODAY_DATE = new Date();

export default function ProfExp(attrs) {
  const calculatedYears = differenceInYears(TODAY_DATE, START_DATE);
  let calculatedMonths = differenceInMonths(TODAY_DATE, START_DATE);
  calculatedMonths = calculatedMonths % 12;
  if (!!calculatedMonths) {
    return (
      <span
        {...attrs}
      >{`${calculatedYears} Years ${calculatedMonths} Months`}</span>
    );
  } else {
    return <span {...attrs}>{`${calculatedYears} Years`}</span>;
  }
}
