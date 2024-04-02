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
import { windowWidth } from "../../../utils/Dimensions";
import { images } from "../../../assets/images";
import { appStyles } from "../../../utils/AppStyles";
import CustomText from "../../../components/CustomText";
import { colors } from "../../../utils/colors";
import { Spacer } from "../../../components/Spacer";

type Props = {
  title?: string;
  onPressSetting?: any;
  onPressNotification?: any;
  isEdit?: any;
  txt?: any;
  txt1?: string;
  rating?: string;
  description?: string;
};

const NewsCard = ({
  title,
  onPressSetting,
  onPressNotification,
  isEdit,
  txt,
  txt1,
  rating,
  description,
}: Props) => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        width: windowWidth / 1.5,
        elevation: 5,
        shadowColor: "#000",
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity: 0.3,
        shadowRadius: 5,
        backgroundColor: colors.white,
        borderRadius: scale(10),
        overflow: "hidden",
        marginVertical: verticalScale(15),
      }}
    >
      <Image
        style={{ width: "100%", height: verticalScale(90) }}
        source={images.defBackground1}
        //   resizeMode="contain"
      />
      <View style={{ padding: scale(10) }}>
        <View style={appStyles.rowjustify}>
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
        </View>

        <CustomText
          color={colors.grey}
          size={11}
          style={{ marginTop: verticalScale(5) }}
          numberOfLines={2}
          text={
            description ||
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque scelerisque sem odio, ut congue sapien placerat sed. Proin id turpis."
          }
        />
      </View>
    </View>
  );
};
export default NewsCard;

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
