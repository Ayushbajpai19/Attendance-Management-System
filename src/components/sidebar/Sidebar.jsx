import "./sidebar.css";
import {
  LineStyle,
  Timeline,
  TrendingUp,
  PermIdentity,
  Storefront,
  AttachMoney,
  BarChart,
  MailOutline,
  DynamicFeed,
  ChatBubbleOutline,
  WorkOutline,
  Report,Home,
  CakeOutlined,
  EmojiEventsOutlined,
  HomeOutlined,
} from "@material-ui/icons";
import Tooltip from '@material-ui/core/Tooltip';



import { Link } from "react-router-dom";

export default function Sidebar() {


  return (
    <div className="sidebar">
      <div className="sidebarWrapper">
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Dashboard</h3>
          <ul className="sidebarList">
            <Link to="/" className="link">
              <li className="sidebarListItem active">
                <HomeOutlined className="sidebarIcon" />
                Home
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Quick Menu</h3>
          <ul className="sidebarList">
           
            <Link to="/products" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Record Attendance
              </li>
            </Link>

            <Link to="/users" className="link">
              <li className="sidebarListItem">
                <PermIdentity className="sidebarIcon" />
                Past Records
              </li>
            </Link>
          </ul>
        </div>
        <div className="sidebarMenu">
          <h3 className="sidebarTitle">Notifications</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <MailOutline className="sidebarIcon" />
              Mail
            </li>
            <li className="sidebarListItem">
              <DynamicFeed className="sidebarIcon" />
              Notices
            </li>
            <li className="sidebarListItem">
              <ChatBubbleOutline className="sidebarIcon" />
              Holidays
            </li>
          </ul>
        </div>
       
          <h3 className="sidebarTitle">Upcoming Events</h3>
          <ul className="sidebarList">
          <Tooltip title="25 January 2023">
            <li className="sidebarListItem">
              <CakeOutlined className="sidebarIcon" />
            Aman Singh, 8
            </li>
            </Tooltip>
            <Tooltip title="28 January 2023">
            <li className="sidebarListItem">
              <CakeOutlined className="sidebarIcon" />
            Shruthi Agarwal, 9
            </li>
            </Tooltip>
            <Tooltip title="31 January 2023">
            <li className="sidebarListItem">
              <EmojiEventsOutlined className="sidebarIcon" />
              Sports Day
            </li>
            </Tooltip>
          </ul>
          <div className="sidebarMenu">
          <h3 className="sidebarTitle">Help</h3>
          <ul className="sidebarList">
            <li className="sidebarListItem">
              <Report className="sidebarIcon" />
              Reports
            </li>
          </ul>
        </div>
       
        </div>
    </div>
    
   
  );
}
