import styled from "styled-components";

export const ExamBox = styled.div`
	display: inline-grid;
    height: auto;
    width: 70%;
    margin-left: 15%;
    margin-right: 15%;
    margin-bottom: 33px;
    box-shadow: 2px 2px 12px 0 lightgrey;
    @media only screen and  (max-width:767px) {
          display: inline-grid;
          width: 95%;
          height: auto;
          margin: 0;
          box-shadow: none;
          margin-left: 8px;
    }	
    	.header-table {
        	border-bottom: #e2e2e2;
    		border-bottom-style: solid;
    		border-bottom-width: thin;
    		height: 50px;
    		width: 100.3%;
    		background-color: #ffffff;
    		font-weight: 600;
    		display: inline-flex;
    		@media only screen and  (max-width: 767px) {
    			height: auto;
    			float: left;
    			width: 100%;
                margin-top: 1em;
                
      		}	
    	}
    	
    	.body-table {
        	border-bottom: #e2e2e2;
    		border-bottom-style: solid;
    		border-bottom-width: thin;
    		height: auto;
    		width: 100.3%;
    		background-color: #ffffff;
    		display: inline-flex;
    		//padding-bottom: 15px;
    		@media only screen and  (max-width: 767px) {
    			height: auto;
    			float: left;
    			width: 100%;
    			font-size: 12px;
    			padding-bottom: 0px;
      		}	
    	}
    	
    	.body-table:hover{
    	    background-color: #f0f8ff;
    	}
`;
export const Text1 = styled.div`
     width: 2%;
     padding: 15px 10px;
     text-align: center;
     @media only screen and  (max-width: 767px) {
        padding: 10px 10px;
     }
`;

export const Text2 = styled.div`
     width: 49%;
     padding: 15px 10px;
     @media only screen and  (max-width: 767px) {
        padding: 10px 10px;
        width: 40%;
     }
`;
export const Text3 = styled.div`
     width: 13%;
     padding: 15px 42px;
     text-align: center;
     @media only screen and  (max-width: 767px) {
        margin-right: 5px;
        padding: 10px 10px;
        
     }
`;
export const Text4 = styled.div`
     width: 14%;
     padding: 15px 40px;
     text-align: center;
     @media only screen and  (max-width: 767px) {
        margin-right: 5px;
        padding: 10px 10px;
        width: 30%;
       
     }
`;