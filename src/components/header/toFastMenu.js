import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { actionFastList } from '../../redux';
import { useHistory } from 'react-router';
import { delay } from '../../tools';
import { useState } from 'react';


const ToFastStart = ({state, getList, classStyle}) => {

    const history = useHistory();
    const [count, changeCount] = useState(1);
    return(
        <div className={`smallLetters flexRow noMargin ${classStyle}`}>
            <div className="flexColumn marginOverSmall">
                <span className="marginOverSmall">Кількість блюд</span>
                <select onChange = {(e) => changeCount(e.target.value)}> 
                    <option value="1">1</option>
                    <option value="2">2</option>
                    <option value="3">3</option>
                    <option value="4">4</option>
                    <option value="5">5</option>
                    <option value="6">6</option>
                    <option value="7">7</option>
                    <option value="8">8</option>
                </select>
            </div>
            <button onClick={async () => { 
                await getList(count);
                await delay(1000);
                history.push("/fast-list/");
                }
            }
                >Запропонуйте</button>
        </div>
    )
}

const mapStateToProps = state => ({
    state:state,
});

const mapDispatchToProps = dispatch => bindActionCreators({
    getList: actionFastList,
}, dispatch);

const CToFastStart = connect(mapStateToProps, mapDispatchToProps)(ToFastStart);

export default CToFastStart;