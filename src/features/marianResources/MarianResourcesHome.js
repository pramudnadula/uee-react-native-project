import { display } from '@mui/system';
import { useEffect, useState } from 'react';
import { Image, Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";
import { GET } from '../../helpers/httphelper';

function MarianResourcesHome({ navigation }) {
    const [marianResources, setMarianResources] = useState([]);

    useEffect(() => {
        //get all resources
        getAll();
    }, [])

    //get all resources
    const getAll = async () => {
        await GET("api/marianResources/getMarianResources").then((res) => {
            setMarianResources(res.marianResources);
        });
    }
    return (
        <View style={styles.container} >
            {/* Side Bar */}
            <SideBar navigation={navigation} />
            {/* Head Title */}
            <Text style={styles.title}>
                Marian Resources
            </Text>
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
                                onPress={() => navigation.navigate("MarianResourcesViewUser", { marianResource: marianResource })}
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
            < NavigationBottomBar navigation={navigation} />
        </View >
    )
}

export default MarianResourcesHome
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
    contentColumn: {
        height: "100%",
        // width: "100%",
        flexDirection: "row",
        flexWrap: "wrap",
        overflow: "scroll",
        justifyContent: "space-evenly",
    },
    viewMarianResources: {
        width: 185,
        height: 250,
        margin: 5,
        // backgroundColor: "#82C7EE",
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        // shadow
        // shadowColor: "#000",
        // shadowOffset: {
        //     width: 0,
        //     height: 2,
        // },
        // shadowOpacity: 0.25,
        // shadowRadius: 3.84,
        // elevation: 5,

        // borderColor: "#82C7EE",
    },
    // viewMarianResourcesText: {
    //     color: "#fff",
    // },

});