import { Comment, Avatar } from 'antd';
import moment from 'moment';
import axios from 'axios';
import FormEditor from './form-editor'
import CommetDesc from './commet-desc'
import BoardList from './board-list'
import { BoardListRequest } from '../../config/request'


class Board extends React.Component {

    render() {
        const { boardsData } = this.props;

        return (
            <div className='board-main clearfix'>
                <div className='board-container f-l'>
                    {boardsData.length > 0 && <BoardList boardsData={boardsData} />}
                    <FormEditor />
                </div>
                <CommetDesc />
            </div>
        );
    }
}

Board.getInitialProps = async function() {
    
    const boardList = await axios.get(BoardListRequest);
	return{
        boardsData: boardList.data.list
    }
}
  
export default Board