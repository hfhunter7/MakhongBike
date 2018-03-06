import styled from 'styled-components';
import { IconSpan } from './Icon.style'
import Button from "material-ui/Button";

export const PurchaseContainer = styled.div`
	padding: 50px 150px;
	font-size: 13px;
	background-color: #FAFAFA;
	@media (max-width: 767px) {
		font-size: 13px;
    	padding: 30px 10px;
    	width: 100%;
    	padding-bottom: 50px;
    	
    	
	}
	
`;
export const PurchaseHeader = styled.div`
	border-bottom: 1px solid #ccc;
	padding-bottom: 20px;
	@media (max-width: 767px) {
		width: 75%;
		border-bottom: 1px solid #ccc;
		
	}
`;

export const PurchaseHeaderHistory = styled.div`
	border-bottom: 1px solid #ccc;
	padding-bottom: 20px;
	@media (max-width: 767px) {
		margin-top: 11px;
		width: 75%;
    	display: inline-block;
    	padding-left: 6em;
    	padding-bottom: 11px;
    
	}

`;

export const PurchaseEmpty = styled.div`
    margin-top: 6%;
    margin-bottom: -5%;
	width: 100%;
	text-align: center;
	padding-top: 50px;
	padding-bottom: 50px;
	cursor: default;
	@media (max-width: 767px) {
		padding-top: 50px;
	}
`;

export const IconEmpty = styled(IconSpan)`
	font-size: 180px;
	color: gray;
`;

export const DetailOrderNumber = styled.div`
	font-size: 20px;
	margin-bottom: 10px;
	font-weight: bolder;
	display: inline-block;
	@media (max-width: 767px) {
		font-size: 15px;
	}
`;

export const PurchaseSubtitle = styled.div`
	font-size: 14px;
	color: #ccc;
	font-weight: 300;
	
	@media (max-width: 767px) {
		font-size: 12px;
	}
`;

export const ButtonEmpty = styled.button`
	margin-top: 20px;
	background-color: #2A679F;
    border: unset;
    width: 218px;
    height: 36px;
    color: white;
    font-size: 13px;
    font-weight: 600;

`;

export const AddPurchase = styled.button`
	margin-top: -15px;
    background-color: #2A679F;
    border: unset;
    width: 218px;
    height: 36px;
    color: white;
    font-size: 13px;
    font-weight: 600;
    cursor: pointer;
    float: right;
    display: inline-block;
    @media (max-width: 767px) {
    	height: 38px;
    	margin-top: 8px;
    	margin-right: 61px;
    	font-size: 12px;
    	margin-bottom: 10px;
    	width: 72%;
	}
`;

export const PurchaseTitlelift = styled.div`
	font-size: 13px;
	margin-bottom: 10px;
	font-weight: bolder;
	display: inline-block;
	@media (max-width: 767px) {
		font-size: 15px;
	}
	
`;

export const PurchaseTitleliftHistory = styled.div`
	font-size: 13px;
	margin-bottom: -10px;
	font-weight: bolder;
	display: inline-block;
	@media (max-width: 767px) {
	   text-align: center;
     margin-bottom: 26px;;
    	margin-left: -40px;
    	width: 100%;
	}
	
`;

export const BillAddress = styled.div`
	font-size: 13px;
	margin-bottom: -10px;
	font-weight: bolder;
	display: inline-block;
	@media (max-width: 767px) {
		font-size: 15px;
	}
`;

export const PurchaseTitleright = styled.div`
	font-size: 13px;
	margin-bottom: -10px;
	font-weight: bolder;
	display: inline-block;
	float: right;
	color: #666666;
	margin-right: 10px;
	@media (max-width: 767px) {
   
       width: 50%;
       text-align: right;
	    }
`;

export const DetailDate = styled.div`
	font-size: 13px;
	margin-bottom: -10px;
	font-weight: bolder;
	display: inline-block;
	float: right;
	margin-right: 10px;
	@media (max-width: 767px) {
		font-size: 15px;
		margin-bottom: 0.1px;
		float: left;
	}
`;

export const ButtonDeleteContain = styled.div`
 	float: right;
 	margin-top: -3%;
`;

export const ButtonEditAdult = styled(Button)`
    margin-left: 2%;
`;

export const ButtonDelete = styled(Button)`	
 	color :red !important;
 	font-weight: 500;
 	background-color: white !important;
 	border: 1px solid #ebebeb !important;
 	width: 10%;
 	margin-left: 1% !important;
 	&:hover {
		background-color: #ebebeb !important;
	}
	@media (max-width: 767px) {
	    width: 25%;
	}
 `;

export const DetailPaidWith = styled.div`
	font-size: 13px;
	margin-bottom: -10px;
	font-weight: bolder;
	display: inline-block;
	@media (max-width: 767px) {
		font-size: 15px;
	}
`;

export const SortPurchaseDDL = styled.select`
	margin-top: -15px;
    background-color: white;
    border: unset;
    width: 218px;
    height: 36px;
    color: #000000;
    font-size: 13px;
    font-weight: bolder;
    cursor: pointer;
    float: right;
    display: inline-block;
    border: 1px solid #ddd;
    border-radius: 4px;
    padding: 5px; 
    @media (max-width: 767px) {
	float: right;
	width: 130px;
	    }
`;

export const SortPurchaseOption = styled.option`
	font-size: 14px;
	font-weight: 500;
`;

export const PurchaseContent = styled.div`
	display: flex;
	
`;
export const PurchaseBox = styled.div`
	width: 100%;
    height: 100%;
   	margin-top: 10px;
   	@media (max-width: 767px) {
    	width: 95%;
	}
   	
`;
export const PurchaseBoxHeader = styled.div`
	width: 70%;
    height: 60px;
    background-color: #eaeaea;
    margin-left: 13%;
    @media (max-width: 767px) {
    	margin-top: 38px;
    	width: 100%;
	}
`;

export const ItemBoxHeader = styled.div`
    margin-top: 2%;
	width: 70%;
    height: 60px;
    margin-left: 13%;
    background-color: #eaeaea;
    @media (max-width: 767px) {
    	margin-top: 38px;
    	width: 100%;
	}
`;

export const PurchaseBoxHeaderHistory = styled.div`
	width: 100%;
    height: 60px;
    background-color: #eaeaea;
    @media (max-width: 767px) {
    	width: 100%;
    	height: auto;
    	display: inline-block;
	}
`;
export const Number = styled.div`
    display: inline-block;
    width: 5%;
    padding-left: 25px;
     @media (max-width: 767px) {
    	width: 1%;
	}
    
`;

export const NumberHistory = styled.div`
    display: inline-block;
    width: 10%;
    margin-left: 10%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }
`;

export const NumberHistoryAdmin2 = styled.div`
    display: inline-block;
    width: 8%;
    margin-left: 3%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }
`;

export const NumberHistoryAdmin = styled.div`
    display: inline-block;
    width: 10%;
    margin-left: 3%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }
`;

export const TextRoute = styled.div`
    display: inline-block;
    width: 31%;
    margin-left: 13%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const TextRouteAdmin = styled.div`
    display: inline-block;
    width: 27%;
    margin-left: 10%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const RouteText = styled.div`
    display: inline-block;
    width: 34%;
    margin-left: 12%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const RouteText2 = styled.div`
    display: inline-block;
    width: 40%;
    margin-left: 14%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const RouteTextAdmin = styled.div`
    display: inline-block;
    width: 29%;
    margin-left: 10%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const EquipmentText = styled.div`
    display: inline-block;
    width: 34%;
    margin-left: 12%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const EmptyRentText = styled.div`
    display: inline-block;
    width: 34%;
    text-align: center;
    margin-left: 32%;
      @media (max-width: 767px) {
      width: 5%;
      float: left;
      margin-left: 6px;
	    }  
`;

export const OrderDateTime = styled.div`
    display: inline-block;
    width: 20%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const TextDetailAdmin = styled.div`
    display: inline-block;
    width: 17%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const OrderDateTimeAdmin = styled.div`
    display: inline-block;
    width: 8%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const OrderDateTimeAdmin2 = styled.div`
    display: inline-block;
    width: 13%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const AdultText = styled.div`
    display: inline-block;
    width: 3%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const AdultText2 = styled.div`
    display: inline-block;
    width: 35%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const PriceText = styled.div`
    display: inline-block;
    width: 30%;
    text-align: center;
    margin-left: 13%;
      @media (max-width: 767px) {
		width: 30%;
    	float: left;
   	 	word-wrap: break-word;
	  }
`;

export const OrderNumber = styled.div`
    display: inline-block;
    width: 20%;
      @media (max-width: 767px) {
	   width: 25%; 
	   text-align: left;
	    }
`;

export const OrderNumberAdmin = styled.div`
    display: inline-block;
    width: 20%;
    margin-left: 6px;
      @media (max-width: 767px) {
	   width: 25%; 
	   text-align: left;
	    }
`;

export const OrderNumberAdmin2 = styled.div`
    display: inline-block;
    width: 20%;
      @media (max-width: 767px) {
	   width: 25%; 
	   text-align: left;
	    }
`;

export const ChildNumber = styled.div`
    display: inline-block;
    width: 20%;
    margin-left: 11%;
      @media (max-width: 767px) {
	   width: 25%; 
	   text-align: left;
	    }
`;

export const OrderItem = styled.div`
    display: inline-block;
    width: 30%;
    text-align: center;
     @media (max-width: 767px) {
        text-align: left;
    	 width: 30%;
    	
	}
`;

export const Instructor = styled.div`
    display: inline-block;
    width: 17%;
    text-align: center;
     @media (max-width: 767px) {
    	width: 17%;	
    	text-align: left;
	}
`;

export const PaidWith = styled.div`
    display: inline-block;
    width: 20%;
	  @media (max-width: 767px) {
	    width: 20%;
	    text-align: left;
	    display: inline-flex;
	    }
`;

export const PaidWithAdmin = styled.div`
    display: inline-block;
    width: 17%;
	  @media (max-width: 767px) {
	    width: 20%;
	    text-align: left;
	    display: inline-flex;
	    }
`;

export const PaidWithAdmin2 = styled.div`
    display: inline-block;
    width: 22%;
	  @media (max-width: 767px) {
	    width: 20%;
	    text-align: left;
	    display: inline-flex;
	    }
`;

export const ItemRent = styled.div`
    display: inline-block;
    width: 20%;
    margin-left: 11%;
	  @media (max-width: 767px) {
	    width: 20%;
	    text-align: left;
	    display: inline-flex;
	    }
`;

export const OrderCourseType = styled.div`
    display: inline-block;
    width: 10%;
    text-align: center;
    margin-left: 15.5%;
     @media (max-width: 767px) {
    	width: 10%;
    	
	}
`;

export const OrderItemPrice = styled.div`
    display: inline-block;
    width: 7%;
    text-align: center;
    margin-left: 10%;
       @media (max-width: 767px) {
    	width: 10%;
    	font-size: 10px;
	}
`;

export const ItemPrice = styled.div`
    display: inline-block;
    width: 20%;
    text-align: center;
    margin-left: 33%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const ItemDate = styled.div`
    display: inline-block;
    width: 24%;
    text-align: center;
    margin-left: 33%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const PurchaseBoxHeaderMenu = styled.div`
	padding-top: 21px;
	color: #000000;
    font-size: 13px;
    font-weight: bolder;
      @media (max-width: 767px) {
        font-size: 10px;
      }
`;

export const PurchaseBoxHeaderMenuHistory = styled.div`
	padding-top: 21px;
	color: #000000;
    font-size: 13px;
    font-weight: bolder;
      @media (max-width: 767px) {
        font-size: 12px;
    	width: 100%;
    	padding-top: 5px;
    	padding-bottom: 5px;   
    	display: inline-flex; 
	    }
`;

export const PurchaseBoxDetail = styled.div`
    background-color: #ffffff;
    //display: inline-flex;
    width: 100%;
    height: auto;
    @media (max-width: 767px) {
    	
	    }
   
`;

export const ItemBoxDetail = styled.div`
    background-color: #ffffff;
    //display: inline-flex;
    margin-left: 13%;
    width: 70%;
    height: auto;
    @media (max-width: 767px) {
    	
	    }
   
`;
export const PurchaseDetailId = styled.div`
	width: 5%;
    padding-left: 25px;
     @media (max-width: 767px) {
     width: 1%;
    	font-size: 10px;
	}
	
`;

export const PurchaseDetailIdHistory = styled.div`
	display: inline-block;
    width: 10%;
    @media (max-width: 767px) {
      width:20px;
      float: left;
	    }
	
`;
export const PurchaseDetailOrderDate = styled.div`
	display: inline-block;
    width: 35%;
	 @media (max-width: 767px) {
	width: 90px;
	float: left;
	    }
`;
export const PurchaseDetailOrderNumber = styled.div`
	display: inline-block;
    width: 20%;
	word-wrap: break-word;
	cursor: pointer;
	 @media (max-width: 767px) {
    	font-size: 9px;
    	word-wrap: break-word;
    	width: 25%;
    	text-align: left;
	}
`;

export const ChildText = styled.div`
	display: inline-block;
    width: 20%;
	word-wrap: break-word;
	cursor: pointer;
	 @media (max-width: 767px) {
    	font-size: 9px;
    	word-wrap: break-word;
    	width: 25%;
    	text-align: left;
	}
`;

export const ChildText2 = styled.div`
	display: inline-block;
    width: 10%;
	 @media (max-width: 767px) {
    	font-size: 9px;
    	word-wrap: break-word;
    	width: 25%;
    	text-align: left;
	}
`;

export const ChildTextAdmin = styled.div`
	display: inline-block;
    width: 8%;
	word-wrap: break-word;
	cursor: pointer;
	margin-left: 12%;
	 @media (max-width: 767px) {
    	font-size: 9px;
    	word-wrap: break-word;
    	width: 25%;
    	text-align: left;
	}
`;

export const ButtonEditChild = styled(Button)`
    margin-left: 1%;
`;

export const PurchaseDetailOrderNumberHistory = styled.div`
	width: 20%;
	color: #0088FF;
	font-weight: bolder;
	display: inline-block;

	@media (max-width: 767px) {
	    width: 90px;
	   
	    
	    }
`;
export const PurchaseDetailPaidWith = styled.div`
	 width: 30%;
	 font-size: 15px;
	
     padding-left: 12%;
	  @media (max-width: 767px) {
    	width: 17%;
    	font-size: 10px;
	}
`;

export const PurchaseDetailPaidWithHistory = styled.div`
	 width: 20%;
	 display: inline-block;
	  @media (max-width: 767px) {
	    width: 60px;
	    margin-left: 0px;
	    }
`;


export const PurchaseDetailOrderItemName = styled.div`
 width: 30%;
 font-size: 15px;
 margin-left: 15%;
  @media (max-width: 767px) {
    	font-size: 10px;
    	margin-left: 7%;
    	width: 20%;
	}
`;

export const OrderTotal = styled.div`
    display: inline-block;
    width: 20%;
    text-align: left;
    margin-left: -3%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const OrderTotalAdmin = styled.div`
    display: inline-block;
    width: 15%;
    text-align: left;
    margin-left: -3%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const OrderTotalAdmin2 = styled.div`
    display: inline-block;
    width: 15%;
    text-align: left;
    margin-left: -3%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const ReserveStatus = styled.div`
    display: inline-block;
    width: 13%;
    text-align: left;
    margin-left: 1%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const ReserveStatus2 = styled.div`
    display: inline-block;
    width: 15%;
    text-align: left;
    margin-left: 3%;
      @media (max-width: 767px) {
   			width: 20%;
   			display: inline-flex;

	    }
`;

export const PurchaseDetailBoxText = styled.div`
	display: inline-flex;
	width: 85%;
	border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: #EEEEEE;
    background-color: #ffffff;
    line-height: 4;
    @media (max-width: 767px) {
      font-size: 10px;
      width: 100%; 
      display: inline-block;
      
	    }
`;

export const PurchaseDetailBoxText2 = styled.div`
	display: inline-flex;
	width: 100%;
	border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: #EEEEEE;
    background-color: #ffffff;
    line-height: 4;
    @media (max-width: 767px) {
      font-size: 10px;
      width: 100%; 
      display: inline-block;
      
	    }
`;

export const ItemRentDetail = styled.div`
	display: inline-flex;
	width: 70%;
	margin-left: 13%;
	border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: #EEEEEE;
    background-color: #ffffff;
    line-height: 4;
    @media (max-width: 767px) {
      font-size: 10px;
      width: 100%; 
      display: inline-block;
      
	    }
`;

export const EmptyRent = styled.div`
  display: inline-flex;
	width: 70%;
	margin-left: 13%;
	border-bottom-style: solid;
    border-bottom-width: thin;
    border-bottom-color: #EEEEEE;
    background-color: #ffffff;
    line-height: 4;
    @media (max-width: 767px) {
      font-size: 10px;
      width: 100%; 
      display: inline-block;
      
	    }
`;

export const Summary = styled.div`
	width: 17%;
	font-weight: bolder;
	font-size: 17px;
	margin-top: 3%;
	float: right;
	  @media (max-width: 767px) {
    	//margin-bottom: 30px;
    	width: 100%;
    	font-size: 12px;
    	text-align: right;
   		 margin-right: 25px;
    	font-weight: bolder;
	}
`;

export const ButtonEditStatusPayment = styled(Button)`
    
`;