import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import { Container, Content, Footer, FooterTab, Button } from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";
import Header from "./Header";

export default class StationDetail extends Component {
  render() {
    return (
      <Container>
        <Header />
        <Content padder>
          <Text> Detail info goes here</Text>
        </Content>
        <Footer>
          <FooterTab>
            <Button>
              <Text>Apps</Text>
            </Button>
            <Button active>
              <Text>Navigate</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}
