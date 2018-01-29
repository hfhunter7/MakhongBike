import styled from 'styled-components';

export const CoursesEmptyContainer = styled.div`
     width: 100%;
     height: auto;
     margin-top: 10em;
     margin-bottom: 10em;
     text-align: center;
     @media (max-width: 767px) {
        padding-top: 10px;
        padding-bottom: 15px;
        margin: 50px 0;
     }
`;

export const IconEmpty = styled.div`
     font-size: 100px;
     color: gray;
     margin-bottom: 30px;
`;

export const CoursesEmptyTitle = styled.div`
     font-size: 20px;
     color: #666666;
     font-weight: bold;
     margin-bottom: 10px;
     
     @media (max-width: 767px) {
        font-size: 20px;
     }
`;
export const CoursesEmptySubTitle = styled.div`
     font-size: 14px;
     color: #ccc;
     margin-bottom: 10px;
     margin-right:10px;
     margin-left: 10px;
     
     @media (max-width: 767px) {
        font-size: 12px;
     }
`;
export const ButtonCoursesEmpty = styled.button`
    margin-top: 20px;
    background-color: #0088FF;
    border: unset;
    width: 160px;
    height: 36px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

`;