import React, { Component } from "react";
import { Header, Title, Button, Left, Right, Body, Icon } from "native-base";
export default class CustomizeHeader extends Component {
  render() {
    return (
      <Header style={{ backgroundColor: "#67c777" }}>
        <Left>
          <Button transparent>
            <Icon name="arrow-back" style={{ color: "white" }} />
          </Button>
        </Left>
        <Body>
          <Title style={{ color: "white" }}>GO</Title>
        </Body>
        <Right>
          <Button transparent>
            <Icon name="menu" style={{ color: "white" }} />
          </Button>
        </Right>
      </Header>
    );
  }
}
