import React from 'react';
import {View,Text,TouchableOpacity,TouchableWithoutFeedback,StyleSheet,ImageBackground, ScrollView} from 'react-native';
import Card from '../components/card2';
import Icon from '../components/icon3';
import Details from '../components/detail';

export  class univercityDetailScreen extends  React.Component{
    state = {
        color : '#136DF3',
        activestate : 'rgba(255, 255, 255, 0.291821)'
    }
    change = () => {
        return(
            this.props.navigation.navigate('Mission')
        );
    }
   
    render(){

        {console.log(this.props.route.params.uniId)}
        return(

            <View style={styles.container}>
                <View style={styles.containerone}>
                    <View style={styles.icon}></View>
                    <Icon
                        move="fadeInUp" 
                        image={require('../images/sau.png')} 

                        screenchange = {()=>this.change()}
                        />
                    <Details
                    move="fadeInUp" 
                    title="Sakarya Üniversitesi" 
                    subtitle="Fatih Savaşan"
                    />
                </View>
                <View style={styles.containertwo}>
                    
                <ScrollView>                    
                    <View style={styles.progress}>
                        <Text style={styles.textone}>Duyuru</Text>
                    </View>
                    <View style={styles.cards}>
                    <Card 
                        move="fadeInUp" 
                        title="2020-2021 Bahar dönemi 22 Şubat 2021 tarihinde başlayacaktır. Öğrencilerimize yeni dönemde başarılar dileriz. 2020-2021 Bahar dönemi 22 Şubat 2021 tarihinde başlayacaktır. Öğrencilerimize yeni dönemde başarılar dileriz." 
                    />                   
                    </View>
                    <View>
                    </View>
                    </ScrollView>
                </View>
                
            </View>
        );
    }
}
const styles = StyleSheet.create({
    container : {
        flex : 1.5,
        display : 'flex',
        backgroundColor : '#303841'
    },
    containerone : {
        flex : 4,
        display : 'flex'
    },
    containertwo : {
        flex : 6,
        backgroundColor : '#fff',
        borderTopRightRadius : 40,
        borderTopLeftRadius : 40,
    },
    boxone : {
        flex : 5,
    },
    boxtwo : {
        flex : 7,
        marginHorizontal : 35
    },
    boxthree : {
        flex : 2.5,
    },
    boxfour : {
        flex : 0.5,
        color : '#fff',
        flexDirection : 'row'
    },
    name : {
        fontSize : 30,
        color : '#fff',
        fontWeight : 'bold',
        letterSpacing : -0.5,
    },
    subtitle : {
        fontSize : 15,
        color : '#fff'
    },
    line : {
        width : 100,
        height : 4,
        backgroundColor : '#2D2D2D',
        borderRadius : 2,
        marginVertical : 25,
        left : 150
    },
    progress : {
        left : 50
    },
    textone : {
        fontSize : 25,
        color : '#2D2D2D',
        letterSpacing : -0.5,
        fontWeight : 'bold',
        paddingBottom:10,
        paddingTop:30
        
    },
    cards : {
        flex : 1,
        display : 'flex',
        marginTop : 10,
        marginHorizontal : 30
    },
    icon : {
        flex : 0.5,
        display : 'flex',
        marginHorizontal : 30
    },
    
})
export default univercityDetailScreen