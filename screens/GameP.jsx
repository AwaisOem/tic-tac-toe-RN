import React, { useContext, useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { Side } from '../Main';
import tw from 'twrnc'
import { XIcon } from 'react-native-heroicons/outline';
const GameP = ({setTurn , pageChanger}) => {
  const turn = useContext(Side);
  const [Arr, setArr] = useState([[1,2,3],[4,5,6],[7,8,9]])
  const [victoryPopup, setVictoryPopup] = useState(false);
  const [winner, setWinner] = useState("");
  const [Xwins, setXwins] = useState(0);
  const [Owins, setOwins] = useState(0);
  const [Tied, setTied] = useState(0);
  const handleBoxPress = (i , j)=>
  {
      if(Arr[i][j]!=="X" && Arr[i][j]!=="O")
      {
        let temp = Arr;
        temp[i][j] = turn;   
        setArr(temp)
        if(checkGameOver())
        {
            setWinner(`${turn} WINS THE GAME`);
            setVictoryPopup(true);
            (turn ==="X") ? setXwins(p=>p+1):setOwins(p=>p+1);
        }
        else if(tied())
        {
            setWinner(`TIED MATCH`);
            setVictoryPopup(true);
            setTied(p=>p+1);
        }
        else
        {
            (turn==="X")? setTurn("O"):setTurn("X")
        }

    }
  }
  const handleQuit = ()=>pageChanger("home");
  const handleNextGame = ()=>{
    setVictoryPopup(false);
    setWinner("");
    setArr([[1,2,3],[4,5,6],[7,8,9]]);
  }
  const tied = ()=>{
    for (const A of Arr) 
        for (let i = 0; i < Arr.length; i++) 
            if(!(A[i]==="X"||A[i]==="O"))
                return false    
    return true;
  }
  const checkGameOver= ()=>
  {
    for (const A of Arr)
        if((A[0]===A[1] && A[1]===A[2]))
            return true;
    for(let i = 0; i < Arr.length; i++)
        if(Arr[0][i]===Arr[1][i] && Arr[1][i]===Arr[2][i] )
            return true;
    if((Arr[0][0]===Arr[1][1] && Arr[1][1]===Arr[2][2])||(Arr[0][2]===Arr[1][1] && Arr[1][1]===Arr[2][0]))
        return true;
    return false
  }
  return (
    <View style={[tw`w-full`]}>
        {victoryPopup && (
            <View style={[tw`w-full absolute items-center justify-center rounded-xl z-99 shadow-xl`,{gap:"40px" , backgroundColor:"#373F51" ,top : "20%",left: 0 , height: '50vh'}]}>
                <View style = {[tw`font-bold text-4xl `,{color:"#60E1E0"}]}>{winner}</View>
                <View style={[tw`flex-row` ,{gap: "30px"}]}>
                    <TouchableOpacity onPress={handleQuit} style={[tw`rounded-xl px-8 py-3 font-bold text-xl justify-center items-center` ,{boxShadow:"0 5px 0 0 #A39BA880" ,color:"#373F51", backgroundColor : "#A39BA8"}]}>Quit</TouchableOpacity>
                    <TouchableOpacity onPress={handleNextGame} style={[tw`rounded-xl font-bold px-8 py-3 text-xl justify-center items-center` ,{boxShadow:"0 5px 0 0 #FFA62B80" ,color:"#373F51", backgroundColor: "#FFA62B"}]}>Next Game</TouchableOpacity>
                </View>
            </View>
        )}
        <View style={tw`flex-row mx-3 items-center justify-between my-4`}>
            <View style={[tw`flex-row gap-5 items-center`,{textShadow:"0 0 8px #00000025"}]}>
                <XIcon style={[tw`font-bold w-15 h-15` , {color:"#FFA62B"}]}/>
                <Text style={[tw`font-bold text-5xl` , {textShadow:"0 0 8px #00000025",color:"#60E1E0"}]}>O</Text>
            </View>
            <View style={[tw`rounded-xl px-3 font-bold py-2` , {boxShadow:"0 5px 0px 0 #00000025",backgroundColor:"#ffffff10" ,color:"#A39BA8" }]}>
                {turn==="X" ? "X":"O"}  TURN
            </View>
            <View style={[tw`rounded-xl p-3 font-bold text-xl`,{backgroundColor: "#FFA62B",color: "#373F51",boxShadow:"0 5px 0px 0 #FFA62B80"}]}>
                Vs Player
            </View>
        </View>        
        <View style={[tw`flex-1 my-14 mx-3 flex-col justify-between`, {height:"80vh",gap: "20px"}]}>

            {Arr.map((a, i)=>(
            <View key={`Arr-${i}`} style={[tw`h-30 flex-row justify-between`,{height:"13vh"}]}>
                {a.map((val , j)=>(
                    <TouchableOpacity key={i*j} onPress={()=>handleBoxPress(i,j)} style={[tw`h-full justify-center items-center w-1/4 rounded-xl`,{boxShadow: " 0 5px 0 0 #00000080",backgroundColor : "#ffffff10"}]}>
                        {val==="X" ? (
                            <XIcon style={[tw`font-bold w-full h-full` , {color:"#FFA62B"}]}/>
                            ):val==="O" && (
                            <Text style={[tw`font-bold pb-2 text-7xl` , {textShadow:"0 0 8px #00000025",color:"#60E1E0"}]}>O</Text>
                        )}
                    </TouchableOpacity>
                ))}
            </View>))}
            <View style={[tw` flex-row text-xl font-bold mt-8 justify-between`,{color: "#373F51" , height:"13vh"}]}>
                <View style={[tw`h-full justify-center items-center w-1/4 rounded-xl`,{backgroundColor : "#FFA62B"}]}>
                    <View>X Wins</View>
                    <View>{Xwins}</View>
                </View>
                <View style={[tw`h-full justify-center items-center w-1/4 rounded-xl`,{backgroundColor : "#A39BA8"}]}>
                    <View>TIED</View>
                    <View>{Tied}</View>
                </View>
                <View style={[tw`h-full justify-center items-center w-1/4 rounded-xl`,{backgroundColor : "#60E1E0"}]}>
                    <View>O Wins</View>
                    <View>{Owins}</View>
                </View>
            </View>
        </View>
    </View>
  )
}

export default GameP