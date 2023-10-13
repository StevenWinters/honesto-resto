import {
  StatisticsBodyData,
  StatisticsHeadingData,
} from "../data/StatisticsData";
import StatisticsHistogram from "../assets/images/statistics-histogram.png";
import CoffeeJelly from "../assets/banners/coffee-jelly.jpg";

const Statistics = () => {
  return (
    <section className="block block--dark statistics">
      <h1>Statistics</h1>
      <h2>Probability Distribution</h2>
      <div className="table__container">
        <table className="container">
          <thead>
            <tr>
              {StatisticsHeadingData.map((data) => (
                <th key={data.id}>{data.heading}</th>
              ))}
            </tr>
          </thead>
          <tbody>
            <tr>
              {StatisticsBodyData.map((data) => (
                <td key={data.id}>{data.text}</td>
              ))}
            </tr>
          </tbody>
        </table>
      </div>
      <p>&#8721; P(X) = 0/15 + 1/15 + 5/15 + 8/15 + 1/15 + 0/15 = 1</p>
      <div className="statistics__container">
        <img
          src={StatisticsHistogram}
          alt="Statistics Histogram"
          className="img img--500"
        />
      </div>
      <div className="statistics__container">
        <h2>Our Best Seller</h2>
        <p>Calculated from the probability distribution.</p>
        <img
          src={CoffeeJelly}
          alt="Coffee Jelly Image"
          className="img img--500"
        />
      </div>
    </section>
  );
};

export default Statistics;
