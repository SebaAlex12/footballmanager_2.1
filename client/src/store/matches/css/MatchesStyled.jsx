import styled from 'styled-components';

const MatchesStyled = styled.div`
    .matches-box{
        display:flex;
        flex-direction:column;
        color:#fff;
        header{
            display:flex;
            justify-content:space-between;
        }
        .item-box{
            background-color:#2b6ca5;
            margin:5px;
            padding:15px;
            border-radius:10px;
        .match-date{
            font-size: 19px;
            display: flex;
            justify-content: center;
            font-weight: 600;
            color:#ffe000;
        }
        .results{
            .names{
                display:grid;
                grid-template-columns:repeat(2, 1fr);
                .first-team, .second-team{
                    display:flex;
                    justify-content:center;
                    font-size:40px;
                }
            }
            .first-half, .second-half{
                .label{
                    display: flex;
                    justify-content: center;
                    font-size: 20px;
                    background-color: #ffffff;
                    color: #000000;
                    font-weight: 600;
                }
                .value{
                    display:grid;
                    grid-template-columns:repeat(2, 1fr);
                    text-align:center;
                    font-size:30px;
                }
            }
        }

        }
    }

    .bettings-box{
        font-size: 18px;
        table{
            width: 100%;
            background-color: #a7a5a5;
            padding: 10px;
            text-align:center;
            tr:nth-child(2n){
                background-color:grey;
            }
            th{
                font-size: 15px;
                font-weight: 600;
                max-width: 50px;
                background-color: #767676;
                padding: 10px 0px;
            }
            .player{
                width:200px;
                max-width:unset;
            }
            .date{
                width:170px;
            }
        }
        .actions{
            display:flex;
            justify-content:space-between;
            align-items:center;
            gap:5px;
        }
    }
    .short-info-results{
        display:flex !important;
        gap:5px;
        font-size:20px;
        color:#5fff5f;
        align-items: baseline;
        .teams{
            display:flex;
            gap:5px;   
            align-items: baseline;       
            .football-icon img{
                max-width:50px;
                align-items: baseline;
            }  
        }
        form{
            display:flex;
            align-items: baseline;
            input{
                background-color: #2b6ca5;
                color: #fff;
                font-size:20px;
                width:35px;
            }
        }
        .warnning{
            background-color: #dd4444;
            color: #fff;
        }
    }
    .actions{
        display:flex;
        align-items: center;
    }
    .short-betting-info{
        display: flex;
        gap: 5px;
        font-size: 19px;
        color: #000;
        font-weight: 600;
        .teams{
            display:flex;
            gap:5px;            
        }
    }
`;

export default MatchesStyled;