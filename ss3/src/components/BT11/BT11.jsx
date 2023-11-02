import React, { Component } from 'react'
import ListStudent from './ListStudent'
import Search from './Search'
import Sort from './Sort'

export default class BT11 extends Component {
    constructor(){
        super()
        this.state={
            students:[
                {
                    name:"a",
                    age:18,
                    id: "001"
                },
                {
                    name:"b",
                    age:20,
                    id: "002"
                },
                {
                    name:"c",
                    age:19,
                    id: "003"
                },
                {
                    name:"d",
                    age:21,
                    id: "004"
                }
            ],
            searchValue:"",
            sort:""
        }
    }
    searchValue=(value)=>{
        this.setState({
            searchValue:value
        })
    }
    sortAge=(value)=>{
        this.setState({
            sort:value
        })
    }
  render() {
    let student = []
    if(this.state.searchValue != ""){
        this.state.sort = ""
        let result = this.state.students.filter((item)=>{
            return item.name.indexOf(this.state.searchValue) != -1
        })
        if(result.length == 0){
            student = this.state.students
        }else{
            student = result
        }

    }else{
        student = this.state.students
    }

    if(this.state.sort != ""){
        if(this.state.sort == "tang"){
            let result = this.state.students.sort((a,b)=>a.age - b.age)
            student = result
        }else{
            let result = this.state.students.sort((a,b)=>b.age - a.age)
            student = result
        }
    }
        
    

    return (
      <>
      <Sort sort={this.sortAge}></Sort>
      <Search search={this.searchValue}></Search>
      <ListStudent students={student}></ListStudent>
      </>
    )
  }
}
