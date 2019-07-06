import React, { Component } from "react";
import { StyleSheet, Text } from "react-native";
import {
  Container,
  Content,
  Footer,
  FooterTab,
  Button,
  Header,
  Title,
  Right,
  Left,
  Body,
  Icon
} from "native-base";
import { Col, Row, Grid } from "react-native-easy-grid";

import { testApi } from "../api/goTrainApi";

export default class Home extends Component {
  render() {
    testApi();
    return (
      <Container>
        <Header style={{ backgroundColor: "#67c777" }}>
          <Left />
          <Body>
            <Title>GO</Title>
          </Body>
          <Right>
            <Button transparent>
              <Icon name="menu" style={{ color: "white" }} />
            </Button>
          </Right>
        </Header>
        <Content padder>
          <Grid>
            <Row style={styles.container1}>
              <Text>Train</Text>
            </Row>
            <Row style={styles.container2}>
              <Text>Bus</Text>
            </Row>
          </Grid>
        </Content>
        <Footer>
          <FooterTab>
            <Button full>
              <Text>Footer</Text>
            </Button>
          </FooterTab>
        </Footer>
      </Container>
    );
  }
}

const styles = StyleSheet.create({
  container1: {
    justifyContent: "center",
    backgroundColor: "blue",
    height: 50
  },
  container2: {
    justifyContent: "center",
    backgroundColor: "green",
    height: 50
  },
  icon: {
    fontSize: 50
  }
});
