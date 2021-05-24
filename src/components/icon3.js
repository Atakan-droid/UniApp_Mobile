import React from 'react';
import {View,Image,StyleSheet,Text,TouchableOpacity} from 'react-native';
import * as Animatable from 'react-native-animatable';
export default class Card extends React.Component{
    render(){
        return(
            <Animatable.View animation={this.props.move} duration={1500} style={styles.cardone}>
                <TouchableOpacity style={styles.box1} onPress={this.props.screenchange}>
                    <View style={{width:200,height:200, borderRadius:10,backgroundColor:'rgba(300, 300, 300, 300);',height:'100%',flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Image style={{height :'80%',width:'40%'}} source={this.props.image}/>
                    </View>
                </TouchableOpacity>
            </Animatable.View>
            
        );
    }
}
const styles = StyleSheet.create({
    cardone : {
        flex : 1,
        marginBottom : 10,
        display : 'flex',
        flexDirection : 'row'
    },
    cardtwo : {
        flex : 1,
    },
    box1 : {
        paddingHorizontal : 110
    },

})