import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Card extends React.Component{
    render(){
        return(
            <Animatable.View animation={this.props.move} duration={1500} style={styles.cardone}>
                <View style={styles.box1}>
                    <Text style={{fontSize:20,color:'#fff',letterSpacing:-0.9}}>{this.props.title}</Text>
                    <Text style={{fontSize:15,color:'#BEC4C9',letterSpacing:-0.5,paddingVertical:5}}>{this.props.subtitle}</Text>
                </View>
            </Animatable.View>
            
        );
    }
}
const styles = StyleSheet.create({
    cardone : {
        flex : 0.1,
        marginBottom : 45,
        display : 'flex',
        flexDirection : 'row',
        
    },
    box1 : {
        paddingHorizontal : 100,
        
        
    },

})