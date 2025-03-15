import { useRouter } from "expo-router";
import { Button, Text } from "react-native";
import { View } from "react-native-reanimated/lib/typescript/Animated";

export default function Home() {
    const router = useRouter();

    return (
        <View style= {{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text> Página Home</Text>
            <Button title="Ver Detalhes"
                    onPress={() => router.push('/details')}/>
        </View>
    );
}