import React, { Component } from 'react'
import Questions from './Questions'
import Answer from './Answer'

export default class BT17 extends Component {
    constructor(){
        super()
        this.state={
            questions:[
                {
                    ques:"1+1=",
                    ans:"2"
                },
                {
                    ques:"1+2=",
                    ans:3
                },
                {
                    ques:"1+4=",
                    ans:5
                },
                {
                    ques:"1+7=",
                    ans:8
                },
            ],
            number:0,
            poin:0,
          
        }
    }
    anserQuestion=(value)=>{
        // console.log(value);
        if( this.state.questions[this.state.number].ans == value){
            // console.log("1111111");
            if(this.state.number<3){
                this.setState({
                    number:this.state.number + 1,
                    poin:this.state.poin + 150
                })
            }
            
        }else{
            if(this.state.number<3){
                this.setState({
                    number:this.state.number + 1
                })
            }
            
        }

        

    }
  render() {
    let question = this.state.questions[this.state.number].ques
    return (
      <>
      <Questions question = {question}></Questions>
      <Answer anserQuestion = {this.anserQuestion}></Answer>
      <p>Diem cua ban:  {this.state.poin}</p>
      </>
    )
  }
}
