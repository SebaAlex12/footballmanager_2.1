import { useState } from 'react';

const MatchesBettingsList = ({bettings}) => {
    const [ toggle, setToggle ] = useState(false);

    return(
        <div className="bettings-box">
            <div className="actions">
                <div className="your-betting">Obstawiłeś:</div>
                <div>Zakłady:</div><button onClick={() => setToggle(prev => !prev)}>Pokaż / ukryj</button>
            </div>
            { toggle &&
                <table>
                            <tr>
                                <th>Gracz</th>
                                <th>Data</th>
                                <th>I polowa I drużyna</th>
                                <th>I polowa II drużyna</th>
                                <th>II polowa I drużyna</th>
                                <th>II polowa II drużyna</th>
                                <th>dogrywka I drużyna</th>
                                <th>dogrywka II drużyna</th>
                            </tr>
                        { 
                        bettings.map(betting => (
                                <tr>
                                    <td className="user-name">{ betting.userName }</td>
                                    <td className="date">{ betting.date }</td>
                                    <td className="col">{ betting.firstTeamFirstHalfGoals }</td>
                                    <td className="col">{ betting.secondTeamFirstHalfGoals }</td>
                                    <td className="col">{ betting.firstTeamSecondHalfGoals }</td>
                                    <td className="col">{ betting.secondTeamSecondHalfGoals }</td>
                                    <td className="col">{ betting.firstTeamOvertimeGoals }</td>
                                    <td className="col">{ betting.secondTeamOvertimeGoals }</td>
                                </tr>
                            ))
                        } 
                </table>
            }
        </div>
        
    )
}
export default MatchesBettingsList;