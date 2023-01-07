import { StyleSheet, View, Text, SafeAreaView, FlatList, Pressable, TouchableOpacity } from "react-native";
import React, { useState } from "react";
import IconM from "react-native-vector-icons/MaterialIcons";
import Button from "../component/button.component";

import AnalyticsItem from "../component/analytics.component";

const name = "Room 101";
const doorStatus = 0;
const doorTimestamp = "11:00 06/01/2022";
const roomStatus = 0;

const RoomDetail = ({navigation}) => {
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
                      {doorStatus == 0 && <Text style={style.desItem}>Close at {doorTimestamp}</Text>
                      || <Text style={style.desItem}>Open at {doorTimestamp}</Text>}
                  </View>
                  <View style={style.infoItem}>
                    <Text style={style.titleItem}>Room Status</Text>
                      {roomStatus == 0 && <Text style={style.desItem}>Ready to use</Text>
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
                onPress={() => navigation.navigate("BOOKING")}
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