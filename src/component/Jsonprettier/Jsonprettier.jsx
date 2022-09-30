// import  "./Jsonprettier.css";
import "react-json-pretty/themes/monikai.css";
import React from "react";
import JSONPretty from "react-json-pretty";
export default class Jsonprettier extends React.PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      
    };
  }
  render() {
    return (
      <div className="root">
        {/* <pre className="pre">{JSON.stringify(this.props.data, null, 2)}</pre> */}
        <JSONPretty
          data={this.props.data}
          space="4"/>
      </div>
    );
  }
}

//  Delhi International Airport Limited (DIAL) announced an ambitious expansion plan for the Indira Gandhi International Airport . It was to have new taxiways , a fourth runway , an elevated cross taxiway and an expanded Terminal 1 among many others. Two years hence, DIAL says work has started and the job will be finished by June 2022. The plan that focuses heavily on improving Terminal 1 will see the integration of 1C and 1D into one big terminal handling only domestic flights and 4 crore passengers per annum from the existing 2 crore. Terminal 3 then will only cater to international flights. DIAL says they started work a few months ago and so far, the arrival hall and utility building of T1 have been razed. I P Rao, deputy managing director, GMR group, said, Keeping in view the unprecedented growth in the number of people travelling by air over the last few years, expansion of Delhi airport has become the need of the hour to make it future ready with enhanced passenger experience. The mega expansion will not only help existing airlines to enhance their services but also create adequate room for new airlines to initiate their services. He added, Our vision is to be at the forefront of creating world-class facilities and value-added amenities for our customers and making it one of the best airports across the world. As we rigorously build for the next three years, our focus on efficient operations and superior customer service would remain unwavering. Construction will be handled by Larsen and Toubro. After the work gets over, IGI airport will be the countrys first airport to have four runways and dual elevated eastern cross taxiways Going by the plan, the entire T1 apron will be demolished and a new, expanded apron with 82 stands (against 55 now) built, equipped with latest upgrades like visual docking guidance system, fuel hydrant system, ground power units and preconditioned air. Some features of T3 that will be replicated. There will be additions like facial recognition for easy passenger entry, automated tray retrieval system, individual carrier system, common usage self service, and self baggage drop kiosks among others. According to officials, these would help avoid long queues and ease the flow of passengers. Apart from all these, construction will also happen at T3. A seventh check-in island is being added there with associated baggage handling systems and two arrival carousels. 
