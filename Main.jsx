import * as React from 'react'
import { StatusBar } from 'expo-status-bar';
import { Pressable, SafeAreaView, StyleSheet, Text, View } from 'react-native';
import tw from 'twrnc';
import { useSelector , useDispatch } from 'react-redux';
import { getHighScore, getLastScore, highScoreSet } from './store/scoreSlice';
import Home from './screens/Home';
import { createContext } from 'react';
import GameP from './screens/GameP';
import GameC from './screens/GameC';
export const Side = createContext();
const MainComponent = () => {
    const highScore = useSelector(getHighScore);
    const lastScore = useSelector(getLastScore);
    const dispatch = useDispatch();
    const [turn,setTurn] = React.useState("X") 
    const [page, setPage] = React.useState("home");
    return (
        <Side.Provider value={turn}>
        <SafeAreaView style={[tw`justify-center items-center` , {maxWidth: "650px" ,width:"100%"  , fontFamily: "'Roboto', sans-serif" , height : "100vh"}]} >
            {page==="home" ?(
            <Home pageChanger={setPage} setTurn={setTurn} />
            ):page==="player" ? (
            <GameP pageChanger={setPage} setTurn={setTurn}/>
            ):page==="computer" && (
            <GameC pageChanger={setPage}/>
            )}
        </SafeAreaView>
        </Side.Provider>
    )
    }
export default  MainComponent