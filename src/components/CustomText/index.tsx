import { Text } from 'react-native'
import { colors } from '../../utils/colors'
import { verticalScale } from 'react-native-size-matters'
import { font } from '../../utils/font'

type Props = {
    color?: string,
    size?: number,
    fontFam?: string,
    text?: any,
    style?: any,
    lineHeight?: number
    numberOfLines?:number
    fontWeight?:string
    textDecorationLine?:string
    label?:string
}

const CustomText = ({ color, size, fontFam, text, style, lineHeight,numberOfLines,fontWeight,textDecorationLine,label }: Props) => {
    return (
        <Text
        numberOfLines={numberOfLines}
            style={[
                {
                    color: color || colors.black,
                    fontSize: size|| 12,
                    fontWeight: fontWeight ||"500",
                    fontFamily: fontFam || font.regular,
                    textDecorationLine:textDecorationLine,
                
                    
                    ...(lineHeight && { lineHeight: lineHeight }),
                }, style
            ]}
        >
            {text}{label}
        </Text >
    )
}
export default CustomText
