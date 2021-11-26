import styled from "styled-components";

export const StepContainer = styled.div`
	.container {
			width: 600px;
			margin-left: 30px; 
	}

	.progressbar {
    counter-reset: step;

    li {
			list-style-type: none;
			width: 30%;
			float: left;
			font-size: 16px;
			position: relative;
			text-align: center;

			:not(:first-child) {
				&::after {
					content: ' ';
					background-color: #D6D7DA;
					width: 80px;
					top: 14px;
					left: -50px;
					height: 1px;
					margin: 0 5px;
					position: absolute;
				}
			}

			&.active {
				color: #606C36;	

				::before {
					border-color: #606C36;
					background: #606C36;
					color:white;			
				}

				:not(:first-child) {
					&::after {
						background-color: #606C36;
					}
				}
			}
			
			::before {
				width: 30px;
				height: 30px;
				content: counter(step);
				counter-increment: step;
				line-height: 30px;
				border: 2px solid #D6D7DA;
				display: block;
				text-align: center;
				margin: 0 auto 10px auto;
				border-radius: 50%;
			}
    }
}




@media screen and (max-width: 600px) {
    .container {
        width: 500px;
        margin-left: 10px; 
    }
@media screen and (max-width: 450px) {
    .container {
        width: 400px;
        margin-left: 0px; 
    }

@media screen and (max-width: 360px) {
    .container {
        width: 300px;
        margin-left: -10px; 
    }
    .progressbar li {
       font-size:14px;
    }
}
`;
