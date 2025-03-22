import fetchCharacters from "@/services/api";
import { useRouter } from "expo-router";
import { coolDownAsync } from "expo-web-browser";
import { useEffect, useState } from "react";
import { FlatList, Image, StyleSheet, Text, View } from "react-native";

interface characters {
    id: number;
    name: string;
    images: [string];
    
    family: []
        father: number},
}

export default function Home() {
    const router = useRouter ();
    const [characters, setCharacters] = useState<characters[]>([])
    const [carregar, setCarrergar] = useState (true)

    useEffect(() => {
        async function carregarPersonagens() {
            const dados = await fetchCharacters();
            setCharacters(dados.characters);
        }
            carregarPersonagens()
    }, [])

    return (
        <View   style ={style.container}>
            <Text>Página de detalhes</Text>
            <FlatList
                data= {characters}
                keyExtractor={item => item.id.toString()}
                renderItem={({item}) => (
                <View style={style.card}>
                    <Image source= {{uri: item.images[0]}} style={style.image}/>
                    <Text style={style.name}>{item.name}.</Text>
                    <Text style={style.family}>{item.family}</Text>
                </View>
                )}
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
    },

    family: {
        
        fontSize: 18, 
        fontWeight: "bold"

    }

})