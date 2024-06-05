const MatchesItemShortInfo = ({match}) => {
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
    return(
        <div className="short-info-results">
            <div className="teams">
                <div className="team">{ firstTeamName }</div>
                <div> : </div>
                <div className="team">{ secondTeamName }</div>
            </div>
            <div className="result">
                I[ { firstTeamFirstHalfGoals } : { secondTeamFirstHalfGoals } ]
            </div>
            <div className="result">
                II[ { firstTeamSecondHalfGoals } : { secondTeamSecondHalfGoals } ]
            </div>
            <div className="result">
                III[ { firstTeamOvertimeGoals } : { secondTeamOvertimeGoals } ]
            </div>
        </div>
    )
}
export default MatchesItemShortInfo;