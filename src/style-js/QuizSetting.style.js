import styled from "styled-components";

export const ExamBox = styled.div`
	display: inline-grid;
    height: auto;
    width: 100%;
    @media only screen and  (max-width:767px) {
    		width: 100%;
    		height: auto;
    		display: inline-block;
   		 	border: 1px solid #ebebeb;
    		margin-left: 5%;
    		box-sizing: border-box;
    		max-width: 85%;
    }	
    	.header-table {
        	border: #e2e2e2;
    		border-style: solid;
    		border-width: thin;
    		height: auto;
    		width: 100.3%;
    		background-color: #ffffff;
    		font-weight: 600;
    		display: inline-flex;
    		@media only screen and  (max-width: 767px) {
    			height: 59px;
    			float: left;
    			width: 101%;
      		}	
      		.setting-icon {
      		    background-color: #0088ff;
                padding-top: 14px;
                padding-left: 20px;
                width: 5%;
                color: white;
                @media only screen and (max-width: 767px){
                    padding-top: 17px;
                    padding-left: 16px;
                    width: 10%;
                }
      		}
    	}
    	.body-table {
        	border-bottom: 1px solid #e2e2e2;
        	border-left: 1px solid #e2e2e2;
        	border-right: 1px solid #e2e2e2;
    		border-width: thin;
    		height: 50px;
    		width: 100.3%;
    		background-color: #ffffff;
    		display: inline-flex;
    		@media only screen and  (max-width: 767px) {
    			height: auto;
    			float: left;
    			width: 101%;
    			font-size: 12px;
      		}	
    	}
`;
export const Title = styled.div`
     width: 49%;
     margin-left: 10px;
     padding: 15px 10px;
     font-size: 18px;
     @media only screen and  (max-width: 767px) {
        padding: 10px 10px;
        margin-top: 10px;
     }
`;
export const TextHead = styled.div`
     width: 20%;
     padding: 16px 30px;
     color: #bbb9b9;
     @media only screen and  (max-width: 767px) {
        width: 30%;
        //padding: 10px 10px;
     }
`;
export const TextDetail = styled.div`
     width: 50%;
     padding: 16px 0px;
     @media only screen and  (max-width: 767px) {
        //padding: 10px 0px;
        width: 50%;
     }
`;
export const TextDetaill = styled.div`
     width: 50%;
     padding: 16px 0px;
     @media only screen and  (max-width: 767px) {
        //padding: 10px 0px;
        width: 50%;
                
     }
`;
export const TextDetail3 = styled.div`
     width: 50%;
     padding: 16px 0px;
     @media only screen and  (max-width: 767px) {
        //padding: 10px 0px;
        width: 50%;
        margin-left: 10px;  
     }
`;
export const SwitchBox = styled.div`
    margin: 5px 10px 0px 30px !important;
    width: 13%;
    float: right !important;
    text-align: center;
     @media only screen and  (max-width: 767px) {
     margin: 0px 39px 0px 0px !important;
               
     }
        
`;
export const ButtonSetting = styled.div`
        background-color: #fafafa!important;
        border-radius: 2px !important;
        box-shadow: 0px 1px 4px 0px rgba(0,0,0,0.2) !important;
        float: right !important;
        width: 13%;
        height: auto !important;
        padding: 8px 8px;
        margin: 8px 30px 8px 10px !important;
        text-align: center;
        font-weight: 500;
        cursor: pointer;
        @media (max-width: 767px) {
            margin: 4% 6% !important;
            padding: 6px 5px;
            width: 50px;
        }
`;