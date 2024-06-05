import { useSelector } from 'react-redux';

import MatchesItem from './MatchesItem';

import MatchesStyled from '../css/MatchesStyled';

const MatchesList = () => {

    const matches = useSelector(state=>state.matches.matches);

    const list = matches.length > 0 && matches.map(match => <MatchesItem key={match._id} match={ match } />);

    return (
        <MatchesStyled>
            <div className="matches-box">
                { list }
            </div>
        </MatchesStyled>
    )
}
export default MatchesList;