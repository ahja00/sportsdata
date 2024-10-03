import { StatusBar } from 'expo-status-bar';
import{useEffect, useState}from 'react';
import { StyleSheet, Text, View } from 'react-native';



export default function App() {
  const [country,setStrCountry]=useState('')
  const[gender,setStrGender]=useState('')
  const[colour,setStrColour1]=useState('')

  useEffect(()=>{
    (async()=>{
     await getSportData()
  })();
},[]);

  const getSportData=async()=>{
    try{
      const response=await fetch(url);
      if(response.ok) {
     const json=await response.json();
     const team=json.teams[0];
     setStrCountry(team.strCountry);
     setStrGender(team.strGender);
     setStrColour1(team.strColour1);
      } else {
        if(response.status===429){
          console.log("Too many requests!")
        }else{
          console.log("can't retrieve beer information!")
        }
      }
    }catch(error){
      console.log(error)
    }
  }
  return (
    <View style={styles.container}>
      <Text style={styles.header}>Get sports info</Text>
      <Text style={styles.text}>{country}</Text>
      <Text style={styles.text}>{gender}</Text>
      <Text style={styles.text}>{colour}</Text>
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFC0CB',
    alignItems: 'center',
    justifyContent: 'center',
  },


});
