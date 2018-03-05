import styled from 'styled-components';
export const ProfileContainer = styled.div`
	width: 100%;
    height: auto;
`;
export const ProfileContent = styled.div`
	width: 100%;
    height: auto;
    background-color: #FAFAFA;
    margin-top: 7%;
    display: inline-flex;
    @media only screen and (max-width: 767px) {
      padding-top: 21px;
      height: auto;
      width: 100%;
    }
`;
export const ProfileImge = styled.div`
    display: block;
    width: 50%;
    text-align: right;
    margin-bottom: 39px;
     
    .image-size {
    	border-radius: 50%;
      @media only screen and  (max-width: 767px) {
        width: 100px;
   		height: 100px;
    	margin-left: 25px;
    	margin-top: 43px;
      }
    }
`;
export const ProfileDetail = styled.div`
    width: 50%;
    padding-left: 40px;
    @media only screen and  (max-width: 767px) {
      width: 100%;
      font-size: 13px;
    }
`;
export const ProfileInformation = styled.div`
	color: #666666;
	font-weight: bolder;
	font-size: 15px;
	margin-top: 20px;
	@media only screen and  (max-width: 767px) {
      margin-top: 13px;
      font-size: 14px;
    }
    
`;
export const ProfileInformationName = styled.div`
	color: #000000;
    font-size: 23px;	
    font-weight: bolder;
    word-wrap: break-word;
    width: 50%;
    @media only screen and  (max-width: 767px) {
      font-size: 20px;
      word-break: break-word;
      width: 80%; 
    }
    
`;

export const CustomerBox = styled.div`
	display: inline-grid;
    margin-top: 5%;
    width: 70%;
    height: auto;
    padding-left: 15%;
    padding-right: 15%;
    @media only screen and  (max-width:767px) {
      display: inline-grid;
      width: 96%;
      height: auto;
      margin-top: 25px;
      padding-bottom: 20px;
      padding-left: 5%;
      margin-bottom: 25px;
    }	
    	.header-customer-box {
        	border-bottom: #ecf0f1;
    		border-bottom-style: solid;
    		border-bottom-width: thin;
    		height: auto;
    		width: 100.3%;
    		background-color: #EBEBEB;
    		display: inline-flex;
    		@media only screen and  (max-width: 767px) {
    			height: auto;
    			float: left;
    			width: 101%;
    			margin-left: -1em;
      		}	
    	}
    	.customer-detail {
      	display: -webkit-inline-box;
      	height: 60px;
      	line-height: 30px;
      	border-bottom: #ecf0f1;
      	border-bottom-style: solid;
      	border-bottom-width: thin;
      	font-size: 14px;
      		@media only screen and  (max-width: 767px) {
        		display: inline-flex;
        		height: 45px;
        		line-height: 13px;
        		border-bottom: #ecf0f1;
        		border-bottom-style: solid;
        		border-bottom-width: thin;
        		border-left: #ecf0f1;
        		border-left-style: solid;
        		border-left-width: thin;
        		border-right: #ecf0f1;
        		border-right-style: solid;
        		border-right-width: thin;
        		font-size: 9px;
      		}
      	.customer-name {
        padding-left: 20px;
      	}
    }
`;
export const CustomerBankName = styled.div`
    	font-size: 14px;
    	font-weight: 500;
    	color: #949292;	
    	width: 15%;
    	display: inline-flex;
    	@media only screen and  (max-width: 767px) {
    	width: 24%;   
    	padding-right: 5px;
    	word-wrap: break-word;
    	display: inline-block;
    	}
`;
export const CustomerBankImge = styled.div`
	 	margin-right: 5px;
	 	margin-left: 5px;
	 	width: 5%;
    	@media only screen and  (max-width: 767px) {
    	width: 5%;
    	padding-right: 5px;
    	}
`;

export const ProfileInformationBox = styled.div`
    color: #666666;
    @media only screen and  (max-width: 767px) {
    	}
`;
export const Billing = styled.div`
	font-weight: bolder;
	//padding-top: 19px;
    padding-left: 20px;
    display: inline-flex;
    width: 100%;
    height: auto;
        margin-top: 15px;
`;
export const CustomerBankAccountDetail = styled.div`
	display: inline-flex;
	width: 90%;
    padding-left: 1%;
    padding-right: 1%;
    padding-top: 1%;
    padding-bottom: 1%;
`;
export const BankEmptyContainer = styled.div`
     width: 100.1%;
     height: auto;
      padding-top: 2em;
      padding-bottom: 2em;
     text-align: center;
         border: 1px solid #ebebeb;
     @media (max-width: 767px) {
        padding-top: 10px;
        padding-bottom: 15px;
        margin-left: -4%;
     }
`;
export const IconEmpty = styled.div`
     font-size: 100px;
     color: lightgray;
     margin-bottom: 20px;
`;
export const BankEmptySubTitle = styled.div`
     font-size: 18px;
     color: #ccc;
     margin-bottom: 10px;
     
     @media (max-width: 767px) {
        font-size: 12px;
       
     }
`;
export const Please = styled.div`
	 height: auto;
     font-size: 13px;
     width: 100%;
     word-wrap: break-word;
     margin-left: 62px;
	@media only screen and  (max-width: 767px) {
	    word-wrap: break-word;
        width: 100%;
        margin-left: 29px;
    }
`;
export const CustomerBankAccountBox = styled.div`
	display: -webkit-box;
	border-bottom: 1px solid #ccc;
    border-right: 1px solid #ccc;
    border-left: 1px solid #ccc;
    width: 100%;
    font-size: 13px;
    display: inline-flex;
    height: auto;
    padding-bottom: 10px;
    padding-top: 10px;
    @media only screen and  (max-width:767px) {
    	width: 100%;
    	margin-left: -1em;
    	height: auto;
    	padding-top: 10px;
    	padding-bottom: 10px;    
    }
`;
export const CustomerBankNumber = styled.div`
    font-size: 14px;
    font-weight: bold;
    width: 20%;
    //text-align: center;
    @media only screen and  (max-width: 767px) {
         width: 30%;
         padding-right: 5px;
         word-wrap: break-word;
         
     }
`;

export const CustomerBankHolder = styled.div`
    font-size: 14px;
    word-wrap: break-word;
    width: 20%;
    //text-align: center;
    @media only screen and  (max-width: 767px) {
        word-wrap: break-word;
        width: 20%;
    	padding-right: 5px;
     }
`;

export const CustomerBankBranch = styled.div`
    font-size: 14px;
    word-wrap: break-word;
    width: 20%;
    //text-align: center;
    @media only screen and  (max-width: 767px) {
        word-wrap: break-word;
         width: 20%;
         padding-right: 5px;
     }
`

export const CustomerButtonEdit = styled.div`
    font-size: 14px;
    text-align: right;
   	//width: 18%;
   	//width: 18%;
    margin-top: -4px;
    //margin-left: 6em;
    margin-right: 20px;
    @media only screen and  (max-width: 767px) {
         margin-left: -45px;
   		 margin-right: 10px

     }
`;
export const EditButtonBank = styled.button`
	border: 1px solid #ddd;
	background-color: #fff;
	color: black;
	border-radius: 4px;
    cursor: pointer;
    float: right;
    font-weight: bolder;
    padding: 9px; 
    width: 100px;
    @media (max-width: 767px) {
        margin-bottom: 15px;
        width: 100px;
        padding-left: 9px;
        margin-top: 10px;
        font-weight: bolder;
    }
   
`;
export const RemoveButtonBank = styled.button`
	border: 1px solid #ddd;
	background-color: #fff;
	color: red;
	border-radius: 4px;
    cursor: pointer;
    float: right;
    font-weight: bolder;
    padding: 9px;
    width: 100px;
    @media (max-width: 767px) {
        margin-bottom: 10px;
        margin-top: 10px;
        width: 100px;
        padding-left: 9px;
        font-weight: bolder;
    }
`;

export const ButtonProfile = styled.div`
	display: inline-flex;
	width: 10%;
    @media only screen and  (max-width: 767px) {
        top: 50%;
    	left: 50%;
    	margin-left: -18em;
    	margin-top: 58px;
    	display: inline-flex;
     }
`;
export const CustomerButtonDelete = styled.div`
    font-size: 14px;
    //width: 20%;
    margin-left: 0px;
    margin-top: -4px;
    @media only screen and  (max-width: 767px) {
        margin-left: 5px;
     }
`;
export const ButtonAddBilling = styled.button`
	font-size: 15px;
    width: 71px;
    height: 39px;
    background-color: white;
    color: #0088FF;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #eaeaea;
    float: right;
    margin-right: 26px;
    margin-bottom: 12px;
    margin-top: 12px;
    
`;
export const ProfileUserName = styled.div`
    display: -webkit-box;
    font-size: 14px;
    color: #666666;
    margin-top: 5px;
      .card-id {
        color: #666666;
        font-size: 13px;
        padding-top: 3px;
    	padding-left: 10px;
      	@media only screen and  (max-width: 767px) {
      	  padding-left: 5px;
    	}
      }
`;
export const ProfileBirthDateBox = styled.div`
	display: -webkit-box;
	padding-bottom: 7px;
    color: #666666;
    font-size: 21px;
      .birthday-date {
        color: #666666;
        font-size: 13px; 
        padding-top: 7px;
    	padding-left: 10px;          
      	@media only screen and  (max-width: 767px) {
      		padding-left: 5px;
    	}
      }
`;
export const ProfileTelePhoneBox = styled.div`
	display: -webkit-box;
	padding-bottom: 7px;
    color: #666666;
    font-size: 19px;
      .tel-number {
        color: #666666;
        font-size: 13px;
        display: -webkit-box;
        padding-top: 4px;
    	padding-left: 10px;   
      	@media only screen and  (max-width: 767px) {
      		padding-left: 5px;
    	}
      }
`;
export const ProfileEmail = styled.div`
	color: #666;
    font-size: 19px;
    display: -webkit-box;
    .Account-Email {
        color: #666666;
        font-size: 14px;
        display: -webkit-box;
        padding-left: 10px;
        padding-top: 3px;  
       @media only screen and  (max-width: 767px) {
      	  padding-left: 5px;
    	}  
    }  
`;
export const ProfileEdit = styled.button`
    font-size: 15px;
    width: 150px;
    height: 44px;
    background-color: white;
    color: #0088FF;
    font-weight: bold;
    cursor: pointer;
    border: 1px solid #eaeaea;
    margin-bottom: 10px;
    margin-top: 10px;
    @media only screen and  (max-width: 767px) {
      	width: 150px;
    	height: 35px;
    	margin-left: 0em;	
    	margin-bottom: 10px;
    }
`;



