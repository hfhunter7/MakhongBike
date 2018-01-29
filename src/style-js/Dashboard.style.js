import styled from 'styled-components';

export const BestSellingBox = styled.div`
    width: 100%;
	display: inline-block;
	border: 1px solid #ebebeb;
	//margin-left: 28%;
    //margin-top: -31.7%;
    //margin-bottom: 2%;
	box-sizing: border-box;
	//max-width: 100%;
	cursor: pointer; 
	-webkit-animation: fadeinout 4s linear 1 forwards;
	animation: fadeinout 4s linear 1 forwards;
   	
    @media (max-width:767px) {
      display: inline-grid;
      width: 100%;
      height: 100%;
      margin-top: 10px;
      padding-bottom: 20px;
      padding-left: 6%;
      padding-right: 2%;
      margin-bottom: 40px;
    }	
    	.header-selling-box {
    		border: solid thin #ecf0f1;
    		height: 60px;
    		width: 100%;
    		background-color: #EBEBEB;
    	}
`;

export const BestSelling = styled.div`
	font-weight: bolder;
	margin-top: 19px;
    margin-left: 20px;
    font-size: 16px;
    display: inline-flex;
`;

export const SellingTitle = styled.div`
	display: block;
	
`;

export const HRLine = styled.hr`
    margin-left: 2%;
    margin-right: 2%;
    max-width: 95%;
    width:95%;
    color: #000;
   @media (max-width: 767px) {
		margin-left: 5%;
        max-width: 90%;
        color: #000;
	}
`;

export const ItemNameTitle = styled.div`
	font-weight: bolder;
	width: 70%;
    font-size: 14px;
    margin-top:1.5%;
    margin-left: 2.0%;
    display: inline-flex;
`;
export const TypeNameTitle = styled.div`
	font-weight: bolder;
    width: 10%;
    font-size: 14px;
    margin-top:1.5%;
    margin-left: 2.0%;
    display: inline-flex;
`;

export const TotalSoldTitle = styled.div`
	font-weight: bolder;
	width: 10%;
    font-size: 14px;
    margin-top:1.5%;
    margin-left: 2.0%;
    display: inline-flex;
`;

export const SellingDetail = styled.div`
	display: block;
`;

export const ItemNameDetail = styled.div`
	font-weight: bolder;
	width: 70%;
    font-size: 13px;
    margin-top:0.2%;
    margin-left: 2.0%;
    display: inline-flex;
`;
export const TypeNameDetail = styled.div`
	font-weight: bolder;
    width: 10%;
    font-size: 13px;
     margin-top:0.5%;
    margin-left: 2.0%;
    display: inline-flex;
`;

export const TotalSoldDetail = styled.div`
	font-weight: bolder;
	width: 10%;
    font-size: 13px;
   margin-top:0.5%;
    margin-left: 2.0%;
    display: inline-flex;
`;










