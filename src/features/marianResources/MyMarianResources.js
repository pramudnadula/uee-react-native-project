import { useState, useEffect } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View, Image } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { POST } from "../../helpers/httphelper";
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyMarianResources({ navigation }) {
    const [uid, setuid] = useState('');
    const [marianResources, setMarianResources] = useState([]);

    useEffect(() => {
        getData()
    }, [])

    const getData = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
            }
            POST("api/marianResources/getMarianResourcesByUid", { uid: value }).then((res) => {
                setMarianResources(res.marianResources);
            });
        } catch (e) {
            console.log(e)
        }
    }
    console.log(uid)
    console.log(marianResources)
    return (
        <View style={styles.container} >
            {/* Side Bar */}
            <SideBar navigation={navigation} />
            {/* Head Title */}
            <Text style={styles.title}>
                My Marian Resources
            </Text>
            {/* Add Marian Resources */}
            <Pressable style={styles.addMarianResources} onPress={() => navigation.navigate("MarianResourcesAdd")}>
                <Image
                    style={{

                        width: 40,
                        height: 40,
                    }}
                    source={require("../../../assets/add.png")} />
            </Pressable>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}
                style={{
                    marginBottom: '20%',
                }}
            >
                <View style={styles.contentColumn}>

                    {/* MarianResourcesViewUser */}
                    {marianResources ? marianResources?.map((marianResource, index) => {
                        return (
                            <Pressable style={styles.viewMarianResources} key={index}
                                onPress={() => navigation.navigate("MarianResourcesViewCreator", { marianResource: marianResource })}
                            >

                                <Text
                                    style={{
                                        fontWeight: "bold",
                                        fontSize: 20,
                                    }}
                                > {marianResource?.title}</Text>
                                <Image
                                    source={{ uri: marianResource?.image }}
                                    style={{
                                        width: '100%',
                                        height: 100,
                                        borderRadius: 10,
                                        backgroundColor: "#82C7EE",
                                    }} />
                                <Text
                                    style={{
                                        fontSize: 15,
                                        textAlign: "justify",
                                        height: '28%',
                                    }}
                                >{marianResource?.details}</Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        bottom: 25,
                                        right: 10,
                                        position: 'absolute',
                                    }}
                                >
                                    {marianResource?.author}
                                </Text>
                                <Text
                                    style={{
                                        fontSize: 15,
                                        bottom: 10,
                                        right: 10,
                                        position: 'absolute',
                                    }}
                                >
                                    {(marianResource?.date).split('T')[0]}

                                </Text>
                            </Pressable>
                        )
                    }) : null}
                </View>
            </ScrollView >
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
    )
}

export default MyMarianResources

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#fff",
        alignItems: "center",
        justifyContent: "center",
    },
    title: {
        fontSize: 28,
        fontWeight: "bold",
        margin: 30,
        justifyContent: "flex-start"
    },
    addMarianResources: {
        position: "absolute",
        top: 33,
        right: 15,
        backgroundColor: "#fafafa",
        borderRadius: 50,
    },

    contentColumn: {
        height: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "scroll",
        justifyContent: "space-evenly",
    },
    viewMarianResources: {
        width: 185,
        height: 250,
        margin: 5,
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,

    },


});