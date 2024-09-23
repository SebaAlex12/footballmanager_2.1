import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { setMatchById } from '../matches-actions';

const MatchesItemShortInfo = ({match}) => {
    const { 
        _id, 
        firstTeamName, 
        secondTeamName,  
        closed
    } = match;

    const dispatch = useDispatch();

    const [ firstTeamFirstHalfGoals, setFirstTeamFirstHalfGoals ] = useState(match.firstTeamFirstHalfGoals);
    const [ firstTeamSecondHalfGoals, setFirstTeamSecondHalfGoals ] = useState(match.firstTeamSecondHalfGoals);
    const [ firstTeamOvertimeGoals, setFirstTeamOvertimeGoals ] = useState(match.firstTeamOvertimeGoals);
    const [ secondTeamFirstHalfGoals, setSecondTeamFirstHalfGoals ] = useState(match.secondTeamFirstHalfGoals);
    const [ secondTeamSecondHalfGoals, setSecondTeamSecondHalfGoals ] = useState(match.secondTeamSecondHalfGoals);
    const [ secondTeamOvertimeGoals, setSecondTeamOvertimeGoals ] = useState(match.secondTeamOvertimeGoals);

    const matchUpdateHandler = (event) => {

        event.preventDefault();

        const data = {
            _id, 
            firstTeamFirstHalfGoals:+firstTeamFirstHalfGoals, 
            firstTeamSecondHalfGoals:+firstTeamSecondHalfGoals, 
            firstTeamOvertimeGoals:+firstTeamOvertimeGoals,
            secondTeamFirstHalfGoals:+secondTeamFirstHalfGoals, 
            secondTeamSecondHalfGoals:+secondTeamSecondHalfGoals, 
            secondTeamOvertimeGoals:+secondTeamOvertimeGoals
        }
        dispatch(setMatchById(data));
    }

    const matchCloseHandler = (event) => {
        event.preventDefault();
        if(window.confirm("Uwaga jak zablokujesz mecz nie bedziesz w stanie go odblokować")){
            dispatch(setMatchById({ _id, closed: 1 }))
        }
    }

    return(
        <div className="short-info-results">
            <div className="teams">
                { 
                closed ? <div className="image football-icon">
                    <img src={process.env.PUBLIC_URL + '/football.png'} alt="football-icon" />
                </div> : null }
                <div className="team">{ firstTeamName }</div>
                <div> : </div>
                <div className="team">{ secondTeamName }</div>
            </div>
            <form action="">
                <div className="result">
                    I[ <input type="number" onChange={(event) => setFirstTeamFirstHalfGoals(event.target.value)} name="firstTeamFirstHalfGoals" value={ firstTeamFirstHalfGoals }/> 
                    : <input type="number" onChange={(event) => setSecondTeamFirstHalfGoals(event.target.value)} name="secondTeamFirstHalfGoals" value={ secondTeamFirstHalfGoals }/> ]
                </div>
                <div className="result">
                    II[ <input type="number" onChange={(event) => setFirstTeamSecondHalfGoals(event.target.value)} name="firstTeamSecondHalfGoals" value={ firstTeamSecondHalfGoals }/> 
                    : <input type="number" onChange={(event) => setSecondTeamSecondHalfGoals(event.target.value)} name="secondTeamSecondHalfGoals" value={ secondTeamSecondHalfGoals }/> ]
                </div>
                <div className="result">
                    III[ <input type="number" onChange={(event) => setFirstTeamOvertimeGoals(event.target.value)} name="firstTeamOvertimeGoals" value={ firstTeamOvertimeGoals }/> 
                    : <input type="number" onChange={(event) => setSecondTeamOvertimeGoals(event.target.value)} name="secondTeamOvertimeGoals" value={ secondTeamOvertimeGoals }/> ]
                </div>
                <div className="actions">
                    <button onClick={matchUpdateHandler} >zapisz</button>
                    { closed !== 1 && <button onClick={matchCloseHandler}>zablokuj</button> }
                </div>
            </form>
        </div>
    )
}
export default MatchesItemShortInfo;