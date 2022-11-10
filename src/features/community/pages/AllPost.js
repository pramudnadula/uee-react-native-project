import { View, Text, FlatList } from "react-native";
import PostCard from "../components/PostCard";
import { AddButton, Container } from "../styles/all";
import Ionicons from '@expo/vector-icons/Ionicons';
function AllPost({ navigation }) {
    const data = [
        { id: 1, name: "kavi" }, { id: 2, name: "davi" }, { id: 3, name: "ravi" }
    ]
    return (
        <Container>
            <AddButton onPress={() => navigation.navigate("addpost")}><Ionicons name="add-circle" color="blue" size={57} /></AddButton>
            <FlatList
                data={data}
                renderItem={({ item }) => <PostCard item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default AllPost;