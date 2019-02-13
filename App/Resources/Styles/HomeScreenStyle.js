
import { StyleSheet } from "react-native";
import Colors from "../Colors";

const HomeScreenStyle = StyleSheet.create({

    logo_view: { flex: 0.7, backgroundColor: Colors.orange, justifyContent: 'center', alignItems: 'center', borderBottomLeftRadius: 40 },
    app_name: { color: Colors.white, fontSize: 20, fontWeight: 'bold', marginTop: '5%' },
    button: { borderRadius: 20, backgroundColor: Colors.orange, padding: 10, justifyContent: 'center', alignItems: 'center',marginTop:'10%' },
    button_text: { color: Colors.white, fontWeight: "bold", textAlign: "center" },
    info_text:{color:Colors.orange,fontSize:16,textAlign:'center',marginStart:'5%',marginEnd:'5%'}
});

export default HomeScreenStyle;