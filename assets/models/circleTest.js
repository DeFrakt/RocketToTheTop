import Draggable from 'react-native-draggable';



export default class App {  
    render(){
        return (
            <View >
                <Draggable x={75} y={100} renderSize={56} renderColor='black' renderText='A' isCircle shouldReverse onShortPressRelease={()=>alert('touched!!')}/> 
                <Draggable x={200} y={300} renderColor='red' renderText='B'/>
                <Draggable/>
            <Draggable x={50} y={50}>
                <YourComponent/>
            </Draggable>
            </View>
        );
    }
}    


