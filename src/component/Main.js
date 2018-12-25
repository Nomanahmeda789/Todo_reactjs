import React, { Component } from 'react'
import '../css/style.css'
import Todoitems from './Todoitems'
import Fire from './Fire'

export default class Todo extends Component {
    constructor(props) {
        super(props);
        this.removeall = this.removeall.bind(this)
        this.addNote = this.addNote.bind(this)
        this.deleteNote = this.deleteNote.bind(this)
        this.editNote = this.editNote.bind(this)
        this.updateNote = this.updateNote.bind(this)
        this.state = {
            textNote: '',
            currentNode: '',
            arr: [],
            count: 0,
            idKeys: []

        }
    }
    // text(text){
    //     this.setState({
    //         textNote:text.target.value
    //     })
    // }

    componentWillMount() {
        
        var ref = Fire.database().ref('item')
        ref.on('value', (data) => {
            if(data.val()){
                var arr = Object.entries(data.val())
                console.log(arr, data.val())
            }else{
                var arr = [];
            }
                    this.setState({
                        arr
                    })
        })
    }

    addNote(e) {
        e.preventDefault();
        // console.log(this.state.textNote)


        this.state.textNote = this.input.value;
        this.input.value = ''
        if (this.state.textNote == "") {
            console.log("Empty")
        }
        else {

            var ref = Fire.database().ref("item")
            // ref.child('item'+index).set(val)
            ref.push({ item: this.state.textNote });

        }

    }

    removeall() {
      var ref=Fire.database().ref("item").remove();

    }
    deleteNote(index) {
         var ref=Fire.database().ref("item");
         ref.child(index).remove();
    }
    editNote(index) {

        this.state.count = index
       
    }
    updateNote(value) {
        var ref = Fire.database().ref("item");
        ref.child(this.state.count).update({item:value})
    }

    render() {
        

        return (
            <div>
                <div className="todo_div">
                    <h1 className="heading">Welcome To Todo App</h1>
                    <input type="text" placeholder="Enter Text....."
                        // onChange={(val)=>{
                        //     this.state.currentNode=val.target.value
                        //     // console.log(this.state.currentNode)
                        // }}
                        ref={(val) => {
                            this.input = val;

                        }}
                        className="inp form-control" />
                    <button type="button" onClick={this.addNote} className="btn btn-danger butn">+ Add</button>
                    <button type="button" onClick={this.removeall} className="btn btn-danger butn">Remove All</button>
                    <hr />

                    <ul className="u_list" id="ulist" >

                        {
                           

                            (this.state.arr.length) ? this.state.arr.map((val, index) => {


                                return <Todoitems
                                    key={index}
                                    index={index}
                                    deleteNote={()=>this.deleteNote(val[0])}
                                    val={val[1].item}
                                    editNote={()=>this.editNote(val[0])}
                                    updateNote={this.updateNote}
                                />

                            })
                            : <h1>There is no item in the list</h1>
                        }

                    </ul>
                </div>
                {/* <i class="fa fa-trash" aria-hidden="true"></i> */}

            </div>
        )
    }
}
