import styled from 'styled-components';
import { greenNav } from './variables.style'
import { IconSpan, Icon } from './Icon.style';

export const CourseDetailContainer = styled.div`
	
`;

export const CourseInformation = styled.div`
	background-color: white;
	padding: 20px 20px;
	display: flex;
	border-bottom: 1px solid #d1d1d1;
	@media (max-width: 767px) {
		padding: 20px 10px;
		display: block;
	}
`;

export const CourseContent = styled.div`
	padding: 20px 30px;
	display: flex;
	background-color: #fafafa;
	@media (max-width: 767px) {
		padding: 20px 10px;
		display: block;
	}
`;

export const CourseDetailBlock = styled.div`
	margin-left: 20px;
	width: 100%;
	@media (max-width: 767px) {
		margin-left: 0;
	}
`;

export const IncludeBlock = styled.div`
	margin-top: 20px;
`;

export const InformationText = styled.div`
	font-size: ${props => props.bold ? "16px" : undefined };
	font-size: ${props => props.small ? "13px" : undefined };
	font-weight: ${props => props.small ? "300" : undefined };
	padding-top: ${props => props.paddingTop};
`;

export const InformationButtonBlock = styled.div`
	margin-top: 20px;
`;

const ButtonStyle = styled.button`
	cursor: pointer;
	display: inline-block; // [2]
	text-align: center;    // [2]
	text-decoration: none; // [2]
	outline: none;
	border: 0;
	padding: 6px 16px 5px 16px;
	overflow: hidden;
	transform: translate(0, 0);
	background: transparent;
	height: 36px;
	font-weight: 400;
	min-width: 88px;
	border-radius: 2px;
	font-size: 14px;
	text-transform: uppercase;

	&:hover {
		opacity: 0.8;
	}
`;

export const BuyButton = styled(ButtonStyle)`
	background-color: ${props => props.is_buy || props.is_addToCart ? '#e0e0e0' : greenNav};
	color: ${props => props.is_buy || props.is_addToCart ? '#ccc' : '#fff'};
	margin-right: ${props => props.marginRight ? props.marginRight : undefined};
	min-width: 200px;
	
	&:hover {
		opacity: ${props => props.is_buy || props.is_addToCart ? 1 : 0.8};
	}
	cursor: ${props => props.is_buy || props.is_addToCart ? 'default' : 'pointer'};
	
	@media (max-width: 767px) {
		margin-right: 0;
		margin-bottom: 10px;
		width: 100%;
	}
`;

export const AddToCartButton = styled(ButtonStyle)`
	min-width: 200px;
	color: ${props => props.is_buy || props.is_addToCart ? '#ccc' : '#999'};
	border: 2px solid ${props => props.is_buy || props.is_addToCart ? '#e0e0e0' : '#ccc'};
	&:hover {
		opacity: ${props => props.is_buy || props.is_addToCart ? 1 : 0.8};
	}
	cursor: ${props => props.is_buy || props.is_addToCart ? 'default' : 'pointer'};
	
	@media (max-width: 767px) {
		width: 100%;
	}
	
	&:hover {
		//opacity: 0.4;
		opacity: ${props => props.disabled ? undefined : '0.4'};
	}
`;

export const PurchasedButton = styled(ButtonStyle)`
	min-width: 200px;
	color: ${props => props.is_buy || props.is_addToCart ? '#ccc' : '#999'};
	border: 2px solid ${props => props.is_buy || props.is_addToCart ? '#e0e0e0' : '#ccc'};
	&:hover {
		opacity: ${props => props.is_buy || props.is_addToCart ? 1 : 0.8};
	}
	cursor: ${props => props.is_buy || props.is_addToCart ? 'default' : 'pointer'};
	
	@media (max-width: 767px) {
		width: 100%;
	}
`;

export const CourseImage = styled.div`
	position: relative;
	height: 180px;
	width: 300px;
	z-index: 99;
	background-color: #ccc;
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	border-bottom: 1px solid #fafafa;
	background-image: url(${props => props.image_url});
	
	@media (max-width: 767px) {
		height: 150px;
		width: 100%;
	}
`;

export const CourseTitle = styled.div`
	display: flex;
	font-size: 24px;
	@media (max-width: 767px) {
		font-size: 18px;
		font-weight: 500;
		width: 200%;
		display: inline-block;
		
	}
`;

export const ButtonTitle = styled.div`
	display: initial;
	margin-left: 50%;
	@media (max-width: 767px) {
		margin-top: 20px;
		font-size: 18px;
		font-weight: 500;
	}
`;

export const LeftContent = styled.div`
	width: calc(30% - 16px);
	cursor: default;
	
	@media (max-width: 767px) {
		width: 100%;
	}
`;

export const RightContent = styled.div`
	width: calc(80% - 16px);
	margin-left: 20px;
	
	@media (max-width: 767px) {
		width: 100%;
		margin-left: 0;
		margin-top: 20px;
	}
`;

const BlockContent = styled.div`
	border: 1px solid #ebebeb;
	background-color: #fafafa;
`;
export const CourseDetailLeftBox = styled(BlockContent)`
	background-color: #ffffff;
`;

export const TagLeftBox = styled(BlockContent)`
    background-color: #ffffff;
	margin-top: 5%;
	display: inherit;
`;

export const TagItemInBox = styled.div`
     display: flex;
`;

export const CourseOverview = styled(BlockContent)`
	margin-top: 20px;
	color: #ccc;
	font-size: 13px;
	font-weight: 200;
	word-wrap: break-word;
	height: 192px;
	overflow: hidden;
	padding: 10px;
`;

export const TitleTextBlock = styled.div`
	color: #000;
	width: 100%;
    font-size: 20px;
	font-weight: 400;

	@media (max-width: 767px) {
		width: 67%;
	}
`;

export const DescriptionTextBlock = styled.div`
	color: #ccc;
`;

export const SectionCourseContent = styled(BlockContent)`

`;

export const SectionCourseContentHeader = styled.div`
	display: flex;
	height: 50px;
	align-items: center;
	border-bottom: 1px solid #ebebeb;
`;

export const LeftHeadBoxContent = styled.div`
	display: flex;
	height: 50px;
	align-items: center;
	background-color: #ebebeb;
	border-bottom: 1px solid #ebebeb;
	padding-left: 10px;
	padding-right: 10px;
`;

export const HeaderIcon = styled(IconSpan)`
	font-size: 30px;
	padding-top: 10px;
`;
export const HeaderIconBlock = styled.div`
	color: #fff;
	background-color: #0088FF;
	height: 100%;
	width: 50px;
	align-items: center;
	text-align: center;
`;
export const HeaderTitle = styled.div`
	font-size: 20px;
	font-weight: 400;
	margin-left: 20px;
`;

export const SectionCourseContentBody = styled.div`
	padding: 20px;
	background-color: #fff;
`;

export const SectionCourseContainer = styled.div`
	//cursor: pointer;
	padding-bottom: 5px;
`;
export const SectionCourseBlock = styled.div`
	border-bottom: 1px solid #ccc;
	padding-top: 20px;
	padding-bottom: 20px;
	//cursor: pointer;
	background-color: #666666;

	//&:hover {
	//	background-color: #fafafa;
	//}
`;
export const SectionCourseTitle = styled.div`
	display: inline-block;
	width: 50%;
	color: #fff;
	padding-left: 20px;
	font-size: 15px;
`;
export const SectionCourseRight = styled.div`
	display: flex;
	float: right;
	color: #ccc;
`;
export const SectionCourseRightText = styled.span`
	
`;
export const IconEdit = styled(IconSpan)`
	font-size: 20px;
	padding-right: 10px;
	cursor: pointer;
	&:hover {
		color: red;
	}
`;

export const ToggleCollapse = styled(IconSpan)`
	position: relative;
	bottom: 2px;
	cursor: pointer;
`;

export const EmptySectionItem = styled(BlockContent)`
  
`;

export const TextEmpty = styled.div`
    color: #000;
    font-size: 20px;
    padding: 15px;
`;

export const ButtonAddContent = styled.div`
    padding: 15px;
`;

export const SectionCourseItemContainer = styled.div`
	//display: ${props => props.open ? 'block' : 'none'};
	
	-moz-transition: height .5s;
	-ms-transition: height .5s;
	-o-transition: height .5s;
	-webkit-transition: height .5s;
	transition: height .5s;
	height: 0;
	overflow: hidden;
`;
export const SectionCourseItemBlock = styled.div`
	border: 1px solid #ccc;
	margin-top: 20px;
	padding: 10px;
	color: #989898;
	font-size: 14px;
	
	background-color: ${props => props.preview ? undefined : "#ebebeb"};
	cursor: ${props => props.preview ? undefined: "default"};
	
	white-space: nowrap;
	overflow: hidden !important;
	 -o-text-overflow: ellipsis;
	text-overflow: ellipsis;
	
	&:hover {
		background-color: ${props => props.preview ? "#fafafa" : undefined};
		color: ${props => props.preview ? " #0088FF" : undefined};
	}
`;
export const SectionCourseItemIcon = styled(IconSpan)`
	margin-right: 10px;
`;
export const SectionCourseItemText = styled.span`
	position: relative;
	bottom: 5px;
`;
export const CourseImageLeftBox = styled.div`
	display: flex;
	padding: 20px;
	cursor: pointer;
`;

export const PriceBox = styled.div`
    margin-left: 15px;
    margin-bottom: 20px;
    color: #86b570;
    font-size: 25px;
`;

export const CourseTitleInDetailBox = styled.div`
   margin-left: 15px;
   margin-bottom: 10px;
   color: #000000;
   font-size: 20px;
   font-weight: 500;
   word-wrap: break-word;
   @media (max-width: 767px) {
    white-space: nowrap; 
    width: 300px;
    overflow: hidden;
    text-overflow: ellipsis;
	}
`;

export const CourseDetailInDetailBox = styled.div`
  margin-left: 15px;
  margin-bottom: 10px;
  color: #000;
  font-size: 15px;
  word-wrap: break-word;
    width: 400px;
   @media (max-width: 767px) {
     word-wrap: break-word;
    width: 320px;
	}
`;
export const CourseDetailInBox = styled.div`
	margin-top: 10px;
`;
export const CourseImageInBox = styled.div`
	height: 300px;
	width: 400px;
	z-index: 99;
	margin: 5px 15px 0px 15px;
	background-image: url(${props => props.image_url});
	background-repeat: no-repeat;
	background-position: center;
	background-size: 100%;
`;
export const TrainerName = styled.div`
	font-size: 13px;
	font-weight: 500;
	color: #666;
	margin-left: 10px;
	line-height: 18px;
`;

// Course Detail
export const IconImageBlock = styled.div`
	//margin-top: 30px;
	border: 1px solid #ebebeb;
	
	position: relative;
	overflow: hidden;

	height: 150px;
	max-height: 150px;
	width: 100%;
`;

export const FileInput = styled.input`
	display: none;
`

export const GridBoxImage = styled.div`
	position: relative;
	z-index: 99;
	height: 100%;
	background-position: 50%;
	background-size: cover;
	background-repeat: no-repeat;
	border-bottom: 1px solid #fafafa;
	background-image: url(${props => props.image_url});
	
	/* zoom */
	-moz-box-sizing: border-box;
	-webkit-box-sizing: border-box;
	box-sizing: border-box;
	margin: 0;
	padding: 0;
`;
export const IconUploadImageBlock = styled.div`
	text-align: center;
`;
export const IconUploadImage = styled(Icon)`
	color: #e0e0e0;
	cursor: pointer;
	font-size: 150px;
`;

export const SpanDelete = styled.span`
    z-index: 9999;
    position: absolute;
    top: 5px;
    right: 5px;
    color: red;
`;