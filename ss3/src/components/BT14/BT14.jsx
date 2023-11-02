import React, { Component } from 'react'

export default class BT14 extends Component {
    constructor(){
        super()
        this.state={
            tabs:[
                {
                    tab:"thethao",
                    text:"bongda,bongban,bongro"
                },
                {
                    tab:"vanhoa",
                    text:"van,su,dia"
                },
                {
                    tab:"khoahoc",
                    text:"hoa,li,dien"
                },
            ],
            tab:""
        }
    }
    changeTab1=()=>{
        this.setState({
            tab:1
        })
    }
    changeTab2=()=>{
        this.setState({
            tab:2
        })
    }
    changeTab3=()=>{
        this.setState({
            tab:3
        })
    }
  render() {
    let text =""
    if(this.state.tab != ""){
        if(this.state.tab == 1){
            text = this.state.tabs[0].text
        }else if(this.state.tab == 2){
            text = this.state.tabs[1].text
        }else if(this.state.tab == 3){
            text = this.state.tabs[2].text
        }
    }else{
        text = "moi ban chon tab"
    }
    return (
      <>
      <button onClick={this.changeTab1}>The thao</button>
      <button onClick={this.changeTab2}>Van Hoa</button>
      <button onClick={this.changeTab3}>Khoa hoc</button>
      <p>{text}</p>
      </>
    )
  }
}
