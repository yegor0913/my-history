import React from 'react';
import { View, Text, ImageBackground, TouchableOpacity } from 'react-native';
import { Item, Label, Form, Input } from 'native-base';

import Style from './style';

export default class SplashScreen extends React.Component {
  render() {
    return (
      <View style={Style.container} >
        <ImageBackground source={require("../../assets/images/mask_group_2.png")} style={Style.backgroundImage} />
        <View style={Style.textArea}>
          <Text style={Style.dopa} >Dopa</Text>
          <Text style={Style.memes_} >memes.</Text>
        </View>
        <View style={Style.retangleArea}></View>
        <View style={Style.sign_in_view}>
          <Text style={Style.sign_in}>Sign In</Text>
        </View>
        <View style={Style.text_input_view}>
          <Form>
            <Item style={Style.text_input} >
              <Input placeholder="Email or Phone" placeholderTextColor='white' style={{ color: '#ffffff' }} />
            </Item>
            <Item style={Style.text_input} >
              <Input placeholder="Password" placeholderTextColor='white' style={{ color: '#ffffff' }} />
            </Item>
          </Form>
        </View>
        <View style={Style.forgot_password_view}>
          <TouchableOpacity>
            <Text style={Style.forgot_password}>Forgot Password?</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.sign_in_button_view}>
          <TouchableOpacity style={Style.sign_in_button}>
            <Text style={Style.sign_in_button_text}>Sign In</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.or_text_view}>
          <Text style={Style.or_text}>OR</Text>
        </View>
        <View style={Style.social_button_view}>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>f</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>G</Text>
          </TouchableOpacity>
          <TouchableOpacity style={Style.social_button}>
            <Text style={Style.social_button_text}>in</Text>
          </TouchableOpacity>
        </View>
        <View style={Style.sign_up_view}>
          <Text style={Style.or_text}>Don't have an account?</Text>
          <TouchableOpacity>
            <Text style={[Style.or_text, { color: 'red' }]}>Sign Up</Text>
          </TouchableOpacity>
        </View>
      </View >
    )
  }
}