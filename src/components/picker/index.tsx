import React, {Component} from "react";
import Styled from "styled-components";
import {Container} from "./container";
import {AddOne} from "./addOne";
import {ChildListener} from "@interfaces/childListener";
import {AddOneMessage} from "./addOneMessage";
import {ApiService} from "@services/api";
import {Query, Weight} from "@interfaces/neo4j";
import {Company} from "@interfaces/company";
import {HomeContext} from "@components/home/context";


const ButtonsContainer = Styled.div`
    width: 100%;
    height: 20px;
    position: absolute;
    bottom: 40px;
    left: 0%;
    
    @media only screen and (max-width: 750px) {
    left: 10px;
    bottom: 105px;
    }
`;

const Button = Styled.div`
    height: calc(100% - 5px);
    width: calc(33% - 62px);
    background-color: white;
    opacity: 1;
    margin: 0 20px;
    padding: 10px;
    text-align: center;
    transition: 0.5s;
    border 1px solid black;
    border-radius: 5px;
    cursor: pointer;
    display: inline-block;
    
    :hover {
        color: white;
        background-color: grey;
    }
    
    @media only screen and (max-width: 750px) {
    width: calc(100% - 42px);
    margin: 0px;
    }
`;

const OptionContainer = Styled.div`
    height: calc(100% - 60px);
    overflow-y: auto;
    margin: 0;
    padding: 0;
    
    @media only screen and (max-width: 850px) {
    height: 80%;
    width: 90%;
    }
`;

interface State {
	options: number[]
}

export default class extends Component<{}, State> implements ChildListener<AddOneMessage> {
	public static contextType = HomeContext;

	private values: { [key: number]: string | null } = {};
	private lastIndex: number = 0;
	private options: number[] = [];
	private service: ApiService = new ApiService;

	public state: State = {options: []};

	public sendMessage = (message: AddOneMessage): void => {
		const {index, value} = message;
		if (value === "remove") {
			delete this.values[index];
			this.options[index] = -1;
			this.setState({options: this.options});
		} else this.values[index] = value;
	};

	private addOption = () => {
		this.options.push(this.lastIndex++);
		this.setState({options: this.options});
	};

	private get tickers(): string[] {
		return Object.entries(this.values).filter(pair => pair[0] !== "-1").map(pair => pair[1]);
	}

	private showData = async () => {
		try {
			const tickers: string[] = this.tickers;
			const data: Query<Company>[] = await this.service.stockData(tickers);
			this.context.setCompanies(data);
		} catch (err) {
			console.error(err);
		}
	};

	private compute = async () => {
		try {
			const tickers: string[] = this.tickers;
			const data: Weight[] = await this.service.optimizePortfolio(tickers);
			this.context.setWeights(data);
		} catch (err) {
			console.error(err);
		}
	};

	public render() {
		return (
			<Container>
				<OptionContainer>
					{this.state.options.map((index: number) => index !== -1 &&
                        <AddOne key={index} index={index} parent={this}/>)}
				</OptionContainer>
				<ButtonsContainer>
					<Button onClick={this.addOption}>ADD STOCK</Button>
					<Button onClick={this.showData}>SHOW DATA</Button>
					<Button onClick={this.compute}>COMPUTE</Button>
				</ButtonsContainer>
			</Container>
		);
	}
}