import React from 'react';

import { StyleSheet, Dimensions, ScrollView, Image, ImageBackground, TouchableHighlight, Text, View, Animated, } from 'react-native';
import { Block, theme } from 'galio-framework';

import SvgComponent from '../components/dashboardSVG';

import { Card } from '../components';
import articles from '../constants/articles';
import Images from "../constants/Images";
import { TouchableOpacity } from 'react-native-gesture-handler';
// import SvgComponent from '../components/dashboardSVG';
const { width } = Dimensions.get('screen');

const image = require("../assets/imgs/myPower24PhoneDashboard.png");



class Dashboard extends React.Component {
  renderArticles = () => {


    const orangeState = {
      OrangeballAnimationDown: new Animated.Value(200),
      // ballAnimationRight: new Animated.Value(200),
    };


    // animateOrangeBall = () => {
    //   Animated.timing(orangeState.OrangeballAnimationDown,
    //     {
    //       toValue: 340,
    //       duration: 2500,

    //       useNativeDriver: false

    //     }).start();

    // };




    animateOrangeBall = () => {
      Animated.sequence([

        Animated.timing(orangeState.OrangeballAnimationDown,
          {
            toValue: 340,
            duration: 2500,
            // delay: 100,
            useNativeDriver: false,
          }),
        Animated.timing(orangeState.OrangeballAnimationDown, {
          toValue: 200,
          duration: 10,
          useNativeDriver: false,
        }
        )
      ]).start(() => {
        // animateOrangeBall();
      });
    };

    // animateOrangeBall();





    animateOrangeBall();
    const orangeBallAnimation = {
      top: orangeState.OrangeballAnimationDown,
      // right: state.ballAnimationRight,

      // top: state.ballAnimation,
    }




    const state = {
      ballAnimationUp: new Animated.Value(180),
      ballAnimationRight: new Animated.Value(200),

    };

    animateBall = () => {
      Animated.sequence([

        Animated.timing(state.ballAnimationUp,
          {
            toValue: 350,
            duration: 2500,
            // delay: 1000,
            useNativeDriver: false,
          }),
        Animated.timing(state.ballAnimationUp, {
          toValue: 180,
          duration: 10,
          useNativeDriver: false,
        }
        )
      ]).start(() => {
        animateBall();
      });
    };

    animateBall();

    const greenballAnimation = {
      bottom: state.ballAnimationUp,
      // right: state.ballAnimationRight,

      // top: state.ballAnimation,
    }

    return (
      <ScrollView
        showsVerticalScrollIndicator={false}
        contentContainerStyle={styles.container}>

        <View style={styles.container}>
          <ImageBackground id="dot" source={image} resizeMode="cover" style={styles.image}>
            {/* <Text style={styles.text}>Inside</Text> */}
            {/* <Image styles={styles.image} source={Images.greenDot} /> */}
            {/* <TouchableOpacity onPress={() => this.animateBall()}> */}

            <Animated.View style={[styles.greenBall, greenballAnimation]} >
            </Animated.View>

            <Animated.View style={[styles.orangeBall, orangeBallAnimation]} >
            </Animated.View>

            <Animated.View style={styles.redBall} >
            </Animated.View>

            {/* </TouchableOpacity> */}
          </ImageBackground>
        </View>
        {/* <View styles={styles.imgPosistion}> */}

        {/* <Image styles={styles.logo} source={Images.DashboardSVG} /> */}
        {/* <Text style={styles.text}>Inside</Text> */}
        {/* </View> */}


      </ScrollView>

    )
  }


  render() {
    return (
      <Block flex center>
        {this.renderArticles()}
      </Block>
    );
  }
}



const styles = StyleSheet.create({

  // container: {
  //   // backgroundColor: theme.COLORS.BLACK,
  //   marginTop: Platform.OS === 'android' ? -HeaderHeight : 0,
  // },

  // imgPosistion: {

  //   justifyContent: "flex-end",
  //   flex: 1,
  // },

  container: {
    // width: 500,
    // height: 700,
    backgroundColor: "#121212",
  },
  Dashboard: {
    // width: width,
  },
  articles: {
    width: width - theme.SIZES.BASE * 2,
    paddingVertical: theme.SIZES.BASE,
  },
  // logo: {
  //   justifyContent: "center",
  //   flex: 1,
  // },
  text: {
    color: "white",
    fontSize: 42,
    lineHeight: 84,
    fontWeight: "bold",
    textAlign: "center",
    backgroundColor: "#000000c0"
  },
  image: {
    width: 380,
    height: 700,
    flex: 1,
    justifyContent: "center"
  },
  greenBall: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 10,
    height: 10,
    backgroundColor: '#7CFC00',
    justifyContent: 'center',
    alignItems: 'center',
    right: 187,
    flex: 1,
    position: 'absolute',
    // bottom:200,
  },
  orangeBall: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 10,
    height: 10,
    backgroundColor: '#FFA500',
    justifyContent: 'center',
    alignItems: 'center',
    right: 187,
    flex: 1,
    position: 'absolute',
    // bottom:200,
  },
  redBall: {
    borderRadius: Math.round(Dimensions.get('window').width + Dimensions.get('window').height) / 2,
    width: 10,
    height: 10,
    backgroundColor: '#FF0000',
    justifyContent: 'center',
    alignItems: 'center',
    left: 150,
    flex: 1,
    position: 'absolute',
    top: 340,


    // bottom:200,
  },

});

export default Dashboard;
