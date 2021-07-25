import React from "react";
import { Container, Menu } from "semantic-ui-react";

export default function Navi() {
  return (
    <Container>
    <div>
      <Menu>
          <Menu.Item name="Anasayfa">
            Anasayfa
          </Menu.Item>

          <Menu.Item name="reviews">
            Reviews
          </Menu.Item>

          <Menu.Item name="upcomingEvents">
            Upcoming Events
          </Menu.Item>
        
      </Menu>
      
    </div>
    </Container>
  );
}
