import { Collapse } from 'antd'
const { Panel } = Collapse;


export default function FAQ() {
    return (
        <div className="h-[calc(100vh-80px)] flex items-center justify-center">
            <div className="w-[600px]">
                <Collapse accordion>
                    <Panel header="What is VIN?" key="1" className='font-semibold text-base'>
                        <p>VIN (Vehicle Identification Number) is a number compilation of 17 characters that identifies a particular vehicle. It is assigned by the car manufacturer.</p>
                        <p>Knowing VIN, you can get vehicle details and ownership history, odometer records, insurance cases, and much more. Enter your VIN now and learn about possible odometer rollout, collisions and accidents, and other problems of the car which could be hidden by the seller.</p>
                    </Panel>
                    <Panel header="Where do I find my VIN?" key="2" className='font-semibold text-base'>
                        <p>There are several places where the VIN may be located physically on your car. It can often be found in the lower-left corner of the dashboard, in front of the steering wheel. You can read the number by looking through the windshield on the driver's side of the vehicle. The VIN may also appear in a number of other locations: <strong>driver’s door</strong> or front of the engine block.</p>
                        <p>The VIN may also be found on your vehicle's insurance card or vehicle title (DMV) records. If you are having issues finding your VIN number, you can also contact your car dealership or the manufacturer of your vehicle.</p>
                    </Panel>
                    <Panel header="What is SETVIN vehicle history report?" key="3" className='font-semibold text-base'>
                        <p>If you are in the market for a used car or planning to buy one for personal use, it’s important to arm yourself with the best information available to make the right decision. <strong>SETVIN is here to help.</strong></p>
                        <p>SETVIN&nbsp; aggregates information from many online sources, including official data NMVTIS (National Motor Vehicle Title Information System) and saves your time and money by providing an instant snapshot of vehicle details, history, and all linked records available online.</p>
                    </Panel>
                    <Panel header="How is SETVIN different from other VIN reports?" key="4" className='font-semibold text-base'>
                        <p>SETVIN searches National Motor Vehicle Title Information System (NMVTIS) database and online resources for title, odometer, accident records and presents it in easy to read format. It also provides information on whether the car was listed or sold at salvage auctions such as Copart or IAAI.</p>
                        <p>Investing in a car is a serious step. Do not overlook the vehicle history report, order SETVIN right now. Please check the sample report for more information.</p>
                    </Panel>
                </Collapse>
            </div>
        </div>
    )
}
