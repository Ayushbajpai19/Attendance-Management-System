import "./widgetSm.css";
import { Visibility } from "@material-ui/icons";

export default function WidgetSm() {
  return (
    <div className="widgetSm">
      <span className="widgetSmTitle">Notice Board</span>
      <ul className="widgetSmList">
        <li className="widgetSmListItem">
        
          <div className="widgetSmUser">
            <span className="widgetSmUsername">International Science Olympiad</span>
            <span className="widgetSmUserTitle">Last Date- 29/01/2023</span>
          </div>
          <button className="widgetSmButton">
            <Visibility className="widgetSmIcon" />
            Display
          </button>
        </li>

        <li className="widgetSmListItem">
        
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Drama Club Registrations</span>
          <span className="widgetSmUserTitle">Last Date- 29/01/2023</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>

      <li className="widgetSmListItem">
        
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Sports Day</span>
          <span className="widgetSmUserTitle">Last Date- 29/01/2023</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          Display
        </button>
      </li>
      <li className="widgetSmListItem">
        
        <div className="widgetSmUser">
          <span className="widgetSmUsername">Parent Teacher Meeting</span>
          <span className="widgetSmUserTitle">1/02/2023</span>
        </div>
        <button className="widgetSmButton">
          <Visibility className="widgetSmIcon" />
          
          Display
        </button>
      </li>

       
      </ul>
      <button className="productButton">Add Notice</button>
    </div>
  );
}
