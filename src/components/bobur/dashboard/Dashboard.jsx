import { CgProfile } from 'react-icons/cg'
import { FaDollarSign, FaShoppingCart, FaUsers } from 'react-icons/fa'
import { IoIosArrowDown } from 'react-icons/io'
import { PiCaretUpThin } from 'react-icons/pi'
import orders from "../../../assets/Orders.png"
import "./Dashboard.css"

const Dashboard = () => {
  return (
    <div className='dashboard'>
      <h1>Dashboard</h1>
      <div className="prices">
        <div className="price">
           <div className="right">
             <b>$10.540</b>
            <p>Total Revenue</p>
            <div className="percet">
                  <h4>22.45%</h4>
              <div className="percet-icon">
                       <PiCaretUpThin />
                </div>
            </div>
           </div>
           <div className="left">
            <div className="icon">
                            <FaDollarSign />

            </div>
           </div>
        </div>



         <div className="price">
           <div className="right">
             <b>1,056</b>
            <p>Orders</p>
             <div className="percet">
                 <h4>15.34%</h4>
                <div className="percet-icon">
                       <PiCaretUpThin />
                </div>
             </div>
           </div>
           <div className="left">
            <div className="icon">
                           <FaShoppingCart />

            </div>
           </div>
        </div>


         <div className="price">
           <div className="right">
             <b>48</b>
            <p>Active Sessions</p>
        <div className="percet2">
                <h4>22.45%</h4>
                <div className="percet-icon">
                   <IoIosArrowDown />

                </div>
           </div>
           </div>
           <div className="left">
            <div className="icon">
                  <CgProfile />

            </div>
           </div>
        </div>


         <div className="price">
           <div className="right">
             <b>$10.540</b>
            <p>Total Revenue</p>
           <div className="percet2">
             <h4>22.45%</h4>
           <div className="percet-icon">
             <IoIosArrowDown />
           </div>


           </div>
           </div>
           <div className="left">
            <div className="icon">
                           <FaUsers />

            </div>
             </div>
        </div>
      </div>




      <div className="datess">
        <div className="dates_left">
            <div className="dates_header">
            <h2>Orders Over Time</h2>
            <p>Last 12 Hours</p>
        </div>
        <div className="dates-day">
            <div className="days">
                <div className="day">
               <div className="dayss">
                     <h3>645</h3>
                <p>Orders on May 22</p>
               </div>
            
                 <div className="dayss">
                     <h3>472</h3>
                   <p>Orders on May 21</p>
                 </div>

                </div>

                <div className="datess">
                   <div className="dates">
                    <div className="date">
                        <h6>a</h6>
                        <h4>May 21</h4>
                    </div>
                     <div className="date">
                        <h3>a</h3>
                        <h4>May 22</h4>
                    </div>
                   </div>

                </div>
            </div>
        </div>

          <div className="orders">
            <img src={orders} alt="" />
          </div>

        </div>
      </div>
    </div>
  )
}

export default Dashboard
