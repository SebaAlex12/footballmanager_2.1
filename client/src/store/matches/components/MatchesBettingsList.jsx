import { useState } from 'react';
import { useSelector } from 'react-redux';
import Moment from 'react-moment';

const MatchesBettingsList = ({firstTeamName, secondTeamName, bettings}) => {
    const [ toggle, setToggle ] = useState(false);
    const { userId } = useSelector(state => state.auth);

    const myBetting = bettings.find(betting => betting.userId === userId);

    const shortBettingInfo = (
        <div className="short-betting-info">
            <div className="teams">
                <div className="team">{ firstTeamName }</div>
                <div> : </div>
                <div className="team">{ secondTeamName }</div>
            </div>
            <div className="result">I[ { myBetting && myBetting.firstTeamFirstHalfGoals } : { myBetting && myBetting.secondTeamFirstHalfGoals } ]</div>
            <div className="result">II[ { myBetting && myBetting.firstTeamSecondHalfGoals } : { myBetting && myBetting.secondTeamSecondHalfGoals } ]</div>
            <div className="result">III[ { myBetting && myBetting.firstTeamOvertimeGoals } : { myBetting && myBetting.secondTeamOvertimeGoals } ]</div>
        </div>
    )

    return(
        <div className="bettings-box">
            <div className="actions">
                <div className="your-betting">Obstawiłeś: { shortBettingInfo }</div>
                <button onClick={() => setToggle(prev => !prev)}>Zakłady</button>
            </div>
            { toggle &&
                <table>
                            <thead>
                                <tr>
                                        <th className="player">Gracz</th>
                                        <th className="date">Data</th>
                                        <th>I polowa I drużyna</th>
                                        <th>I polowa II drużyna</th>
                                        <th>II polowa I drużyna</th>
                                        <th>II polowa II drużyna</th>
                                        <th>dogrywka I drużyna</th>
                                        <th>dogrywka II drużyna</th>
                                </tr>
                            </thead>
                        { 
                        bettings.map(betting => (
                            <tbody key={betting._id}>
                                <tr>
                                        <td className="user-name">{ betting.userName }</td>
                                        <td className="date"><Moment format="YYYY/MM/DD hh:mm">{ betting.date }</Moment></td>
                                        <td className="col">{ betting.firstTeamFirstHalfGoals }</td>
                                        <td className="col">{ betting.secondTeamFirstHalfGoals }</td>
                                        <td className="col">{ betting.firstTeamSecondHalfGoals }</td>
                                        <td className="col">{ betting.secondTeamSecondHalfGoals }</td>
                                        <td className="col">{ betting.firstTeamOvertimeGoals }</td>
                                        <td className="col">{ betting.secondTeamOvertimeGoals }</td>
                                </tr>
                            </tbody>
                            ))
                        } 
                </table>
            }
        </div>
        
    )
}
export default MatchesBettingsList;