import { authActions } from './auth-slice';
import { uiActions } from './ui-slice';

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
                    throw new Error('something went wrong');
                }

                const data = await response.json();

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