import { ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";
import SideBar from "../../components/SideBar";

function MarianResourcesEdit({ navigation }) {
    return (
        <View style={styles.container} >
            {/* back button */}
            <Text style={styles.backButton} onPress={() => navigation.goBack()}>
                {"<"}
            </Text>

            <Text style={styles.title}>
                Update Resources
            </Text>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text >
                        Edit Marian Resources
                    </Text>
                </View>
            </ScrollView>
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
    )
}

export default MarianResourcesEdit
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
        left: 0,
        backgroundColor: "#82C7EE",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 25,
        borderWidth: 1,

    },

});