import styled from 'styled-components';

export const ExamEmptyContainer = styled.div`
 width: 100%;
 height: auto;
 margin-top: 10em;
 margin-bottom: 10em;
 text-align: center;
 @media (max-width: 767px) {
 padding-top: 10px;
 padding-bottom: 15px;
 }
`;

export const IconEmpty = styled.div`
 font-size: 100px;
 color: gray;
 margin-bottom: 30px;
`;

export const ExamEmptyTitle = styled.div`
 font-size: 20px;
 color: #666666;
 font-weight: bold;
 margin-bottom: 10px;
 
 @media (max-width: 767px) {
 font-size: 20px;
 }
`;
export const ExamEmptySubTitle = styled.div`
 font-size: 14px;
 color: #ccc;
 margin-bottom: 10px;
 
 @media (max-width: 767px) {
 font-size: 12px;
 }
`;
export const ButtonExamEmpty = styled.button`
 margin-top: 20px;
 background-color: #0088FF;
    border: unset;
    width: 188px;    height: 36px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

`;