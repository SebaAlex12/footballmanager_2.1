import styled from "styled-components";

const MatchesBettingAddFormStyled = styled.div`
    .betting-edit-form-box{
            .form-group{
                display:flex;
                justify-content:space-around;
            }
            .form-group label{
                font-weight: 600;
                font-size: 25px;
                color: #2b6ba5;
                width: 240px;
                text-align: center;
                margin-bottom: 24px;
            }
            .form-group.center{
                justify-content:center;
            }
            .form-group.title{
                font-size: 20px;
                font-weight: 600;
                color: green;
            }
            .actions{
                display: flex;
                justify-content: end;
                margin-top: 20px;
            }
    }
`;

export default MatchesBettingAddFormStyled;