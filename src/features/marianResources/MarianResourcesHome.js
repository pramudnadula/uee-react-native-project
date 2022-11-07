import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";

function MarianResourcesHome({ navigation }) {
    return (
        <View style={styles.container} >
            {/* Side Bar */}
            <SideBar navigation={navigation} />
            {/* Head Title */}
            <Text style={styles.title}>
                Marian Resources
            </Text>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text >
                        Marian Resources Home Page
                    </Text>
                </View>
                {/* MarianResourcesViewUser */}
                <Pressable style={styles.viewMarianResources} onPress={() => navigation.navigate("MarianResourcesViewUser")}>
                    <Text style={styles.viewMarianResourcesText}>
                        view user marian resources
                    </Text>
                </Pressable>
            </ScrollView>
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
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
    viewMarianResources: {
        backgroundColor: "#82C7EE",
        padding: 10,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: "#82C7EE",
        alignItems: "center",
        justifyContent: "center",
    },
    viewMarianResourcesText: {
        color: "#fff",
        fontSize: 16
    },

});