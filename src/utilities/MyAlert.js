import {Alert} from 'react-native';

export function MyAlert(message){
    Alert.alert(
        "Hata",
        message,
        [
          { text: "TAMAM"}
        ]
      )
}

