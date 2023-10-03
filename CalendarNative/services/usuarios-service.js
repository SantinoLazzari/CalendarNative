import AsyncStorage from '@react-native-async-storage/async-storage';

const USERNAME_KEY='LOGIN_username';
const PASSWORD_KEY='LOGIN_password';

export default class UsuarioService{
    staticLogin=async(mail,password)=>{ 
        let isValid;
        try {            
            if(mail == 'pato' && password == 'uenche'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 
        } catch(e){
            return false;
        }
    };
    static almacenarDatos=async(mail,password)=>{
        try {    
            await AsyncStorage.setItem(USERNAME_KEY, mail);  
            await AsyncStorage.setItem(PASSWORD_KEY, password); 
        } catch(e) {    
            console.log(e);
        }
    }; 
    static eliminarDatos=async()=>{
        try{
            await AsyncStorage.removeItem(USERNAME_KEY); 
            await AsyncStorage.removeItem(PASSWORD_KEY); 
            const returnValue = {'mail':user, 'password': pass};
            return returnValue;

        }catch(e){
            console.log(e);
        }
    }; 
    static automaticLogin=async()=>{
        try {
            let user = await AsyncStorage.getItem(USERNAME_KEY);
            let pass = await AsyncStorage.getItem(PASSWORD_KEY);
            let isValid;
            
            if(user == 'pato' && pass == 'uenche'){
                isValid = true;
            }else{
                isValid = false;
            }             
            return isValid; 
        } catch(e){
            return false;
        }
    };

    static obtenerDatos = async()=>{
        let user = await AsyncStorage.getItem(USERNAME_KEY);
        let pass = await AsyncStorage.getItem(PASSWORD_KEY);

        const returnValue = {'mail':user, 'password': pass};
        return returnValue;
    };
    }
