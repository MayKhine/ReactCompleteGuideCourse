export const InvestmentTable = ({ yearlyData }) => {
  return (
    <table className="result">
      <thead>
        <tr>
          <th>Year</th>
          <th>Total Savings</th>
          <th>Interest (Year)</th>
          <th>Total Interest</th>
          <th>Invested Capital</th>
        </tr>
      </thead>
      <tbody>
        {yearlyData.map((eachYearData) => {
          return (
            <tr>
              <td>{eachYearData.year}</td>
              <td>{eachYearData.savingsEndOfYear}</td>
              <td>{eachYearData.yearlyInterest}</td>
              <td>{eachYearData.interestEndOfYear}</td>
              <td>{eachYearData.investedEndOfYear}</td>
            </tr>
          )
        })}
      </tbody>
    </table>
  )
}
