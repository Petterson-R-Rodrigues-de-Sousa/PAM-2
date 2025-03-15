import fetchCharacters from "@/services/api";
import { useRouter } from "expo-router";
import { coolDownAsync } from "expo-web-browser";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface Personagem {
    id: number;
    name: string;
    images: [string]
}

export default function Home() {
    const router = useRouter ();
    const [personagens, setPersonagens] = useState<Personagem[]>([])
    const [carregar, setCarrergar] = useState (true)

    useEffect(() => {
        async function carregarPersonagens() {
            const dados = await fetchCharacters();
            setPersonagens(dados.characters);
        }
    }, [])

    return (
        <View style ={style.container}>
            <Text>Página de detalhes</Text>
            <FlatList
                data= {personagens}
                keyExtractor={item => {item.id.toString()}}
                renderItem={({item}) => {
                <View style={style.card}>
                    <Image source= {{uri: item.images[0]}} style={style.image}/>
                    <Text style={style.name}>{item.name}</Text>
                </View>
                }}
            />
        </View>
    )
}

const style= StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: "#FFF",
        padding: 15
    },
    card: {
        backgroundColor: "#F4F4F4",
        padding: 10, 
        marginVertical: 8,
        borderRadius: 10,
        alignItems: "center"
    },
    image: {
        width: 100,
        height: 100,
        borderRadius: 50, 
        marginBottom: 5
    }, 
    name: {
        fontSize: 18, 
        fontWeight: "bold"
    }

})