import {Alert} from 'react-native';

export function MyAlert(message){
    Alert.alert(
        "Bilgi Mesajı",
        message,
        [
          { text: "TAMAM"}
        ]
      )
}

