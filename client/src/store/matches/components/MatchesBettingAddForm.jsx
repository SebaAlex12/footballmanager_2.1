import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import { setBettingByMatchId } from '../matches-actions';
import MatchesBettingAddFormStyled from '../css/MatchesBettingAddFormStyled';

const MatchesBettingAddForm = ({ firstTeamName, secondTeamName, myBetting, matchId, closeHandler }) => {

    // console.log('myBetting',myBetting);

    const [ firstTeamFirstHalfGoals, setFirstTeamFirstHalfGoals ] = useState(parseInt(myBetting ? myBetting.firstTeamFirstHalfGoals : 0));
    const [ secondTeamFirstHalfGoals, setSecondTeamFirstHalfGoals ] = useState(parseInt(myBetting ? myBetting.secondTeamFirstHalfGoals : 0));
    const [ firstTeamSecondHalfGoals, setFirstTeamSecondHalfGoals ] = useState(parseInt(myBetting ? myBetting.firstTeamSecondHalfGoals : 0));
    const [ secondTeamSecondHalfGoals, setSecondTeamSecondHalfGoals ] = useState(parseInt(myBetting ? myBetting.secondTeamSecondHalfGoals : 0));
    const [ firstTeamOvertimeGoals, setFirstTeamOvertimeGoals ] = useState(parseInt(myBetting ? myBetting.firstTeamOvertimeGoals : 0));
    const [ secondTeamOvertimeGoals, setSecondTeamOvertimeGoals ] = useState(parseInt(myBetting ? myBetting.secondTeamOvertimeGoals : 0));

    const { userId, userName } = useSelector(state=>state.auth);

    const dispatch = useDispatch();

    const saveBettingHandler = (event) => {

        event.preventDefault();

        const newBetting = {
            matchId,
            userId,
            userName,
            firstTeamFirstHalfGoals,
            secondTeamFirstHalfGoals,
            firstTeamSecondHalfGoals,
            secondTeamSecondHalfGoals,
            firstTeamOvertimeGoals,
            secondTeamOvertimeGoals
        }
        dispatch(setBettingByMatchId(newBetting));
        closeHandler();
    }

    return(
        <MatchesBettingAddFormStyled>
            <div className="betting-edit-form-box">
                <h1>Zakład meczowy</h1>
                <form action="">
                    <div className="form-group">
                        <label htmlFor="">{ firstTeamName }</label>
                        <label htmlFor="">{ secondTeamName }</label>
                    </div>
                    <div className="form-group center title">Pierwsza połowa</div>
                    <div className="form-group">
                        <input onChange={(event) => setFirstTeamFirstHalfGoals(event.target.value)} type="number" min="0" max="10" name="firstTeamFirstHalfGoals" value={firstTeamFirstHalfGoals}/>
                        <input onChange={(event) => setSecondTeamFirstHalfGoals(event.target.value)} type="number" min="0" max="10" name="secondTeamFirstHalfGoals" value={secondTeamFirstHalfGoals}/>
                    </div>
                    <div className="form-group center title">Druga połowa</div>
                    <div className="form-group">
                        <input onChange={(event) => setFirstTeamSecondHalfGoals(event.target.value)} type="number" min="0" max="10" name="firstTeamSecondHalfGoals" value={firstTeamSecondHalfGoals}/>
                        <input onChange={(event) => setSecondTeamSecondHalfGoals(event.target.value)} type="number" min="0" max="10" name="secondTeamSecondHalfGoals" value={secondTeamSecondHalfGoals}/>
                    </div>
                    <div className="form-group center title">Dogrywka</div>
                    <div className="form-group">
                        <input onChange={(event) => setFirstTeamOvertimeGoals(event.target.value)} type="number" min="0" max="10" name="firstTeamOvertimeGoals" value={firstTeamOvertimeGoals}/>
                        <input onChange={(event) => setSecondTeamOvertimeGoals(event.target.value)} type="number" min="0" max="10" name="secondTeamOvertimeGoals" value={secondTeamOvertimeGoals}/>
                    </div>
                    <div className="actions">
                        <button onClick={saveBettingHandler}>Zapisz wynik</button>
                    </div>
                </form>
            </div>
        </MatchesBettingAddFormStyled>
    )
}

export default MatchesBettingAddForm;