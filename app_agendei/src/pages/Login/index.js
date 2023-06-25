
import { useState } from 'react';
import { StyleSheet,
   Text, 
   View,
   TextInput,
   TouchableOpacity, } from 'react-native';


   export const Login = () =>{

    const [email,setEmail] = useState('');//useState monitora a variação do texto
    const [senha,setSenha] = useState('');
    const handleLogin = () => {
        console.log(`E-mail: ${email} - Senha: ${senha}`);
    }
  return (

    

    <View style={styles.container}>
      
      <View style={styles.container}>,

   
 


<TextInput
style={styles.input}
placeholder="  e-mail"
onChangeText={setEmail} //monitora a alteração do texto
value={email}
/>
<TextInput
style={styles.input}
placeholder="  senha"
onChangeText={setSenha}
value={senha}
/>
<TouchableOpacity
style={styles.button}
onPress={() => handleLogin()}>
<Text style={styles.txtbutton}>Acessar</Text>
</TouchableOpacity>
</View>

        
    </View>
      
    
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
    alignItems: 'center',
    justifyContent: 'center',
},
campoArea: {
},
contentContainer: {
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'red',
},
txt: {
    fontSize: 30,
    fontWeight: 'bold',
    marginBottom: 30,
    color: '#04140f',
},
txtinput: {
    fontSize: 16,
    color: '#fff',

  },
txtinputEmail: {
    fontSize: 16,
    color: '#fff',


    paddingLeft: 5,
},
input: {
    backgroundColor:'#F1F5F4',

    borderRadius: 13,
    width: 300,
    height: 40,
    margin: 5,
    padding: 3,
    marginTop: 5,
    borderTopLeftRadius: 2,
    borderBottomRightRadius: 2,
},
inputArea: {
    flexDirection: 'row',
},
inputSenha: {
    backgroundColor: '#F1F5F4',

    borderBottomLeftRadius: 13,
    borderTopLeftRadius: 2,
    width: 260,
    height: 40,
    marginTop: 5,
    padding: 3,
},

button: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#5CC6BA',


    marginTop: 20,
    width: 300,
    height: 50,
    borderRadius: 13,
},
txtButton: {
    color: '#fff',
    
},
})

  
