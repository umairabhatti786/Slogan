import { Image, Text, TextInput, TouchableOpacity, View } from "react-native";
import { colors } from "../../utils/colors";
import CustomText from "../CustomText";
import { windowWidth } from "../../utils/Dimensions";
import DropDownPicker from "react-native-dropdown-picker";
import { images } from "../../assets/images";
import { verticalScale } from "react-native-size-matters";
import { font } from "../../utils/font";
type Props = {
  label?: string;
  placeholder?: string;
  error?: string;
  isPassword?: boolean;
  source?: any;
  keyboard?: any;
  phoneInputValue?: any;
  setPhoneInputValue?: any;
  phoneInputRef?: any;
  props?: any;
  value?: any;
  onChangeText?: any;
  onBlur?: any;
  isCenter?: boolean;
  isPhoneField?: boolean;
  onShowPassword?: any;
  editable?: boolean;
  complusory?: boolean;
  color?: string;
  onChangeCountry?: any;
  countryFlag?: string;
  maxLength?: number;
  onChangeFormattedText?: any;
  leftSource?: any;
  fontWeight?: any;
  marginTop?: any;
  multiline?: boolean;
  height?: any;
  dropdown?: boolean;
  items?: any;
  setItems?: any;
  dropdownValue?: any;
  setDropdownValue?: any;
  open?: any;
  setOpen?: any;
  zIndex?: any;
  onOpen?: any;
  onClose?: any;
  disabled?: boolean;
  labelSize?:any
};

const CustomTextInput = ({
  label,
  placeholder,
  keyboard,
  isPassword,
  source,
  props,
  isCenter,
  fontWeight,
  marginTop,
  multiline,
  height,
  dropdown,
  open,
  isPhoneField,
  phoneInputValue,
  setPhoneInputValue,
  phoneInputRef,
  value,
  onChangeText,
  onBlur,
  error,
  onShowPassword,
  editable,
  complusory,
  color,
  onChangeCountry,
  countryFlag,
  maxLength,
  onChangeFormattedText,
  leftSource,
  items,
  setItems,
  dropdownValue,
  setDropdownValue,
  setOpen,
  zIndex,
  onOpen,
  onClose,
  disabled,
  labelSize,
}: Props) => {
  const CustomArrowIcon = () => (
    <View>
      <Image source={images.arrowdown} />
    </View>
  );
  return (
    <View style={{ ...props, marginTop: marginTop || 15 }}>
      <View style={{ flexDirection: "row" }}>
        <CustomText
          fontWeight={"500"}
          size={labelSize|| 13}
          style={{ marginBottom: verticalScale(5) }}
          text={label}
          color={colors.white}
        />
      </View>

      <View
        style={{
          flexDirection: "row",
          justifyContent: "space-between",
          paddingHorizontal: 10,
         height: verticalScale(height || 49),

          alignItems:"center",
          borderRadius: 10,
          backgroundColor: colors.primary,
        }}
      >
        {leftSource && (
          <View
            style={{
              justifyContent: "center",
              alignItems: "center",
              marginRight: 10,
            }}
          >
            <Image
              source={leftSource}
              style={{
                width: 25,
                height: 25,
                tintColor: "#CCCCCC",
              }}
              resizeMode={"contain"}
            />
          </View>
        )}
        <View style={{ flex: 1 }}>
        
            <TextInput
              value={value}
              editable={editable}
              style={{
                fontSize:16,
                width: windowWidth / 1.2,
                alignItems:"center",
                // paddingTop:20,
                fontFamily:font.regular,
                fontWeight: fontWeight,
                color: color || colors.grey400,
                ...(isCenter && { alignSelf: "center" }),
              }}
              placeholder={placeholder}
              multiline={multiline}
              placeholderTextColor={colors.grey400}
              keyboardType={keyboard}
              maxLength={maxLength}
              secureTextEntry={isPassword || false}
              onChangeText={onChangeText}
              onBlur={onBlur}
              autoCapitalize="none"
            />
       
        </View>
        
      </View>
    </View>
  );
};
export default CustomTextInput;
