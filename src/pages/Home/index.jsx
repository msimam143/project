import { 
    StyleSheet, 
    Text, 
    View, 
    useColorScheme,
    ImageBackground,
    TouchableOpacity,
    Image, 
} from 'react-native'
import React from 'react'
import { AddIcon, BellIcon, HeaderBG, SendIcon } from '../../assets';
import { BOLD_FONT, DARK_BACKGROUND, DARK_COLOR, FONT_NORMAL, FONT_SEDANG, HORIZONTAL_MARGIN, LIGHT_COLOR, MEDIUM_FONT, REGULAR_FONT, SLATE_COLOR, windowHeight, windowWidth } 
from '../../utils/const';
import { mainmenus } from '../../data/mainmenu';

export default function HomeScreen() {
  const isDarkMode = useColorScheme() == 'dark';
  return (
    <ImageBackground source={HeaderBG} style={{ 
        width : windowWidth,
        height : windowHeight * 0.2,
     }}>
    <View 
      style={{ 
        flexDirection: 'row',
        justifyContent : 'space-between',
        padding : 20,

     }}>
        <Text style={{
            color : 'white',
            fontSize : FONT_NORMAL,
            fontWeight : '500',
            fontFamily : MEDIUM_FONT,
            }}>
            Hai, ImamJazz
        </Text>
        <BellIcon />
    </View>
    <View style={{ 
        backgroundColor : isDarkMode ? DARK_BACKGROUND : '#FFF',
        marginHorizontal : HORIZONTAL_MARGIN,
        padding : 15,
        borderRadius : 10,
        height : 70,
        shadowColor: "#000",
        shadowOffset: {
	      width: 0,
	      height: 2,
        },
        shadowOpacity: 0.23,
        shadowRadius: 2.62,
        elevation: 4,
        marginTop : windowHeight * 0.06,
        flexDirection : 'row',
        justifyContent : 'space-between',
        alignItems : 'center',
      }}>
      <Text style={{ 
        color : isDarkMode ? DARK_COLOR : LIGHT_COLOR,
        fontFamily : MEDIUM_FONT,
        fontSize : FONT_NORMAL,
       }}>Rp. 20.000
       </Text>
       <TouchableOpacity style={{ 
          flexDirection : 'row',
          columnGap : 15,
        }}>
          <TouchableOpacity style={{ 
            flexDirection :'column',
            alignItems : 'center',
            rowGap : 5,
           }}>
            <SendIcon />
            <Text style={{ 
              fontFamily : REGULAR_FONT,
              fontSize :  FONT_SEDANG,
              color : isDarkMode ? DARK_COLOR : LIGHT_COLOR,
             }}>
              Transfer</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ 
            flexDirection :'column',
            alignItems : 'center',
            rowGap : 5,
           }}>
            <AddIcon />
            <Text style={{ 
              fontFamily : REGULAR_FONT,
              fontSize :  FONT_SEDANG,
              color : isDarkMode ? DARK_COLOR : LIGHT_COLOR,
             }}>Topup</Text>
          </TouchableOpacity>
       </TouchableOpacity>
    </View>
    <View style={{ 
      marginHorizontal: HORIZONTAL_MARGIN,
     }}>
      <View style={{ 
        marginVertical : 35,
       }}>
        <Text style={{ 
          fontFamily : BOLD_FONT,
          fontSize : FONT_NORMAL,
         }}>
        Topup & Tagihan</Text>
        </View>
         <View style={{ 
          flexDirection : 'row',
          flexWrap : 'wrap',
          justifyContent : 'space-between',
          rowGap : 25,
          }}>
         {
          mainmenus.map((item) => {
            return (
              <TouchableOpacity key={item.label} style={{ 
                width : 100,
                // height : 100,
                backgroundColor : isDarkMode ? DARK_BACKGROUNDc : '#FFF',
                padding : 10,
                borderRadius : 10,
                borderColor : isDarkMode ? 1 : 0,
                borderColor : isDarkMode ? SLATE_COLOR : '',
                alignItems : 'center',
               }} >
                <Image source={item.Icon} />
                  <Text style={{ 
                    textAlign : 'center',
                    fontFamily : MEDIUM_FONT,
                    fontSize : FONT_SEDANG,
                    marginTop : 10,
                   }}>{item.label}</Text>
              </TouchableOpacity>
            );
          })
        }
         </View>
    </View>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({})