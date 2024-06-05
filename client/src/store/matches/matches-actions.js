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
                console.log('data',data);
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
