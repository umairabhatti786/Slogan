import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  StyleSheet,
  TextInput,
} from "react-native";
import CustomModal from "../../../components/CustomModal";
import { windowHeight, windowWidth } from "../../../utils/Dimensions";
import { colors } from "../../../utils/colors";
import { scale, verticalScale } from "react-native-size-matters";
import { images } from "../../../assets/images";
import CustomText from "../../../components/CustomText";
import { font } from "../../../utils/font";
import CustomButton from "../../../components/CustomButton";

type Props = {
  text?: string;
  onPress?: any;
  width?: any;
  height?: number;
  size?: number;
  fontFam?: any;
  elevation?: number;
  borderRadius?: number;
  style?: any;
  bgColor?: any;
  textColor?: any;
  borderColor?: any;
  notRequiredShadow?: boolean;
  disable?: boolean;
  isLoading?: boolean;
  paddingHorizontal?: any;
  fontWeight?: any;
  borderWidth?: number;
  setShowError?: any;
  showError?: boolean;
  setModalVisible?: () => void;
  isModalVisible?: boolean;
};

const GoodServiceModal = ({
  text,
  onPress,
  width,
  height,
  size,
  fontFam,
  elevation,
  borderRadius,
  style,
  bgColor,
  textColor,
  borderColor,
  notRequiredShadow,
  disable,
  isLoading,
  paddingHorizontal,
  fontWeight,
  borderWidth,
  setShowError,
  showError,
  setModalVisible,
  isModalVisible,
}: Props) => {
  return (
    <CustomModal
      isModalVisible={isModalVisible}
      setModalVisible={setModalVisible}
      //   paddingTop={0}
    >
      <View
        style={{
          ...style,
          width: width || "100%",
          padding: scale(20),
          alignItems: "center",
          paddingHorizontal: scale(10),

          //   alignSelf: "center",
        }}
      >
        <View>
          <TouchableOpacity
            activeOpacity={0.6}
            onPress={() => setModalVisible(false)}
            style={{
              ...styles.btnContainer,

              backgroundColor: colors.secondary,
            }}
          >
            <Image
              style={{ width: 20, height: 20 }}
              resizeMode="contain"
              source={images.back}
            />
          </TouchableOpacity>
          <View
            style={{
              width: windowWidth / 1.2,
              height: windowHeight / 1.6,
              backgroundColor: colors.primary,
              alignSelf: "center",
              borderRadius: scale(10),
              overflow: "hidden",
              marginTop: verticalScale(40),
            }}
          >
            <View
              style={{
                width: "100%",
                height: verticalScale(40),
                backgroundColor: colors.secondary,
                alignItems: "center",
              }}
            >
              <CustomText
                text={"Select the position"}
                color={colors.black100}
                fontWeight="100"
                size={15}
              />
            </View>
            <TextInput
              placeholder="Place"
              placeholderTextColor={colors.black100}
              //   value={value}
              //   onChangeText={onChangeText}
              style={{
                fontSize: verticalScale(15),
                fontFamily: font.regular,
                color: colors.black100,

                paddingVertical: verticalScale(10),
                width: "93%",
                borderRadius: scale(10),
                alignSelf: "center",
                backgroundColor: "#EEF0F2",
                marginVertical: verticalScale(10),

                alignItems: "center",
                paddingHorizontal: scale(15),
              }}
            />
            <Image
              style={{ width: "93%", height: "72%", alignSelf: "center" }}
              source={images.map}
            />
          </View>

          <CustomButton
            text="Validate"
            width={190}
            borderRadius={12}
            onPress={() => setModalVisible(false)}
            style={{ alignSelf: "center", marginTop: verticalScale(20) }}
            textColor={colors.white}
          />
        </View>
      </View>
    </CustomModal>
  );
};
export default GoodServiceModal;

const styles = StyleSheet.create({
  btnContainer: {
    width: 45,
    height: 45,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
  },
});
