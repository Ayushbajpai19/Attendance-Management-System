import "./featuredInfo.css";
import { ArrowDownward, ArrowUpward } from "@material-ui/icons";
import { Link } from "react-router-dom";


export default function FeaturedInfo() {
  return (
    <Link to="/products" className="link">
    <div className="featured">
      <div className="featuredItem1">
        <span className="featuredTitle">Ms.Singh</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">IX - C</span>
          <span className="featuredMoneyRate">
           Class 
          </span>
        </div>
        <span className="featuredSub">Physics</span>
      </div>
     
      <div className="featuredItem2">
        <span className="featuredTitle">Present</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">65</span>
          <span className="featuredMoneyRate">
             <ArrowUpward  className="featuredIcon positive"/>
          </span>
        </div>
        <span className="featuredSub">As recorded at 8.02am</span>
      </div>
      <div className="featuredItem3">
        <span className="featuredTitle">Late</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">1</span>
          <span className="featuredMoneyRate">
             <ArrowDownward className="featuredIcon late"/>
          </span>
        </div>
        <span className="featuredSub">As recorded at 8.02am</span>
      </div>
      <div className="featuredItem4">
        <span className="featuredTitle">Absent</span>
        <div className="featuredMoneyContainer">
          <span className="featuredMoney">2</span>
          <span className="featuredMoneyRate">
             <ArrowDownward className="featuredIcon negative"/>
          </span>
        </div>
        <span className="featuredSub">As recorded at 8.02am</span>
      </div>
      
    </div></Link>
  );
}
