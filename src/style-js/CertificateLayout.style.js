import styled from 'styled-components';
import Button from 'material-ui/Button'
import { HashLoader } from 'react-spinners';

export const Loader = styled(HashLoader)`
    
`;

export const ContainLoader = styled.div`
    margin-left: 48%;
    margin-top: 20%;
`;

export const CertificateEmptyContainer = styled.div`
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

export const CertificatesDetailContent = styled.div`

`;

export const DetailContentHeader = styled.div`
	display: flex;
	height: 50px;
	width: 100%;
	align-items: center;
	border: 1px solid #ebebeb;
`;

export const ButtonAdd = styled(Button)`
    margin-left: 65% !important;
`;

export const DetailContentBody = styled.div`
 	width: 100%;
 	height: auto;
 	align-items: center;
	border: 1px solid #ebebeb;
	background-color: #ffffff;
`;

export const CertificateEmptyTitle = styled.div`
 font-size: 20px;
 color: #666666;
 font-weight: bold;
 margin-bottom: 10px;
 
 @media (max-width: 767px) {
 font-size: 20px;
 }
`;
export const CertificateEmptySubTitle = styled.div`
 font-size: 14px;
 color: #ccc;
 margin-bottom: 10px;
 
 @media (max-width: 767px) {
 font-size: 12px;
 }
`;
export const ButtonCertificateEmpty = styled.button`
 margin-top: 20px;
 background-color: #0088FF;
    border: unset;
    width: 180px;
    height: 36px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;

`;