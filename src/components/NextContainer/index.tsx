import { Text, TouchableOpacity, View, Image, StyleSheet, Platform } from "react-native";
import { colors } from "../../utils/colors";
import { appStyles } from "../../utils/AppStyles";
import CustomText from "../CustomText";
import { Spacer } from "../Spacer";
import { images } from "../../assets/images";
import CustomButton from "../CustomButton";
import { useNavigation } from "@react-navigation/native";
import { scale } from "react-native-size-matters";

type Props = {
  title?: string;
  onPressSetting?: any;
  onPressNotification?: any;
  isEdit?:any
  txt?:any
  txt1?:string
};

const NextContainer = ({ title, onPressSetting, onPressNotification,isEdit,txt,txt1 }: Props) => {
  const navigation=useNavigation()
  return (
    <View style={appStyles.rowjustify}>
        
       
       
      <CustomText color={colors.black100} size={16} 
   
        text={ txt|| "News"} />

        <View style={appStyles.row}>
        <CustomText color={colors.secondary} size={15} 
   
   text={ txt1|| "Voir tous"} />
   <Spacer width={scale(10)}/>
   <TouchableOpacity onPress={onPressSetting}>
        <Image
          style={{ width: 20, height: 20 }}
          source={images.nextcircle}
          resizeMode="contain"
        />
      </TouchableOpacity>

        </View>



    

     

     
    </View>
  );
};
export default NextContainer;

const styles=StyleSheet.create({
    // main:{  backgroundColor: colors.black300,
    //     alignItems: "center",
    //     paddingTop: Platform.OS=="ios"?"18%":"5%",
    //     flexDirection:"row",
    //     justifyContent:"space-between",
    //     paddingBottom: "5%",
    //     paddingHorizontal:15,
    // }

})
