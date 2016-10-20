/**
* @Author: royce
* @Date:   2016-10-19T19:26:04-04:00
* @Email:  rharding@gotonight.com
* @Project: Go Tonight
* @Last modified by:   royce
* @Last modified time: 2016-10-19T20:12:51-04:00
* @License: © 2016 GoTonight LLC All Rights Reserved
*/

import React from 'react';
import { Modal, View } from 'react-native';
import { CardItem, Text, Col, Row } from 'native-base';

import { AppButton } from './AppButton';

const Confirm = ({ children, visible, onAccept, onDecline }) => {
  const { containerStyle, cardSectionStyle, textStyle, buttonsStyle } = styles;

  return (
    <Modal
      visible={visible}
      transparent
      annimationType="slide"
      onRequestClose={() => {}}

    >
      <View style={containerStyle}>
        <CardItem style={cardSectionStyle}>
          <Text style={textStyle}>
            {children}
          </Text>
        </CardItem>
        <CardItem style={buttonsStyle}>
            <Row>
              <Col size={6}>
                <AppButton onPress={onAccept}>Yes</AppButton>
              </Col>
              <Col size={1}><Text /></Col>
              <Col size={6}>
                <AppButton onPress={onDecline}>No</AppButton>
              </Col>
            </Row>
        </CardItem>
      </View>

    </Modal>
  );
};

const styles = {
  cardSectionStyle: {
    backgroundColor: '#FFF',
    justifyContent: 'center'
  },
  buttonsStyle: {
    backgroundColor: '#FFF'
  },
  textStyle: {
    flex: 1,
    fontSize: 18,
    textAlign: 'center',
    lineHeight: 40
  },
  containerStyle: {
    backgroundColor: 'rgba(0, 0, 0, 0.75)',  // 3/4 opacity
    position: 'relative',
    flex: 1,
    justifyContent: 'center'
  }
};

export { Confirm };
