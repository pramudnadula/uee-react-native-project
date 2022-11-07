import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";

function MarianResourcesViewUser({ navigation }) {
    return (
        <View style={styles.container} >
            {/* Side Bar */}
            <SideBar navigation={navigation} />
            {/* back button */}
            <Text style={styles.backButton} onPress={() => navigation.goBack()}>
                {"<"}
            </Text>

            <Text style={styles.title}>
                View  Resources
            </Text>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text >
                        View Marian Resources User
                    </Text>
                </View>

            </ScrollView>
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
    )
}

export default MarianResourcesViewUser
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
    backButton: {
        fontSize: 28,
        fontWeight: "bold",
        marginTop: 30,
        marginLeft: 15,
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        right: 10,
        backgroundColor: "#82C7EE",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 25,
        borderWidth: 1,

    },

    editMarianResources: {
        backgroundColor: "#82C7EE",
        padding: 2,
        borderRadius: 15,
        borderWidth: 1,
        margin: 10,
        justifyContent: "center",
        alignItems: "center",
    },
    editMarianResourcesText: {
        fontSize: 20,
        fontWeight: "bold",
    },

});