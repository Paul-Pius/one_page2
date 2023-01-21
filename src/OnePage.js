import React from "react";
import designlogo from "./img/designlogo.jpeg";
import woman from "./img/woman.png";
import loc from "./img/loc.png";
import human2 from "./img/human2.png";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faRoad } from '@fortawesome/free-solid-svg-icons';
import { faWater } from '@fortawesome/free-solid-svg-icons';
import { faLock } from '@fortawesome/free-solid-svg-icons';
import { faLightbulb} from '@fortawesome/free-solid-svg-icons';
import './App.css';

const OnePage = () => {

  return (
        <div className="backgroundcontainer">
                <div className="circle">
            
                </div>

                <div className="redcirclediv">
                    <div className="six">
                    </div>
                </div>
                    <div className='redcirc'>
                        <h1 className="sixx">6</h1>
                        <p className='buy'>Buy</p>
                        <p className='buy'>Plots</p>
                        <p className='buy'>& Get</p>
                        <p className='buy'>1 Free</p>
                    </div>

                <div className="cyldiv">
                    
                </div>

                <div className="greenrecdiv">
                    <div className="initial">
                        <span className="init">Initial Deposit</span>
                        <h1 className="deposit">#400,000</h1>
                    </div>

                    <div className="price2">
                        <span className="priceis">PRICE IS:</span> <br />
                        <span className="sixfifty">#650,000 | 300</span> <br />
                        <span className="sqm">sqm</span>
                        <span>#1,000,000 | 500</span>
                        <span className="sqm2">sqm</span>
                    </div>

                    <div className="blackdiv">
                        <div className="blkdetails">
                            <span className="ava">Available In:</span> <br />

                            <h2 className="three">300</h2>
                            <h2 className="and">&</h2>

                            <h2 className="five">500</h2>
                        </div>
                        <p className="sqm3">sqm</p>

                        <p className="sqm4">sqm</p>
                    </div>
                </div>

                <div className="womandiv">
                    <img className="womanimg" src={woman} alt="woman"></img>
                </div>

                <div className="shape1div">
                    <div className="tf">

                        <div className="feature">
                            <span>FEATURES</span>
                        </div>
                    </div>

                    <div className='freee'>
                        <p className="ttt">TITLE:</p>
                        <h2 className="fff">FREE HOLD</h2>
                    </div>

                    <div className="list">
                        <FontAwesomeIcon icon={faLightbulb} />
                            <span>Electricity</span> <br />
                            <span>Recreation</span> <br />
                        <FontAwesomeIcon icon={faRoad} />
                            <span>Good Road</span> <br />
                            <span>Drainage</span> <br />
                        <FontAwesomeIcon icon={faLock} />
                            <span>Security</span> <br />
                        <FontAwesomeIcon icon={faWater} />
                            <span>Portable Water</span> <br />
                            <span>Landscaping</span> <br />
                            <span>Perimeter Fencing</span> <br />
                        <FontAwesomeIcon icon={faLightbulb} />
                            <span>Street Light</span>
                        </div>
                        <div className='darkblue'></div>
                        <div className='hillshape2'></div>
                        <div className='hillshape'></div>
                        <div className='hillshape3'></div>
                        <div className='hillshape4'></div>
                        <div className='hillshape5'></div>
                    </div>

                <div className="logodiv">
                    <div className="vienna">
                        <h4>VIENNA</h4>
                    </div>
                    <img className="logo" src={designlogo} alt="designlogo"></img>
                </div>

                <div className="gardensdiv">
                    <h1 className="garden">
                        GARDENS
                    </h1>
                    <h2 className="propadi">
                        Propadi
                    </h2>
                </div>

                <div className="epe">
                    <p className="mojoda">
                        MOJODA, EPE
                    </p>
                    <p className="assistant">
                        ...your property assistant
                    </p>
                </div>
                
                    <div className="linediv">
                    </div>
                        <p className="planavailable">6 Months Plan Available</p>
                        <p className="landm">L A N D M A R K</p>
                        <p className="sitei">SITE INSPECTION TAKE PLACE ON</p>
                        <p className="ws">WEDNESDAY & SATURDAY</p>
                        <p className="herbert">315 HERBERT MACAULEY WAY SABO</p>
                        <p className="yabal">YABA LAGOS</p>
                        <p className="yabatech">YABATECH</p> <br />
                        <p className="augustine">AUGUSTINE UNIVERSITY</p>
                        <p className="acctdetails">ACCOUNT DETAILS</p>
                        <p className="number">0465073660</p>
                        <p className="gtbank">Propadi Limited | GTBank</p>

                    <div className="square2div">
                        <img className="human2" src={human2} alt="human2"></img>
                    </div>

                    <div className="square2div2"></div>
                    <div className="square2div3"></div>
                    <div className="square2div4"></div>

                    <div className="square1div">
                        <div className="locdiv">
                            <img className="locimg" src={loc} alt="loc"></img>
                        </div>
                    </div>
                    <div className="square1div2"></div>
                    <div className="square1div3"></div>
                    <div className="square1div32"></div>
                    <div className="square1div4"></div>
                    <div className="square1div5"></div>
                    <div className="square1div6"></div>
                    <div className="square1div7"></div>

        </div>
  )
}

export default OnePage;