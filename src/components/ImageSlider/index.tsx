import {
  FlatList,
  Image,
  ImageBackground,
  SafeAreaView,
  ScrollView,
  Alert,
  StyleSheet,
  Text,
  TouchableOpacity,
  View,
  RefreshControl,
} from "react-native";
import React, {
  useCallback,
  useMemo,
  useRef,
  useState,
  useEffect,
} from "react";
import { windowHeight, windowWidth } from "../../utils/Dimensions";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";

const ImageSlider = ({ noShowUplaod, isEditGood,validate }: any) => {
  let sliderData = [];

  //   const images = item.product_images.split(",");

  const navigation = useNavigation();
  const [index, setIndex] = useState(0);
  const slider = useRef(null);

  const [activeIndex, setActiveIndex] = useState(0);
  let carouselDots = [1, 2, 3, 4];

  console.log("activeIndex", activeIndex);
  const slideChanged = (e) => {
    const scrollPosition = Math.round(e.nativeEvent.contentOffset.x);
    const index = Math.floor((scrollPosition + windowWidth / 2) / windowWidth); // Round to the nearest index
    setActiveIndex(index);
  };

  const renderer = ({ item, index }) => {
    return (
      <View style={{ paddingBottom: verticalScale(30) }}>
        <Image
          style={{
            width: windowWidth,
            // alignSelf:"center",
            height: verticalScale(280),
            backgroundColor: "#f1f1f1",
          }}
          resizeMode="cover"
          source={images.laptopbackground}
        />
        <View
          style={{
            ...appStyles.rowjustify,
            position: "absolute",
            top: 10,
            paddingHorizontal: 20,
            width: "100%",
          }}
        >
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => navigation.goBack()}
          >
            {/* <Image
                style={{width: 22, height: 22, tintColor: colors.black4}}
                resizeMode="contain"
                source={images}
              /> */}
          </TouchableOpacity>
          {item.item && item.item.product_live === 1 && (
            <View
              style={{
                paddingVertical: 2,
                paddingHorizontal: 10,
                alignItems: "center",
                justifyContent: "center",
                backgroundColor: colors.primary,
                borderRadius: 30,
                //   width: sizeHelper.calWp(160),
              }}
            >
              <CustomText
                text={"Jetzt lives"}
                color={colors.black}
                size={14}
                fontWeight={"600"}
              />
            </View>
          )}
        </View>
        {isEditGood && (
          <View
            style={styles.goodConTainer}
          >
            <TouchableOpacity
              // onPress={handleHeartPress}
              style={{
                ...styles.btnContainer,

                backgroundColor: colors.secondary,
                left: scale(20),
              }}
            >
              <Image
                style={{ width: 22, height: 22 }}
                resizeMode="contain"
                source={images.edit}
              />
            </TouchableOpacity>
            {
              validate&&(
                <TouchableOpacity
                // onPress={handleHeartPress}
                style={{
                  ...styles.btnContainer,
  
                  backgroundColor: colors.green,
                  right: scale(20),
                }}
              >
                <Image
                  style={{ width: 22, height: 22 }}
                  resizeMode="contain"
                  source={images.edit}
                />
              </TouchableOpacity>

              )
            }
         
          </View>
        )}
        {!noShowUplaod && (
          <TouchableOpacity
            // onPress={handleHeartPress}
            style={{
              ...styles.btnContainer,

              backgroundColor: colors.secondary,
              position: "absolute",
              bottom: 10,
              right: scale(40),
            }}
          >
            <Image
              style={{ width: 22, height: 22 }}
              resizeMode="contain"
              source={images.upload}
            />
          </TouchableOpacity>
        )}

        <TouchableOpacity
          onPress={() => navigation.goBack()}
          style={{
            ...styles.btnContainer,
            width: 40,
            height: 40,

            position: "absolute",
            top: 10,
            left: scale(20),
            overflow: "hidden",
          }}
        >
          <View
            style={{
              width: "100%",
              height: "100%",
              backgroundColor: colors.white,
              position: "absolute",
              opacity: 0.1,
            }}
          ></View>
          <Image
            style={{ width: 20, height: 20 }}
            resizeMode="contain"
            source={images.back}
          />
        </TouchableOpacity>
      </View>
    );
  };

  const renderDotIndicators = () => {
    return carouselDots?.map((a, index) => {
      return (
        <View
          key={index}
          style={{
            width: activeIndex == index ? 25 : 10,
            height: 3,
            backgroundColor: colors.white,
            borderRadius: 30,
            marginHorizontal: 5,
          }}
        />
      );
    });
  };

  return (
    <>
      <View>
        <FlatList
          data={[1, 2, 3, 4]}
          renderItem={renderer}
          horizontal={true}
          pagingEnabled={true}
          ref={slider}
          bounces={false}
          windowSize={3}
          // contentContainerStyle={{marginLeft:10}}
          initialNumToRender={5}
          maxToRenderPerBatch={5}
          showsHorizontalScrollIndicator={false}
          onScroll={slideChanged}
          // ItemSeparatorComponent={() => <View style={{width: 10}} />}
          getItemLayout={(_, index) => ({
            length: windowWidth,
            offset: windowWidth * index,
            index,
          })}
        />

        <View
          style={{
            flexDirection: "row",
            position: "absolute",
            bottom: verticalScale(40),
            alignSelf: "center",
            alignItems: "center",
          }}
        >
          {renderDotIndicators()}
        </View>
      </View>
    </>
  );
};

export default ImageSlider;

const styles = StyleSheet.create({
  SwiperActiveDot: {
    //   backgroundColor: colors.primary,
    height: 7,
    width: 30,
  },
  btnContainer: {
    width: 50,
    height: 50,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },

  SwiperDotStyle: {
    //   backgroundColor: colors.grey7,
  },
  button: {
    // marginBottom: 20,
    marginTop: 10,
    alignSelf: "center",
  },
  container: {
    //   backgroundColor: colors.white,
    flex: 1,
  },
  contentContainer: {
    alignItems: "center",
    borderRadius: 10,
  },
  desc: {
    marginTop: 7,
    textAlign: "center",
  },
  heading: {
    marginTop: "5%",
    textAlign: "center",
  },
  image: {
    height: "100%",
    resizeMode: "contain",
    width: "100%",
  },
  imageView: {
    height: windowHeight / 1.5,
    width: windowWidth / 1, // backgroundColor: colors.primary,
    marginTop: -10,
  },
  goodConTainer:{
    position: "absolute",
    bottom: verticalScale(40),
    height: 50,
    width: "100%",
    alignItems: "center",
    justifyContent: "space-between",
    flexDirection: "row",
  }
});
