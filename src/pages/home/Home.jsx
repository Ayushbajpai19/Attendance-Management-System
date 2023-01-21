import Chart from "../../components/chart/Chart";
import FeaturedInfo from "../../components/featuredInfo/FeaturedInfo";
import "./home.css";
import { userData } from "../../dummyData";
import WidgetSm from "../../components/widgetSm/WidgetSm";
import WidgetLg from "../../components/widgetLg/WidgetLg";
import Quote from "../../components/quote/quote";

export default function Home() {
  return (
    <div className="home">
      <FeaturedInfo />
      
      <div className="homeWidgets">
      
        <WidgetLg/>
        <WidgetSm/>
      </div>
      <Chart data={userData} title="Attendance Register" grid dataKey="Present"/>
      <Quote/>
    </div>
  );
}
