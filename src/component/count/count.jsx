import CountUp from 'react-countup';


export default function Count(){
    return(
        <>
            <div className="container">
                <div className="row text-center countup">
                    <div className="col-md-4">
                        <div className="num">
                            <CountUp start={0} end={95} duration={2} delay={0} enableScrollSpy={true} scrollSpyOnce={true}/>
                            <span className='sign mx-2'>%</span>
                        </div>
                        <div className="plus">
                            <h3>Satisfied Client</h3>
                        </div>
                    </div>
                    <div className="col-md-4 ">
                        <div className="num">
                            <span className='sign mx-2'>+</span>
                            <CountUp start={0} end={6943} duration={2} delay={0} scrollSpyOnce={true} enableScrollSpy={true}/>
                        </div>
                        <div className="plus">
                            <h3>Test Accounts</h3>
                        </div>
                    </div>
                    <div className="col-md-4">
                        <div className="num">
                            <span className='sign mx-2'>+</span>
                            <CountUp start={0} end={4677} duration={2} delay={0} scrollSpyOnce={true} enableScrollSpy={true}/>
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