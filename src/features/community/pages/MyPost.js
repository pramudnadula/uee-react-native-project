import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { View, FlatList, Alert, Text, ImageBackground } from 'react-native';
import MyCard from '../components/MyCard';
import { Back2, Container, ContentWrapper, ImageWrapper } from '../styles/all';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { Searchbar } from 'react-native-paper';
import { HeadText, NoPost, NText } from '../styles/mypost';
import { SearchView } from '../../report/pages/Reports/Reports.style';
function MyPost({ navigation, route }) {

    const [data, setdate] = useState([])
    const [uid, setuid] = useState('')
    const [searchQuery, setSearchQuery] = useState('')

    useEffect(() => {
        search()
    }, [searchQuery])

    const search = () => {
        if (searchQuery === "") {
            getData2()
        }
        else {
            axios.post('http://192.168.1.23:8070/api/post/search', { title: searchQuery }).then(data => {
                setdate(data.data.data)
            }).catch(err => {
                console.log(err)
            })
        }
    }

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
        if (searchQuery === "") {
            getData2()
        }



    }, [data])
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

            <Back2 source={require('../../../../assets/backk.png')}>
                <ContentWrapper>
                    <HeadText>My Posts</HeadText>
                    <SearchView>
                        <Searchbar
                            placeholder="Search"
                            onChangeText={(query) => setSearchQuery(query)}
                            value={searchQuery}
                            style={{ width: "90%" }}
                        />
                    </SearchView>
                    {data.length === 0 ? <>
                        <NoPost><NText>No Any Posts</NText></NoPost>
                    </> : <></>}
                    <FlatList
                        data={data}
                        renderItem={({ item }) => <MyCard item={item} del={clickDelete} navmethod={updateMethod} />}
                        keyExtractor={item => item.id}
                        showsVerticalScrollIndicator={false}
                    />
                </ContentWrapper>
            </Back2>
        </Container>
    );
}

export default MyPost;