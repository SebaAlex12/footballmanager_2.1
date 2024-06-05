import { authActions } from './auth-slice';
import { uiActions } from '../ui/ui-slice';

export const registerUserData = (registerData) => {
    return async (dispatch) => {

        const request = async() => {
            const response = await fetch('/api/users/register',{
                headers: {
                    'Content-type': 'application/json; charset=UTF-8',
                },
                method: "POST",
                body: JSON.stringify(registerData)
            });

            if(!response.ok){
                throw new Error('Something went wrong with xhr');
            }

            const data = await response.json();

            console.log('data action creator',data);
    
            if(data.success === true){
                dispatch(uiActions.setNotification({ messages: {message:'Użytkownik został zarejestrowany'}, status: 'success' }))
            }
    
            if(data.success === false){
                dispatch(uiActions.setNotification({ messages: data.errors, status: 'failed' }))
            }
        }
        
        try{
            await request();            
        }catch(error){
            dispatch(uiActions.setNotification({ messages: [error], status: 'failed' }))
            // console.log('error',error);
        }
  
    }
}

export const checkUserData = (loginData) => {
    return async(dispatch) => {
        // console.log('login data',loginData);
        // dispatch(uiActions.setNotification({
        //     messages: ['Trwa wczytywanie użytkownika...'],
        //     status: 'success'
        // }));

        const sendRequest = async() => {

                const response = await fetch('/api/users/login',{
                    headers: {
                        'Content-type': 'application/json; charset=UTF-8',
                    },
                    method:'POST',
                    body: JSON.stringify(loginData)
                });

                if(!response.ok){
                    // const data = await response.json();
                    // console.log('response data',data);
                    throw new Error('Something went wrong with xhr');
                }

                const data = await response.json();

                console.log('data action creator',data);

                if(data.success === true){
                    dispatch(authActions.loginUser({ isAuth: true, token:data.token }));
                    dispatch(uiActions.setNotification({ messages: {message:'Użytkownik został zalogowany'}, status: 'success' }))
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