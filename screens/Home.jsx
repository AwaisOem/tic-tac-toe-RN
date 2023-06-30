import tw from 'twrnc'
import {XIcon } from "react-native-heroicons/outline"
import React , { useContext } from 'react'
import { Pressable, Text, TouchableOpacity, View } from 'react-native'
import { Side } from '../Main'
const Home = ({pageChanger , setTurn}) => {
    const turn = useContext(Side);
  return (
    <View style={[tw`h-full items-center w-full justify-center flex-col ` , {gap: "30px", backgroundColor:"#373F51"}]}>
        <View style={[tw`flex-row gap-5`]}>
            <XIcon style={[tw`font-bold w-18 h-18` , {color:"#FFA62B"}]} />
            <Text style={[tw`font-bold text-6xl` , {color:"#60E1E0"}]}>O</Text>
        </View>
        <View style ={ [tw`rounded-xl my-5 flex-col justify-around items-center` , {boxShadow: "0 9px 0px 0 #00000050" , backgroundColor : "#373051", width:"90%", height:"230px"}]}>
            <Text style={[tw`font-bold text-xl` , {color: "#A39BA8"}]}>PICK PLAYER 1'S MARK</Text>
            <View style={[tw`flex-row rounded-xl shadow` , {width: "70%", height:70 , backgroundColor: "#373F51"}]}>
                <TouchableOpacity onPress={()=>setTurn("X")} style={[tw`h-full rounded-xl justify-center items-center`,{backgroundColor:turn==="X" ? "#A39BA8":"#373F51" , width: "50%"}]}>
                    <XIcon style={[tw`font-bold` , {height : "60%",width : "50%" ,  color:turn==="X" ? "#373F51" : "#A39BA8"}]} />
                </TouchableOpacity>
                <TouchableOpacity onPress={()=>setTurn("O")} style={[tw`h-full rounded-xl justify-center items-center`,{backgroundColor:turn==="O" ? "#A39BA8":"#373F51" , width: "50%"}]}>
                <Text style={[tw`font-bold text-5xl` , {color:turn==="O" ? "#373F51" : "#A39BA8"}]}>O</Text>
                </TouchableOpacity>
            </View>
            <Text style={[tw`font-bold text-lg opacity-30` , {color: "#A39BA8"}]}>Remember: X goes First</Text>
        </View>
        <TouchableOpacity onPress={()=>pageChanger("computer")} style={[tw`rounded-lg justify-center items-center font-bold text-2xl` , {boxShadow: "0 9px 0px 0 #FFA62B95" , width:"90%" ,color: "#373F51",backgroundColor:"#FFA62B", height:50}]}>
            New Game (Vs CPU)
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>pageChanger("player")} style={[tw`rounded-lg justify-center items-center font-bold text-2xl` , {boxShadow: "0 9px 0px 0 #60E1E095" , width:"90%" ,color: "#373F51",backgroundColor:"#60E1E0", height:50}]}>
            New Game (Vs Player)
        </TouchableOpacity>
    </View>
  )
}
export default Home