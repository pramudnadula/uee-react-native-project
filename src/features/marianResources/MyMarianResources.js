import { useState } from "react";
import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";

function MyMarianResources({ navigation }) {

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
                <Text style={styles.addMarianResourcesText}>
                    +
                </Text>
            </Pressable>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text >
                        My Marian Resources
                    </Text>
                    {/* MarianResourcesViewCreator */}
                    <Pressable style={styles.viewMarianResources} onPress={() => navigation.navigate("MarianResourcesViewCreator")}>
                        <Text style={styles.viewMarianResourcesText}>
                            view creator marian resources
                        </Text>
                    </Pressable>
                </View>
            </ScrollView>
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
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 25,
        borderWidth: 1,
    },
    addMarianResourcesText: {
        fontSize: 28,
        fontWeight: "bold",
        justifyContent: "flex-start",
    },
    viewMarianResources: {
        backgroundColor: "#82C7EE",
        padding: 2,
        borderRadius: 15,
        borderWidth: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    viewMarianResourcesText: {
        fontSize: 14,
        fontWeight: "bold",
        justifyContent: "flex-start",
    },
});