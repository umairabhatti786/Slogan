import {
  Pressable,
  Text,
  TouchableOpacity,
  View,
  ActivityIndicator,
  Image,
  TextInput,
} from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { font } from "../../utils/font";
import { appStyles } from "../../utils/AppStyles";
import { images } from "../../assets/images";
import { scale, verticalScale } from "react-native-size-matters";
import { useNavigation } from "@react-navigation/native";

const CustomSearch = ({
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
  onChangeText,
  value,
  backgroundColor,
}: any) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        ...appStyles.rowjustify,
        backgroundColor: backgroundColor || colors.white,
        height: verticalScale(45),
        borderRadius: scale(8),
        overflow:"hidden"

      }}
    >
      {/* <View
        style={{
          width: "87%",
          height: verticalScale(40),
          borderWidth: 1,
          borderRadius: scale(8),
          borderColor: colors.grey300,
          flexDirection: "row",
          alignItems: "center",
          paddingHorizontal: 10,
          justifyContent: "space-between",
        }}
      > */}
      <TextInput
        placeholder="Que recherchez-vous ?"
        placeholderTextColor={colors.black100}
        value={value}
        onChangeText={onChangeText}
        style={{
          fontSize: verticalScale(13),
          fontFamily: font.regular,
          fontWeight: "400",
          color: colors.black100,
          // marginHorizontal: 10,
          paddingVertical: verticalScale(6),
          width: "85%",
          alignItems: "center",
          // textAlign:"center"
          paddingHorizontal: scale(15),
        }}
      />
      <TouchableOpacity
        activeOpacity={0.6}
        style={{
          width: scale(43),
          height: "100%",
          alignItems: "center",
          justifyContent: "center",
          backgroundColor: colors.secondary,
          // marginRight: scale(3),
        }}
        onPress={() => navigation.goBack()}
      >
        <Image
          style={{ width: scale(18), height: scale(18) }}
          source={images.filter}
          resizeMode="contain"
        />
      </TouchableOpacity>
      {/* </View> */}
    </View>
  );
};
export default CustomSearch;
