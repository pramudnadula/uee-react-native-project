import { Pressable, ScrollView, StyleSheet, Text, View } from "react-native"
import NavigationBottomBar from "../../components/NavigationBottomBar";

function MarianResourcesAdd({ navigation }) {
    return (
        <View style={styles.container} >
            {/* back button */}
            <Text style={styles.backButton} onPress={() => navigation.goBack()}>
                {"<"}
            </Text>

            <Text style={styles.title}>
                Add Marian Resources
            </Text>
            {/* Content Here */}
            <ScrollView showsVerticalScrollIndicator={false}>
                <View style={styles.content}>
                    <Text >
                        Add Marian Resources
                    </Text>
                </View>
            </ScrollView>
            {/* Bottom Navigation Bar */}
            <NavigationBottomBar navigation={navigation} />
        </View>
    )
}

export default MarianResourcesAdd
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