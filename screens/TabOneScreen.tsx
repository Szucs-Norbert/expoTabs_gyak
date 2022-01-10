import { useState } from 'react';
import {FlatList ,StyleSheet } from 'react-native';

import EditScreenInfo from '../components/EditScreenInfo';
import { Text, View } from '../components/Themed';
import { RootTabScreenProps } from '../types';

export default function TabOneScreen({ navigation }: RootTabScreenProps<'TabOne'>) {

  const[employees, setEmployees]= useState([
    {id:1, name: 'Para Péter', city:'Szolnok'},
    {id:2, name: 'Csendes Ferenc', city:'Szolnok'},
    {id:3, name: 'Vari László', city:'Szeged'},
    {id:4, name: 'Tombi Ernő', city:'Szarvas'},

  ]);

  const[projects, setProjects]= useState([
    {id:1,  title: "Triangle",employee_id: 1},
    {id:2,  title: "Piros Bt",employee_id: 1},
    {id:3,  title: "Kekw Zrt",employee_id: 2},
    {id:4,  title: "Marijóóóó",employee_id: 2},
    {id:5,  title: "Life-Style App",employee_id: 4},
    {id:1,  title: "Kígyóós",employee_id: 3},
  ]);

  const [actProject, setActProject]= useState([]);

  const onPressEmployeeItem=(item:any)=> {
    let act:any=[];
    projects.forEach(project=> {
      if (project.employee_id==item.id){
        
        act.push(project)
      }
    })
    setActProject(act);
    console.log(actProject)
  }

  const renderItem= ({item}:{item:any})=> (
    <View style={styles.employeeBox}>
        <Text style={styles.employeeItem} onPress={()=> onPressEmployeeItem(item)}>{item.name}</Text>
    </View>
  );

  const renderProjectItem = ({item}:{item:any})=> (
    <View>
        <Text style={styles.projectItem}>{item.title}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Dolgozók</Text>
      <View style={styles.separator} lightColor="#eee" darkColor="rgba(255,255,255,0.1)" />

      
      
      <FlatList
        data= {employees}
        renderItem={renderItem}
        style={styles.employeeList}
      />
      <Text style={styles.projectTitle}>Projectek</Text>

      <FlatList
        data={actProject}
        renderItem={renderProjectItem}
        style={styles.projectList}
      />

    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  separator: {
    marginVertical: 30,
    height: 1,
    width: '80%',
  },

  employeeItem:{
    backgroundColor:"grey",
    color:"white",
    width:"100%",
    textAlign:"center",
    padding:7,
    margin:5,
    borderBottomLeftRadius:10,
    borderTopLeftRadius:10,
    borderTopRightRadius:15,
    borderBottomRightRadius:15, 
  },

  employeeBox:{
    
  },

  employeeList:{
    width:175,
    margin:"auto"
  
  },

  projectTitle:{
    fontSize:20,
    fontWeight:"bold"
  },

  projectList:{
    width:"100%",
    textAlign:"center",
  },

  projectItem:{
    backgroundColor:"black",
    fontSize:15,
    color:"white",
    padding:15,
    marginTop:10,
    margin:"auto"
  }


});
