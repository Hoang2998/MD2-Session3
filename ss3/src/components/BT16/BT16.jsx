import React, { Component } from 'react'

export default class BT16 extends Component {
    constructor(){
        super()
        this.state={
            chieucao:"",
            cannang:"",
            ketqua:""
        }
    }
    addChieuCao=(event)=>{
        this.setState({
            chieucao:event.target.value
        })

    }
    addCannang=(event)=>{
        this.setState({
            cannang:event.target.value
        })
    }
    result=()=>{
        let result = this.state.cannang/(this.state.chieucao*this.state.chieucao)
        console.log(result);
        if(result > 0 && result < 18.5 ){
            this.setState({
                ketqua:"gay"
            })
        }else if(result < 24.9){
            this.setState({
                ketqua:"binh thuong"
            })
        }else{
            this.setState({
                ketqua:"beo phi"
            })
        }
    }
  render() {
    return (
      <>
      <input type="text" onChange={this.addChieuCao} placeholder='chieu cao'/>
      <input type="text" onChange={this.addCannang} placeholder='can nang'/>
      <button onClick={this.result}>ket qua</button>
      <p>Tinh trang suc khoe:</p>
      <p>{this.state.ketqua}</p>
      </>
    )
  }
}
