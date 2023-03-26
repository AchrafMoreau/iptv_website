import { useEffect, useState, useRef} from 'react';
import CountUp ,{ useCountUp } from 'react-countup';

export default function Count(){

    const [loading, setLoading] = useState(false);

    const onStart = () => {
      setLoading(true);
    };
  
    const onEnd = () => {
      setLoading(false);
    };
    useCountUp({
        ref: 'counter1',
        end: 95,
        enableScrollSpy: true,
        scrollSpyOnce : true
    });
    useCountUp({
        ref: 'counter2',
        end: 500,
        enableScrollSpy: true,
        scrollSpyOnce : true
    });
    useCountUp({
        ref: 'counter3',
        end: 300,
        enableScrollSpy: true,
        scrollSpyOnce : true
    });
    return(
        <>
            <div className="container">
                <div className="row text-center countup">
                    <div className="col-md-4">
                        <div className="num ">
                            <span id="counter1">
                                <CountUp 
                                    start={0}
                                    duration={0}
                                    >
                                </CountUp>
                            </span>
                            
                            <span className='sign mx-2'>%</span>
                        </div>
                        <div className="plus">
                            <h3>Satisfied Client</h3>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="num">
                            <span className='sign mx-2'>+</span>
                            <span id="counter2">
                                <CountUp 
                                    start={0}
                                    duration={0}
                                    >
                                </CountUp>
                            </span>
                        </div>
                        <div className="plus">
                            <h3>Test Accounts</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="num">
                            <span className='sign mx-2'>+</span>
                            <span id="counter3">
                                <CountUp 
                                    start={0}
                                    end={95}
                                    duration={0}
                                    >
                                </CountUp>
                            </span>
                        </div>
                        <div className="plus">
                            <h3>Streams To Date</h3>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}