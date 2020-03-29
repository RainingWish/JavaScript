import React from 'react';
import 'antd/dist/antd.css';
import { Input } from 'antd';
import { Button } from 'antd';
import { List } from 'antd';

//UI组件（傻瓜组件，没有逻辑）
//无状态组件：只有render function 没有其他的

const TodoListUI = (props) => {
    return (
        <div style={{ marginLeft: '10px', marginTop: '10px' }}>
            <div>
                <Input
                    value={props.inputValue}
                    placeholder='todo info'
                    style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
                    onChange={props.handleInputChange}
                />
                <Button type="primary" onClick={props.handleButtonClick}>Submit</Button>
            </div>
            <List
                style={{ width: '385px' }}
                bordered
                dataSource={props.list}
                renderItem={(item, index) => <List.Item onClick={() => { props.handleItemDelete(index) }}>{item}</List.Item>}
            />
        </div>
    )
}

// class TodoListUI extends Component {

//     render() {
//         return (
//             <div style={{ marginLeft: '10px', marginTop: '10px' }}>
//                 <div>
//                     <Input
//                         value={this.props.inputValue}
//                         placeholder='todo info'
//                         style={{ width: '300px', marginRight: '10px', marginBottom: '10px' }}
//                         onChange={this.props.handleInputChange}
//                     />
//                     <Button type="primary" onClick={this.props.handleButtonClick}>Submit</Button>
//                 </div>
//                 <List
//                     style={{ width: '385px' }}
//                     bordered
//                     dataSource={this.props.list}
//                     renderItem={(item, index) => <List.Item onClick={(index) => { this.props.handleItemDelete(index) }}>{item}</List.Item>}
//                 />
//             </div>
//         )
//     }
// }

export default TodoListUI;