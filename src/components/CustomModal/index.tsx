import { BlurView, VibrancyView } from '@react-native-community/blur';
import React from 'react';
import { ScrollView, Text, useWindowDimensions, SafeAreaView, View, StyleSheet, TouchableOpacity, Pressable } from 'react-native';
import Modal from 'react-native-modal';
import { colors } from '../../utils/colors';

interface Props {
    isModalVisible?: boolean;
    setModalVisible?: React.Dispatch<React.SetStateAction<boolean>>;
    children?: React.ReactNode;
    backdropStyle?: any
    paddingTop?:any
    justifyContent?:any
}

const CustomModal: React.FC<Props> = ({ isModalVisible, setModalVisible, children, backdropStyle,justifyContent,paddingTop }) => {
    const windowWidth = useWindowDimensions().width;

    return (
        <Modal
            style={{...styles.modalContainer,
                justifyContent: justifyContent ||"flex-start",
                // paddingTop:paddingTop || "0%"
            }}
            animationIn='slideInUp'
            animationOut='slideOutDown'
            deviceWidth={windowWidth}
            isVisible={isModalVisible}
            onBackButtonPress={() => setModalVisible?.(false)}
            onBackdropPress={() => setModalVisible?.(false)}
            backdropColor={colors.black}
            customBackdrop={

               
                    <Pressable
                        style={{ height: "100%", width: "100%",backgroundColor:colors.black }}
                        onPress={
                            () =>
                                setModalVisible?.(false)
                        }
                    >
                    </Pressable>
            }
        >
            {children}
        </Modal >
    );
};

const styles = StyleSheet.create({
    modalContainer: {
        flex: 1,
        margin: 0,
      
    },
});

export default CustomModal;
