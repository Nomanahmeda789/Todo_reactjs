import React,{Component} from 'react'
import '../css/style.css'

export default class Todoitems extends Component{
    constructor(props){
        super(props)
        // this.update=this.update.bind(this)
    
        this.state={
            updateText:'',
            
        }
        
        
    }
    
    
    update(){
        this.state.updateText=this.input.value;
        this.props.updateNote(this.state.updateText)
        this.input.value=''
        
    }
    render(){
        return(
        <li  className="li_list">{this.props.index+1} ) {this.props.val}
            
                                    <button className="cross"
                                        data-toggle="modal" data-target="#myModal"
                                        onClick={(e)=>{
                                            e.stopPropagation();
    
                                            this.props.editNote(this.props.index)
    
                                        }}

                                    ><img src={require('../img/2.png')} width="20px" height="26px" /></button>        


                                    <button type="button" class="cross" data-toggle="modal" data-target="#myModal1">
                                    <img src={require('../img/111.png')} width="20px" height="26px" />
                                    </button>    
                                    

            {/* Edit modal                         */}
            <div className="modal fade" id="myModal">
                 <div className="modal-dialog modal-dialog-centered">
                     <div className="modal-content">
                     
                     <div className="modal-header">
                         <h4 className="modal-title">E
                         dit Your item</h4>
                         <button type="button" className="close" data-dismiss="modal">&times;</button>
                     </div>
                     
                     <div className="modal-body">
                         <input type="text" className="inp form-control"
                         ref={(val)=>{
                            this.input=val;

                         }}
                         placeholder="Edit Your Item"
                         /> 
                     </div>
                     
                     <div className="modal-footer">
                         <button type="button"
                         onClick={ (e)=>{
                            e.stopPropagation()
                            this.update()    
                        } }
                         className="btn btn-secondary"
                          data-dismiss="modal">Update</button>
                     </div>
                     
                     </div>
                 </div>
             </div>

             {/* delete modal */}
             {/* <!-- Button to Open the Modal --> */}
            

            {/* <!-- The Modal --> */}
            <div class="modal" id="myModal1">
            <div class="modal-dialog">
                <div class="modal-content">
                <div className="modal-header">
                         <h4 className="modal-title">Pop up</h4>
                </div>

                {/* <!-- Modal body --> */}
                <div class="modal-body">
                    Are you sure u want to delete?
                </div>

                {/* <!-- Modal footer --> */}
                <div class="modal-footer">
                    <button type="button" class="btn btn-success" data-dismiss="modal"
                    onClick={(e)=>{
                        e.stopPropagation();

                        this.props.deleteNote(this.props.index)
                    }}
                    >Yes</button>
                    <button type="button" class="btn btn-danger" data-dismiss="modal">No</button>
                    
                    {/* <button className="cross" 
                    }}></button> */}
                </div>

                </div>
            </div>
            </div>          
 

        </li>
        )
    }
}

