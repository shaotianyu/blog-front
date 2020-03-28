import React, { Component } from 'react';
import dynamic from 'next/dynamic'

const MarkEditor = dynamic(
  import('./mark-editor'),
  {
    ssr: false  
  }
)

class FormEditor extends Component{
    render(){
        return(
            <div>
                <div className='mark-edit-wrap'>
                    <MarkEditor />
                </div>
            </div>
        )
    }
}

export default FormEditor
