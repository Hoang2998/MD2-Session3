import React, { Component } from 'react'
import Search from './components/Search'
import Sort from './components/Sort'
import ListStudentS from './components/ListStudentS'
import AddStudent from './components/AddStudent'




export default class App extends Component {
  constructor(){
    super()
    this.state = {
      student:[
        {
          name:"ao",
          age:20,
          id:"001"
        },
        {
          name:"bh",
          age:18,
          id:"002"
        },
        {
          name:"hieu",
          age:19,
          id:"003"
        },
        {
          name:"cuong",
          age:24,
          id:"004"
        },
      ],
      searchValue:"",
      sort:"",
    }
  }

  // khởi tạo một cái function
  searchDir=(value)=>{
      console.log("value",value);
      this.setState({
        searchValue:value,
      })
  }

  Sort=(value)=>{
    this.setState({
      sort:value
    })
  }

  addStudent=(obj)=>{
    console.log(obj);
    let newArray = [...this.state.student]
    newArray.push(obj)
    this.setState({
      student:newArray
    })
    console.log(this.state.student);
  }

  render() {
    let student=[];
    if(this.state.searchValue != ""){
      this.state.sort=""
      let result = this.state.student.filter((item)=>{
        return item.name.indexOf(this.state.searchValue) != -1;
      });
      if(result.length == 0){
        student= this.state.student;
      }else{
        student = result;
      }
    }else{
      student = this.state.student
    }
    if(this.state.sort != ""){
      if(this.state.sort == "name"){
        let result = this.state.student.sort((a,b)=>{
        if(a.name.split(" ")[a.name.split(" ").length -1] > b.name.split(" ")[b.name.split(" ").length -1]){
          return 1
        }else if(a.name.split(" ")[a.name.split(" ").length -1] == b.name.split(" ")[b.name.split(" ").length -1]){
          return 0
        } else{
          return -1
        } 
        })
        student = result
      }else if(this.state.sort == "age"){
        let result = this.state.student.sort((a,b)=>a.age - b.age)
        student = result
      }
    }
    
    console.log(student);
    return (
      <div>
          <AddStudent Add={this.addStudent}></AddStudent>
          <Search search={this.searchDir}></Search>
          <Sort sort={this.Sort}></Sort>
          <ListStudentS student={student} ></ListStudentS>
      </div>
    )
  }
}
