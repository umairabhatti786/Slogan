import {
  Text,
  TouchableOpacity,
  View,
  Image,
  StyleSheet,
  Platform,
} from "react-native";

import { useNavigation } from "@react-navigation/native";
import { scale, verticalScale } from "react-native-size-matters";
import CustomText from "../CustomText";
import { colors } from "../../utils/colors";
import { images } from "../../assets/images";
import { appStyles } from "../../utils/AppStyles";
type Props = {
  title?: string;
  onPressSetting?: any;
  onPressNotification?: any;
  isEdit?: any;
  txt?: any;
  txt1?: string;
  price?: string;
  description?: string;
  onPress?: () => void;
  imgHeight?: any;
  imgWidth?: any;
  img?: any;
  textSize?: number;
  isRight?:boolean
};

const CreationCard = ({
  title,
  onPressSetting,
  onPressNotification,
  isEdit,
  txt,
  txt1,
  price,
  description,
  imgWidth,
  imgHeight,
  img,
  textSize,
  isRight,
  onPress,
}: Props) => {
  const navigation = useNavigation();
  return (
    <TouchableOpacity
      activeOpacity={0.6}
      onPress={onPress}
      style={{
        flexDirection: "row",
      }}
    >
      <Image
        style={{
          width: scale(imgWidth || 70),
          height: verticalScale(imgHeight || 70),
          borderRadius: scale(5),
        }}
        source={img || images.laptop}
        //   resizeMode="contain"
      />
      <View
        style={{
          paddingLeft: scale(10),
          paddingTop: verticalScale(5),
          justifyContent: "space-between",
          height: verticalScale(imgHeight || 70),
        }}
      >
        <View style={{ height: "60%" }}>
          <CustomText
            color={colors.grey}
            size={textSize || 10}
            text={title || "Mas"}
          />
          <CustomText
            color={colors.black100}
            size={textSize || 12}
            text={txt || "Mas des Platanes"}
          />
          <CustomText
            color={colors.grey}
            size={textSize || 10}
            text={title || "Cancún"}
          />
        </View>

        <View style={{ ...appStyles.row, marginBottom: verticalScale(5) }}>
          <CustomText
            color={colors.green}
            //   size={15}
            size={textSize || 12}
            text={price || "A partir de 784€"}
          />
          <CustomText
            size={textSize || 12}
            color={colors.black100}
            //   size={15}
            text={"/ jour"}
          />
        </View>
        {/* <View style={appStyles.rowjustify}>
            <CustomText
              color={colors.black100}
              size={15}
              text={title || "New1"}
            />
  
            <View style={appStyles.row}>
              <Image
                style={{ width: scale(10), height: scale(10) }}
                source={images.star}
                resizeMode="contain"
              />
              <CustomText
                color={colors.black100}
                style={{ marginLeft: scale(5) }}
                // size={13}
  
                text={rating || "4.5"}
              />
            </View>
          </View> */}
        {/*   
          <CustomText
            color={colors.grey}
            size={11}
            style={{ marginTop: verticalScale(5) }}
            numberOfLines={2}
            text={
              description ||
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque sem odio, ut congue sapien placerat sed. Proin id turpis."
            }
          /> */}
      </View>
      {
        isRight&&(
          <View
          style={{
            width: scale(27),
            height: scale(27),
            backgroundColor:"#D9D9D9",
            alignSelf: "center",
            marginLeft: scale(30),
          }}
        ></View>

        )
      }

   
    </TouchableOpacity>
  );
};
export default CreationCard;

const styles = StyleSheet.create({
  // main:{  backgroundColor: colors.black300,
  //     alignItems: "center",
  //     paddingTop: Platform.OS=="ios"?"18%":"5%",
  //     flexDirection:"row",
  //     justifyContent:"space-between",
  //     paddingBottom: "5%",
  //     paddingHorizontal:15,
  // }
});
