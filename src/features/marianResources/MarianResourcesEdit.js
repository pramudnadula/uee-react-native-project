import {
    Pressable,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    View,
    Image,
    Alert,
} from "react-native"
import { useState, useEffect } from "react";
import { SelectList } from 'react-native-dropdown-select-list'
import NavigationBottomBar from "../../components/NavigationBottomBar";
import { PUT } from "../../helpers/httphelper";

function MarianResourcesEdit({ navigation, route }) {
    const { marianResource } = route.params;
    console.log(marianResource);

    const [image, setImage] = useState("");
    const [name, setName] = useState(marianResource.name);
    const [details, setDetails] = useState("");
    const [category, setCategory] = useState("");
    const [lifeSpan, setLifeSpan] = useState("");
    const [author, setAuthor] = useState(marianResource.author);
    const [habit, setHabit] = useState("");
    const [selected, setSelected] = useState("");
    const [uid, setuid] = useState('');

    const data = [
        { key: '1', value: 'Fusiform/normal' },
        { key: '2', value: 'Flat' },
        { key: '3', value: 'Compressiform' },
        { key: '4', value: 'Eel-like' },
        { key: '5', value: 'Enlongated' },
        { key: '6', value: 'Flat' },
        { key: '7', value: 'Short and/or deep' },
    ]
    const updateSubmit = (id) => {
        if (name === '') {
            alert("Please Select an Name")
            return
        }
        if (details === '') {
            alert("Please Select an Details")
            return
        }
        if (habit === '') {
            alert("Please Enter the Habitat")
            return
        }
        const newResource = {
            title: name,
            image,
            name,
            details,
            category: selected,
            author,
            habit,
            lifeSpan,
        };
        console.log(newResource);
        PUT(`api/marianResources/updateMarianResources/${id}`, newResource).then((res) => {
            Alert.alert("Details Updated Succuss", res.message);
            console.log(res);
            navigation.navigate("MyMarianResources");
        });
    };


    const deletePost = (id) => {
        DELETE(`api/marianResources/deleteMarianResources/${id}`).then(data => {
            console.log(data)
            Alert.alert("Deleted Successfully")
            navigation.navigate("MyMarianResources")
        }).catch(err => {
            console.log(err)
        })
    }
    const clickUpdate = (id) => {
        console.log(id)
        Alert.alert(
            "Update",
            "Sure You want to Update",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => updateSubmit(id) }
            ]
        );
    }
    return (
        <View style={styles.container} >
            {/* back button */}
            <Pressable style={styles.backButton} onPress={() => navigation.goBack()}>
                <Image
                    style={{
                        marginTop: 5,
                        width: 25,
                        height: 40,
                    }}
                    source={require("../../../assets/back.png")} />
            </Pressable>

            <Text style={styles.title}>
                Update Resources
            </Text>
            {/* Content Here */}
            <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                    width: "100%",
                    paddingRight: 15,
                    paddingLeft: 15,
                    // height: "100%",
                    bottom: '15%',
                    top: '0%',
                }}
            >
                <Image style={{
                    width: '100%',
                    height: 250,
                    borderRadius: 10,
                }} source={(require("../../../assets/MarineUpdate.jpg"))} />
                <Text>Image</Text>

                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    placeholder="Enter image Url"
                    onChangeText={(image) => setImage(image)}
                />
                <Text>Name</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    value={name}
                    placeholder="Enter name"
                    onChangeText={(name) => setName(name)}
                />
                <Text>Details about Marian Resource</Text>
                <TextInput
                    style={{
                        height: 80,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    placeholder="Enter details"
                    onChangeText={(details) => setDetails(details)}
                />
                <Text>Category</Text>
                {/* Select  */}
                <SelectList
                    setSelected={(val) => setSelected(val)}
                    data={data}
                    // onChangeText={(category) => setCategory(category)}
                    // defaultOption={selected}
                    save="value"
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                />

                <Text>Life Span</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    placeholder="Enter life span"
                    onChangeText={(lifeSpan) => setLifeSpan(lifeSpan)}
                />
                <Text>Author</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    placeholder="Enter author"
                    onChangeText={(author) => setAuthor(author)}
                />
                <Text>Habitat</Text>
                <TextInput
                    style={{
                        height: 40,
                        width: "100%",
                        borderWidth: 1,
                        borderRadius: 10,
                        paddingLeft: 10,
                    }}
                    placeholder="Enter habitat"
                    onChangeText={(habit) => setHabit(habit)}
                />
                <Pressable style={styles.button} onPress={() => clickUpdate(marianResource._id)}>
                    <Text style={styles.buttonText}>Submit</Text>
                </Pressable>
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
        marginTop: 30,
        marginLeft: 15,
        justifyContent: "flex-start",
        position: "absolute",
        top: 0,
        left: 0,
        backgroundColor: "#82C7EE",
        paddingLeft: 10,
        paddingRight: 10,
        borderRadius: 50,
    },
    button: {
        alignItems: "center",
        backgroundColor: "#1C2578",
        padding: 10,
        borderRadius: 15,
        borderWidth: 1,
        margin: 10,
        marginBottom: '20%',
    },
    buttonText: {
        fontSize: 20,
        fontWeight: "bold",
        color: "#fff",
    },

});