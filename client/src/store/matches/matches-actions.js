import { uiActions } from '../ui/ui-slice';
import { matchesActions } from './matches-slice';

export const fetchMatches = () => {
    return async(dispatch) => {
        const request = async() => {
            const response = await fetch('/api/matches/');

            if(!response){
                throw new Error('Something went wrong with xhr');
            }

            const data = await response.json();

            if(data.success === true){
                dispatch(matchesActions.addMatches(data.values));
                dispatch(uiActions.setNotification({ messages: {message:'Mecze zostały wczytane.'}, status: 'success' }))
            }
    
            if(data.success === false){
                dispatch(uiActions.setNotification({ messages: data.errors, status: 'failed' }))
            }
        }

        try{
            await request();
        }catch(error){
            dispatch(uiActions.setNotification({ messages: [error], status: 'failed' }))
        };

    }
}
export const setMatchById = (matchData) => {
    return async dispatch => {
        const sendRequest = async () => {
            const request = await fetch(`api/matches/update/${matchData._id}`,{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8'
                },
                method:"POST",
                body:JSON.stringify(matchData)
            });

            if(!request.ok){
                throw new Error('Something went wrong with xhr');
            }
            
            const data = await request.json();

            if(data.success === true){
                dispatch(uiActions.setNotification({ messages: {message:'Zakład został zapisany'}, status: 'success' }));
                dispatch(matchesActions.updateMatches(data.match));
            }

            if(data.success === false){
                dispatch(uiActions.setNotification({ messages: data.errors, status: 'failed' }))
            }

        }

        try{
            await sendRequest();
        }catch(error){
            dispatch(uiActions.setNotification({
                messages: [error],
                status: 'failed'
            }));
        }
    } 
}
export const setBettingByMatchId = (bettingData) => {
    return async dispatch => {
        const sendRequest = async () => {
            const request = await fetch(`/api/matches/bettings/match/${bettingData.matchId}`,{
                headers:{
                    'Content-type': 'application/json; charset=UTF-8',
                },
                method:"POST",
                body:JSON.stringify(bettingData)
            });
            

            if(!request.ok){
                throw new Error('Something went wrong with xhr');
            }

            const data = await request.json();

            // console.log('data action creator',data);

            if(data.success === true){
                dispatch(uiActions.setNotification({ messages: {message:'Zakład został zapisany'}, status: 'success' }));
                dispatch(matchesActions.updateMatches(data.match));
            }

            if(data.success === false){
                dispatch(uiActions.setNotification({ messages: data.errors, status: 'failed' }))
            }

        }

        try{
            await sendRequest();
        }catch(error){
            dispatch(uiActions.setNotification({
                messages: [error],
                status: 'failed'
            }));
        }

    }
}