import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert } from 'react-native';
import MyCard from '../components/MyCard';
import { Container } from '../styles/all';
import AsyncStorage from '@react-native-async-storage/async-storage';
function MyPost({ navigation }) {
    const [data, setdate] = useState([])
    const [uid, setuid] = useState('')

    const getData2 = async () => {
        try {
            const value = await AsyncStorage.getItem('uid')
            if (value !== null) {
                setuid(value)
                getData(value)
            }
        } catch (e) {
            console.log(e)
        }
    }

    useEffect(() => {
        getData2()


    }, [])
    const getData = (id) => {
        axios.post('192.168.1.122:8070/api/post/allmy', { uid: id }).then(data => {
            setdate(data.data)
        }).catch(err => {
            console.log(err)
        })
    }

    const deleteEvent = (id) => {
        axios.post('http://192.168.1.122:8070/api/post/del', { pid: id }).then(data => {
            console.log(data)
            getData2()
        }).catch(err => {
            console.log(err)
        })
    }

    const updateMethod = (item) => {
        navigation.navigate("editpost", { post: item })

    }

    const clickDelete = (id) => {
        Alert.alert(
            "Delete",
            "Sure You want to Delete",
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => deleteEvent(id) }
            ]
        );


    }
    return (
        <Container>
            <FlatList
                data={data}
                renderItem={({ item }) => <MyCard item={item} del={clickDelete} navmethod={updateMethod} />}
                keyExtractor={item => item.id}
                showsVerticalScrollIndicator={false}
            />
        </Container>
    );
}

export default MyPost;