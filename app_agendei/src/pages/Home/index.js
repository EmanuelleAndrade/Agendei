
import React, { useEffect, useState } from 'react';
import { SafeAreaView, StatusBar , StyleSheet, ActivityIndicator, Image, } from 'react-native';
import logoImage from'../../../assets/icon.png'


export const Home = () =>{
  return (
    
    <SafeAreaView style={styles.container}>
      <StatusBar style="light" />
    
     <Image styles={styles.logo} source = {logoImage}/>
     <ActivityIndicator style={{ position: 'center', right: 0, bottom: 0, margin: 10}} size="large" color="#fff" />
      
   
    </SafeAreaView>
  );
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#5CC6BA',
    alignItems: 'center',
    justifyContent: 'center',
  },
 

  
  
}
    
  
  
  ) 



