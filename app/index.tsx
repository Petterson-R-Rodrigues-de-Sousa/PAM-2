import { useRouter } from "expo-router";
import { useEffect, useState } from "react";
import { Button, Text, View } from "react-native";

export default function HomeScreen() {
    const router = useRouter();
    const [count, setCount] = useState (0);

    useEffect(() => {
        console.log("Componente Montado!");
    }, [])

    return (
        <View style={{flex:1, justifyContent:"center", alignItems:"center"}}>
            <Text>Bem-vindo ao meu APP</Text>
            <Text>Contador: {count}</Text>
            <Button title="Aumentar" onPress={() => setCount(count + 1)}/>
            <Button title="Ir para Home" onPress={() => router.push('/home')}/>
            </View>
    )
}