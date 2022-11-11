import NavigationBottomBar from "../../../../components/NavigationBottomBar";
import SideBar from "../../../../components/SideBar";
import { Container, PageTitle, TopNav, IconView, SearchView } from "../Reports/Reports.style";
import Icon from 'react-native-vector-icons/FontAwesome5';
import { View, ScrollView } from "react-native";
import { Searchbar } from 'react-native-paper';
import { useEffect, useState } from "react";
import ReportCard from "../../components/ReportCard/ReportCard";
import { GET, POST } from '../../../../helpers/httphelper';
import AsyncStorage from '@react-native-async-storage/async-storage';

function MyReports({ navigation }) {

  const [searchQuery, setSearchQuery] = useState('');
  const [reports, setReports] = useState([]);
  const [userId, setUserId] = useState('');

  const handleFetchAllReportsById = async () => {
    try {
      const res = await GET('api/reports/get/user/63669d82bc8b0b0fc878354a');
      setReports(res.data);
    } catch (err) {
      console.log(err);
    }
  }

  const handleGetUserId = async () => {
    try {
      const value = await AsyncStorage.getItem('uid')
      if (value !== null) {
        setUserId(value)
      }
    } catch (err) {
      console.log(err)
    }
  }

  const handleSearchByName = async () => {
    try {
      if (searchQuery === '') {
        handleFetchAllReportsById();
      } else {
        let ob = {
          title: searchQuery,
          user: "63669d82bc8b0b0fc878354a"
        }
        const res = await POST('api/reports/search/user', ob);
        setReports(res.data);
        console.log(res)
      }
    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    handleFetchAllReportsById();
    handleGetUserId();
  }, []);

  useEffect(() => {
    handleSearchByName();
  }, [searchQuery]);

  return (
    <Container>
      <SideBar navigation={navigation} />
      <TopNav>
        <View style={{ width: 30 }}></View>
        <View>
          <PageTitle>My Reports</PageTitle>
        </View>
        <IconView>
          <Icon name="plus-circle" size={32} color="#42a1f5" />
        </IconView>
      </TopNav>
      <SearchView>
        <Searchbar
          placeholder="Search"
          onChangeText={(query) => setSearchQuery(query)}
          value={searchQuery}
          style={{ width: "90%" }}
        />
      </SearchView>
      <ScrollView style={{ marginBottom: "20%" }}>
        {reports?.map((report, index) => (
          <ReportCard key={index} data={report} isOwner={true} />
        ))}
      </ScrollView>
      <NavigationBottomBar navigation={navigation} />
    </Container>
  )
}

export default MyReports;
