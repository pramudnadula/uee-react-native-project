import React from 'react';
import { View, FlatList } from 'react-native';
import MyCard from '../components/MyCard';
import { Container } from '../styles/all';

function MyPost(props) {
    const data = [
        { id: 1, name: "kavi" }, { id: 2, name: "davi" }, { id: 3, name: "ravi" }
    ]
    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({ item }) => <MyCard item={item} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default MyPost;