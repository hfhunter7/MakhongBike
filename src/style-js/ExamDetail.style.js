import styled from 'styled-components';
import Button from "material-ui/Button";

export const ExamTitle = styled.div`
	font-size: 20px;
	padding: 2% 2% 2% 20px;
	
	@media (max-width: 767px) {
		margin-top: 15px;
		margin-bottom: 10px;
		font-size: 14px;
		font-weight: 500;
	}
`;

export const ContentTitle = styled.div`
    box-shadow: 0 1px 4px 0 rgba(0, 0, 0, 0.2);
    display: flex;
`;

export const ContentExamTitle = styled.div`
    width: calc(60% - 5px);
    display: inline-block;
`;

export const ContentButtonDelete = styled.div`
    width: calc(40% - 5px);
    display: inline-block;
`;

export const ContentQuizDetail = styled.div`
    width: 100%;
	display: inline-block;
	box-sizing: border-box;
	cursor: pointer; 
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	height: 150px;
	
	@media (max-width: 767px) {
	    width: 100%;
	    display: inline-block;
	    border: 1px solid #ebebeb;
	    margin-left: 7%;
	    box-sizing: border-box;
	    max-width: 85%;
	    cursor: pointer;
	    -webkit-animation: fadeinout 4s linear 1 forwards;
	    animation: fadeinout 4s linear 1 forwards;
	}
`;

export const ContentTag = styled.div`
    width: 100%;
	display: inline-block;
	border: 1px solid #ebebeb;
	box-sizing: border-box;
	cursor: pointer; 
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
	height: ${props => props.tagSize > 0 ? '0' : '150px'};
	margin-top: 5%;
	
	@media (max-width: 767px) {
	    width: 100%;
	    display: inline-block;
	    border: 1px solid #ebebeb;
	    margin-left: 7%;
	    box-sizing: border-box;
	    max-width: 85%;
	    cursor: pointer;
	    -webkit-animation: fadeinout 4s linear 1 forwards;
	    animation: fadeinout 4s linear 1 forwards;
	}
`;

export const HeaderQuizDetail = styled.div`
    background-color: #ebebeb;
    height: 50px;
    width: 100%;
`;

export const ContentNumberQuestion = styled.div`
    background-color: white;
    height: auto;
    padding: 10px 5px;
    border: 1px solid #ebebeb;
`;

export const ContentQuizDetailText = styled.div`
    padding-top: 16px;
    padding-left: 5%;
    width: calc(50% - 5px);
    display: inline-flex;
`;

export const HeaderQuizDetailText = styled.p`
    font-weight: 500;    
`;

export const HeaderNumberQuestion = styled.p`
    margin: 10px;
    font-weight: 500;
    font-size: 20px;
    display: flex;
`;

export const CreateDate = styled.table`
    display: block;
    font-weight: 500;
    width: 100%;
    height: auto;
`;

export const CreateDateRow = styled.tr`
    font-size: 11px;
`;

export const CreateDateColumn = styled.td`
    font-size: 12px;
    line-height: 15pt;
  	display: inline-flex;
    @media (max-width: 767px) {
        line-height: 15pt;
        }
`;

export const CreateDateBody = styled.tbody`
    display: block;
    margin: 10px;
    line-height: 10px;
`;

export const ContentQuizDetailButton = styled.div`
    float: right;
    margin: 7px 10px;
    display: inline-flex;
     @media (max-width: 767px) {
        margin-top: 7px;
        }
`;

export const HeaderQuizDetailButton = styled(Button)`
    text-transform: uppercase;
    font-weight: 500 !important;
    background-color: #ffffff !important;
    float: right;
`;