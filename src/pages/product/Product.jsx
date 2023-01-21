import { Link } from "react-router-dom";
import "./product.css";
import Chart from "../../components/chart/Chart"
import {productData} from "../../dummyData"


export default function Product() {
  return (
    <div className="product">
      <div className="productTitleContainer">
        <h1 className="productTitle">Attendance</h1>
        <Link to="/newproduct">
          <button className="productAddButton">Create</button>
        </Link>
      </div>
      <div className="productTop">
          <div className="productTopLeft">
              <Chart data={productData} dataKey="Sales" title="Performance"/>
          </div>
          <div className="productTopRight">
              <div className="productInfoTop">
                  <img src="https://images.pexels.com/photos/4307884/pexels-photo-4307884.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1" alt="" className="productInfoImg" />
                  <span className="productName">Aman Singh</span>
              </div>
              <div className="productInfoBottom">
                  <div className="productInfoItem">
                      <span className="productInfoKey">Roll No:</span>
                      <span className="productInfoValue">1</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Class:</span>
                      <span className="productInfoValue">V - C</span>
                  </div>
                  <div className="productInfoItem">
                      <span className="productInfoKey">Subject</span>
                      <span className="productInfoValue">Science</span>
                  </div>
                  
              </div>
          </div>
      </div>
      <div className="productBottom">
          <form className="productForm">
              <div className="productFormLeft">
                  <label>Attendance</label>
                  <input type="text" disabled placeholder="23 January 2023" />
                  <label>Status</label>
                  <select name="inStock" id="idStock">
                      <option value="yes">Present</option>
                      <option value="no">Absent</option>
                  </select>
                  <br></br>
                  <button className="productButton">Update</button>
                 
              </div>
             
          </form>
      </div>
    </div>
  );
}
