import { ActivityIndicator, View } from "react-native"

export function Loading (){
    return (
        <View style={{flex: 1 , justifyContentfy: 'center', alignItens: 'center'}}>
            <ActivityIndicator color={'#7C3AED'} />
        </View>
    )
}