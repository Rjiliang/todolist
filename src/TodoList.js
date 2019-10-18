import React from 'react';
import TodoItem from './TodoItem'
class TodoList extends React.Component{

  constructor(props){ //组件创建的瞬间constructor函数会被调用
    super(props);
    this.state={  //state为组件中数据存放的位置
       list:[ ],     //向list中添加数据，网页的内容就跟着改变了       
       inputValue:""
    }
  }

  handleBtnClick(){
    //当前的this是button,必须将button的this绑定到组件的this(state的当前组件的属性)
    //this.state.list.push('hello world'); //当前的方法能够向state中添加数据，但是页面不会更改（原因是没有调用react的方法，默认react更改组件数据需要调用setState方法）
    this.setState({//当数据发生变化是react会自动的调用render函数，渲染页面
      list:[...this.state.list,this.state.inputValue],
      inputValue:''
    });
  }


  handleInputChange(e){
     this.setState({
       inputValue:e.target.value
     })
  }


  handleInputItemClick(index){
    const list = [...this.state.list]//在修改state时，建议复制一份数据进行修改，修改完毕后在重新设置state，不建议直接修改state源数据
    list.splice(index,1);
    this.setState({list});//es6当setState值的key和赋值的变量名称相同时可以简写
  }



  render() {
      return(  
                <div>
                  <div>
                    <input value={this.state.inputValue} onChange={this.handleInputChange.bind(this)}/>
                    <button onClick={this.handleBtnClick.bind(this)}>add</button>
                  </div>
                  <div>
                    <ul>
                      {this.state.list.map((item,index)=>{
                           // return <li key={index} onClick={this.handleInputItemClick.bind(this,index)}>{item}</li>//react 中要求每个li的key不同，不然会有警告
                          return <TodoItem  key={index} content={item}/>
                      })}
                    </ul>
                  </div>
                </div>
      );
    }
}

export default TodoList;
