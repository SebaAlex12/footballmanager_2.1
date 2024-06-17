import { useState } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';
import 'moment/locale/pl';

import MatchesBettingsList from "./MatchesBettingsList";
import MatchesItemShortInfo from './MatchesItemShortInfo';
import MatchesBettingAddForm from './MatchesBettingAddForm';
import ModalBox from '../../../common/ModalBox';

const MatchesItem = ({match}) => {
    const [ toggleResults, setToggleResults ] = useState(false);
    const [ toggleBettingModal, setToggleBettingModal ] = useState(false);

    const userId = useSelector(state=>state.auth.userId);

    const { 
        _id, 
        firstTeamName, 
        secondTeamName, 
        date, 
        firstTeamFirstHalfGoals, 
        firstTeamSecondHalfGoals, 
        firstTeamOvertimeGoals,
        secondTeamFirstHalfGoals, 
        secondTeamSecondHalfGoals, 
        secondTeamOvertimeGoals,
        closed,
        bettings } = match;

    const myBetting = bettings.find(betting => {
        
        if(betting.userId === userId){
            // console.log('rec exists',betting.userId + ' - ' + userId);
            return betting;
        }else{
            // console.log('no rec exists',betting.userId + ' - ' + userId);
            return;
        }

    });

    // console.log('bettings',bettings);
    // console.log('user id', userId);
    // console.log('my betting',myBetting);

    const matchInfoContent = (
        <div className="match-info-box">
            <header>
                <div className="match-date"><Moment locale="pl">{ date }</Moment></div>
                <MatchesItemShortInfo match={match} />
                <div className="actions">
                    <button onClick={() => setToggleResults(prev=>!prev)}>Szczegóły</button>
                    <button onClick={() => setToggleBettingModal(prev=>!prev)}>Obstaw wynik</button>
                    { toggleBettingModal && 
                        <ModalBox closeHandler={() => setToggleBettingModal(false)}>
                            <MatchesBettingAddForm 
                                matchId={_id}
                                firstTeamName={firstTeamName} 
                                secondTeamName={secondTeamName} 
                                myBetting={myBetting} 
                            />
                        </ModalBox> }
                </div>
            </header>
            {
            toggleResults &&
                    <div className="results">
                        <div className="names">
                            <div className="first-team">{ firstTeamName }</div>
                            <div className="second-team">{ secondTeamName }</div>
                        </div>
                        <div className="first-half">
                            <div className="label">Pierwsza połowa</div>
                            <div className="value">
                                <div className="first-team">{ firstTeamFirstHalfGoals }</div>
                                <div className="second-team">{ secondTeamFirstHalfGoals }</div> 
                            </div>  
                        </div>
                        <div className="second-half">
                            <div className="label">Druga połowa</div>
                            <div className="value">
                                <div className="first-team">{ firstTeamSecondHalfGoals }</div>
                                <div className="second-team">{ secondTeamSecondHalfGoals }</div> 
                            </div>               
                        </div>
                        <div className="first-half">
                            <div className="label">Dogrywka</div>
                            <div className="value">
                                <div className="first-team">{ firstTeamOvertimeGoals }</div>
                                <div className="second-team">{ secondTeamOvertimeGoals }</div> 
                            </div>
                    
                        </div>
                    </div>
            }
        </div>
    )
    
    return(
        <div className="item-box">
            { matchInfoContent }
            <MatchesBettingsList bettings={bettings} firstTeamName={firstTeamName} secondTeamName={secondTeamName}/>
        </div>
    )
}
export default MatchesItem;