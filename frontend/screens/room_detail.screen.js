import { StyleSheet, View, Text, SafeAreaView, FlatList, Pressable, TouchableOpacity } from "react-native";
import React, { useState, useEffect } from "react";
import IconM from "react-native-vector-icons/MaterialIcons";
import Button from "../component/button.component";
import axios from "axios";
import Moment from 'moment';
import AnalyticsItem from "../component/analytics.component";

const name = "Room 101";

const RoomDetail = ({route, navigation}) => {

  const [status, setStatus] = useState(0)
  const [start, setStart] = useState(new Date())
  const [end, setEnd] = useState(new Date())

  const Book = () => {
    navigation.navigate("BOOKING", { setStatus, setStart, setEnd })
  }

  const [doorStatus, setDoorStatus] = useState("0");
  const [doorTimestamp, setDoorTimestamp] = useState("0");
  const getValue = async () => {
    const result = await axios.get(
    `https://io.adafruit.com/api/v2/HungNguyenHung/feeds/bbc-magnetic`
    );
    setDoorStatus(result.data.last_value);
    setDoorTimestamp(result.data.updated_at);
    // getStatus();
  }
  useEffect(() => {
    const isMounted = true;
    const intervalid = setInterval(() => {
        getValue();
    }, 1000);
    return () => {
        clearInterval(intervalid);
        isMounted = false;
    };
}, []);
    return (
        <View style={style.container}>
          <TouchableOpacity
                onPress={() => navigation.navigate("HOME")}
                style={{
                    flexDirection: "row",
                    backgroundColor: "#607FF2",
                    width: 40,
                    height: 40,
                    paddingHorizontal: 15,
                    paddingVertical: 10,
                    borderRadius: 30,
                    marginHorizontal: 30,
                    marginBottom: 10,
                }}
            >
                <IconM name="arrow-back-ios" size={20} color="#fff" />
                <Text
                    style={{
                        color: "white",
                        fontSize: 16,
                    }}
                ></Text>
            </TouchableOpacity>
          <View style={style.title}>
            <Text
              style={{
                  color: "#fff",
                  fontSize: 20,
                  fontWeight: "bold",
                  letterSpacing: 1,
              }}
            >
              ROOM DETAIL
            </Text>
          </View>
          <SafeAreaView>
            <View
              style={{
                paddingHorizontal: 30,
                width: "100%",
                marginTop: 30,
              }}
            >
              <View
                style={{
                  backgroundColor: "#FFFFFFfe",
                  height: 280,
                  width: "100%",
                  borderRadius: 10,
                  paddingHorizontal: 0,
                }}
              >
                <View style={style.profileItem}>
                  <View style={style.infoItem}>
                    <Text style={style.titleItem}>Room Name</Text>
                    <Text style={style.desItem}>
                      {name}
                    </Text>
                  </View>
                  <View style={style.infoItem}>
                    <Text style={style.titleItem}>Door Status</Text>
                      {doorStatus == 0 && <Text style={style.desItem}>Close at {Moment(doorTimestamp).format('HH:mm DD/MM/YYYY')}</Text>
                      || <Text style={style.desItem}>Open at {Moment(doorTimestamp).format('HH:mm DD/MM/YYYY')}</Text>}
                  </View>
                  <View style={style.infoItem}>
                    <Text style={style.titleItem}>Room Status</Text>
                      {status == 0 && <Text style={style.desItem}>Ready to use</Text>
                      || <Text style={style.desItem}>In use</Text>}
                  </View>
                </View>
              </View>
            </View>
            <View
              style={{
                height: 100,
                width: "100%",
                marginTop: 30,
                borderRadius: 50,
                alignItems: "center",
              }}
            >
              <Button
                onPress={Book}
                title="Book"
              />
            </View>
          </SafeAreaView>
        </View>
    );
};

const style = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: "#4C51C6",
        height: "100%",
        width: "100%",
        paddingVertical: 30,
    },
    title: {
        height: 35,
        borderColor: "#fff",
        borderBottomWidth: 2,
        marginHorizontal: 30,
        marginBottom: 0,
    },
    grid: {
        flex: 1,
        width: '100%',
    },
    infoItem: {
        // height: 80,
        marginTop: 15,
        marginLeft: 10,
        marginRight: 10,
    },
    titleItem: {
        fontSize: 24,
        fontWeight: "600",
        letterSpacing: 1,
        color: "#444",
    },
    desItem: {
        fontSize: 20,
        fontWeight: "600",
        color: "#666",
        marginTop: 10,
    },
    profileItem: {
        height: 80,
        flexDirection: "column",
        marginBottom: 0,
    },
});

export default RoomDetail;
