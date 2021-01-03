import React from "react";
import SideNav, {
  Toggle,
  Nav,
  NavItem,
  NavIcon,
  NavText,
} from "@trendmicro/react-sidenav";
import "../App.css" 
import { GrTrigger, GrCircleQuestion, GrCatalog, GrChatOption } from "react-icons/gr"

export default function mynav(props) {
  return (
      <SideNav className="test" style={{backgroundColor:"rgb(167, 32, 37)"}}
        onSelect={(selected) => {
          // Add your code here
          props.onNavSelectionChanged(selected);
        }}
      >
        <SideNav.Toggle />
        <SideNav.Nav defaultSelected="home">
          <NavItem eventKey="manifest">
            <NavIcon>
              <GrCatalog size="40" />
            </NavIcon>
            <NavText style={{fontSize: 25}}>Manifest</NavText>
          </NavItem>

          <NavItem eventKey="dialogues">
            <NavIcon>
              <GrChatOption size="40" />
            </NavIcon>
            <NavText style={{fontSize: 25}}>Dialogues</NavText>
          </NavItem>

          <NavItem eventKey="triggers">
            <NavIcon>
              <GrTrigger size="40" />
            </NavIcon>
            <NavText style={{fontSize: 25}}>Triggers</NavText>
          </NavItem>

          <NavItem eventKey="conditions">
            <NavIcon>
              <GrCircleQuestion size="40" />
            </NavIcon>
            <NavText style={{fontSize: 25}}>Conditions</NavText>
          </NavItem>
        </SideNav.Nav>
      </SideNav>
  );
}
